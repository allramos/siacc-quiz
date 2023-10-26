import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerguntaService {

  url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getPergunta() {
    return this.http.get(this.url + '/pergunta')
  }
  
}
