import { Component } from '@angular/core';
import { QuestaoService } from './services/questao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(protected service: QuestaoService){}
}
