import { Component, OnInit } from '@angular/core';
import { QuestaoService } from '../services/questao.service';
import { io } from "socket.io-client";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  questao!: any

  socket: any
  message: string = ''

  constructor(private service: QuestaoService) { }

  ngOnInit(): void {
    this.service.getQuestao().subscribe((data: any) => {
      // console.log(data);

      this.questao = data[0].enunciado
    })



    const socket = io("http://localhost:3003");
    const vin = 'quiz';

    socket.on("connect", () => {
      console.log('connect');

      socket.emit('message', {
        roomNameSSS: vin,
      })

      // socket.emit('join_room', {
      //   roomName: 'vehicle',
      // })
    });

    socket.emit('message', {
      teste: 'foi'
    })

    socket.on('vehicle.sensordata', function (data: any) {
      console.log('Incoming message:', data);
    });

    socket.on('message', function (data: any) {
      console.log('mensagem:', data);
    });


  }
}
