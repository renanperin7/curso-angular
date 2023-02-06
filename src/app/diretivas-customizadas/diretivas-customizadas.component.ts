import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.css']
})
export class DiretivasCustomizadasComponent {
  cursos: string[] = ["Angular", "Java", "React", "TypeScript", "Node"]

  mostrarCursos: boolean = false

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos
  }
}
