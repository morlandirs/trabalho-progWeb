import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lista-desejos',
  templateUrl: './lista-desejos.component.html',
  styleUrls: ['./lista-desejos.component.css']
})
export class ListaDesejosComponent {
  @Input() wishlistItems: string[] = [];
}
