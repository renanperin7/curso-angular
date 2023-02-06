import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  url: string = 'http://loiane.com'

  cursoAngular: boolean = true

  urlImagem = 'https://www.ufmt.br/ocs/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png'

  valorAtual: string = ''

  valorSalvo: string = ''

  isMouseOver: boolean = false

  nomeDoCurso: string = "JavaScript"

  valorInicial: number = 15

  getValor() {
    return 1
  }

  getCurtirCurso() {
    return true
  }

  botaoClicado() {
    alert("Clicou!")
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver
  }

  onMudouValor(evento: any) {
    console.log(evento.novoValor)
  }
}
