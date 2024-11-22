import { Component } from '@angular/core';
import {Produtos} from "../../app-core/model/produto";

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

  addToCart(product: Produtos): void {
    if (!this.cart.find(item => item === product.name)) {
      this.cart.push(product.name);
      alert(`${product} has been added to your cart.`);
    } else {
      alert(`${product} is already in your cart.`);
    }
  }

  addToWishlist(product: Produtos): void {
    if (!this.wishlist.find(item => item === product.name)) {
      this.wishlist.push(product.name);
      alert(`${product} has been added to your wishlist.`);
    } else {
      alert(`${product} is already in your wishlist.`);
    }
  }
}
