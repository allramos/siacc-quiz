import { Component } from '@angular/core';
import { GeralService } from './services/geral.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';

  constructor(protected service: GeralService){}
}
