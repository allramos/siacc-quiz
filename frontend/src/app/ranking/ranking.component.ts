import { Component, OnInit } from '@angular/core';
import { GeralService } from '../services/geral.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {

  displayedColumns: string[] = ['position', 'nome', 'turma', 'pontos'];
  dataSource!: any;

  constructor(){}

  ngOnInit(): void {
    // this.service.getRanking().subscribe(data => {
    //   this.dataSource = data
    // })
  }

  
}
