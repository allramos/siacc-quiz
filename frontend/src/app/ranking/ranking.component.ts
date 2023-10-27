import { Component, OnInit } from '@angular/core';
import { QuestaoService } from '../services/questao.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  displayedColumns: string[] = ['position', 'nome', 'turma', 'pontos'];
  dataSource!: any;

  constructor(private service: QuestaoService){}

  ngOnInit(): void {
    this.service.getRanking().subscribe(data => {
      this.dataSource = data
    })
  }

}
