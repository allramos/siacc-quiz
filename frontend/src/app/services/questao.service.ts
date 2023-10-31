import { Injectable } from '@angular/core';
import { GeralService } from './geral.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestaoService extends GeralService{

  constructor(http: HttpClient) {
    super(http, '/questao')
   }
}
