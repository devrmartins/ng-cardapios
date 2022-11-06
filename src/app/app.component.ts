import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-cardapios';
  subtitle = "";
  mostra: boolean = true;

  clicado(valor: any) {
    this.subtitle = valor;
  }

  changeMostra() {
    this.mostra = !this.mostra;
  }

}
