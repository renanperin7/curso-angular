import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.css']
})
export class DiretivaNgforComponent {
  list: string[] = ["Renan", "joão", "izabel", "iago", "eliezer", "Andre"]

  cadastros: any = [
    {nome: "Renan", idade: 23},
    {nome: "João", idade: 43},
    {nome: "Izabel", idade: 25}
  ]
}
