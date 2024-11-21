import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  products = [
    { name: 'Macbook', price: 5000, image: 'assets/imagem/product01.png' },
    { name: 'Fone de Ouvido', price: 500, image: 'assets/imagem/product02.png' },
    { name: 'Notebook', price: 2000, image: 'assets/imagem/product03.png' }
  ];

  cart: string[] = [];
  wishlist: string[] = [];

  addToCart(product: string): void {
    if (!this.cart.find(item => item.name === product.name)) {
      this.cart.push(product);
      alert(`${product.name} has been added to your cart.`);
    } else {
      alert(`${product.name} is already in your cart.`);
    }
  }

  addToWishlist(product: string): void {
    if (!this.wishlist.find(item => item.name === product.name)) {
      this.wishlist.push(product);
      alert(`${product.name} has been added to your wishlist.`);
    } else {
      alert(`${product.name} is already in your wishlist.`);
    }
  }
}
