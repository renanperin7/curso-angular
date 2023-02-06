import { Component, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-output-properties',
  templateUrl: './output-properties.component.html',
  styleUrls: ['./output-properties.component.css']
})
export class OutputPropertiesComponent {
  @Input() valorContador: number = 0

  @Output() mudouValor = new EventEmitter()

  @ViewChild('campoInput', {static: false}) campoValorInput!: ElementRef

  incrementa() {
    this.campoValorInput.nativeElement.value++
    this.mudouValor.emit({novoValor: this.valorContador})
  }

  decrementa() {
    this.campoValorInput.nativeElement.value--
    this.mudouValor.emit({novoValor: this.valorContador})
  }
}
