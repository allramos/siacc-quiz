import { Component, OnInit } from '@angular/core';
import { QuestaoService } from '../services/questao.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  questao!: any

  constructor(private service: QuestaoService) { }

  ngOnInit(): void {
    this.service.getQuestao().subscribe((data: any) => {
      // console.log(data);
      
      this.questao = data[0].enunciado
    })
  }
}
