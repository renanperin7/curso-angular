import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-diretiva-switch',
  templateUrl: './diretiva-switch.component.html',
  styleUrls: ['./diretiva-switch.component.css']
})
export class DiretivaSwitchComponent {
  active = 1;

  aba: string = 'home'
}
