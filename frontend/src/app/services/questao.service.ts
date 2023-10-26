import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestaoService {

  url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getQuestao() {
    return this.http.get(this.url + '/questao/random')
  }

}
