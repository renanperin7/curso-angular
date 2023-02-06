import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-databinding',
  templateUrl: './two-way-databinding.component.html',
  styleUrls: ['./two-way-databinding.component.css']
})
export class TwoWayDatabindingComponent {
  nome: string = "abc"

  pessoa: any = {
    nome: "def",
    idade: 20
  }
}
