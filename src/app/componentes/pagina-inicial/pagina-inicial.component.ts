import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  addToCart(product: string): void {
    console.log(`${product} added to cart`);
    // Implement logic to add to cart service or state
  }

  addToWishlist(product: string): void {
    console.log(`${product} added to wishlist`);
    // Implement logic to add to wishlist service or state
  }

  ngOnInit(): void {
  }

}
