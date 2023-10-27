import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestaoService {

  url = 'http://localhost:3000'
  pontuacao = 0;
  encerrada = false //partida encerrada

  constructor(private http: HttpClient) { }

  getQuestao() {
    return this.http.get(this.url + '/questao/random')
  }
  
  getRanking(){
    return this.http.get(this.url + '/aluno')
  }

  salvarAluno(data: any){
    return this.http.post(this.url + '/aluno', data)
  }

}
