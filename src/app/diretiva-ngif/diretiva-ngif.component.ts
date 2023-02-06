import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent {
  cursos: string[] = ["Angular", "Java", "React", "TypeScript", "Node"]

  mostrarCursos: boolean = false

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos
  }
}