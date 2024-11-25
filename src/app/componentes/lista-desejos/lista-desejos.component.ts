import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lista-desejos',
  templateUrl: './lista-desejos.component.html',
  styleUrls: ['./lista-desejos.component.css']
})
export class ListaDesejosComponent implements OnInit {
  @Input() wishlistItems: string[] = [];
  protected readonly Component = Component;

  addToCart(product: string): void {
    console.log(`${product} added to cart`);
    // Implement logic to add to cart service or state
  }

  ngOnInit(): void {
  }
}
