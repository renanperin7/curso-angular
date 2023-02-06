import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-properties',
  templateUrl: './input-properties.component.html',
  styleUrls: ['./input-properties.component.css']
})
export class InputPropertiesComponent {
  @Input() nomeCurso: string = ''
}
