import { Component, OnInit } from '@angular/core';
import { PerguntaService } from '../services/pergunta.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  pergunta!: any

  constructor(private service: PerguntaService) { }

  ngOnInit(): void {
    this.service.getPergunta().subscribe((data: any) => {
      this.pergunta = data.enun
    })
  }
}
