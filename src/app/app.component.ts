import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso-angular';

  valor: number = 5

  deletarCiclo: boolean = false

  mudarValor() {
    this.valor++
  }

  destruirCiclo() {
    this.deletarCiclo = !this.deletarCiclo
  }
}
