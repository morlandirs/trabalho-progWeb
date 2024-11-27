import { Component } from '@angular/core';
import {Produtos} from "../../app-core/model/produto";
import {ProdutoService} from "../../app-core/servicos/produto-service.service";

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent {
  products = [
    { name: 'Notebook', price: 1000, image: 'assets/imagem/product08.png' },
    { name: 'Fone de Ouvido', price: 500, image: 'assets/imagem/product02.png' },
    { name: 'Macbook', price: 5000, image: 'assets/imagem/product03.png' }
  ];

  constructor(private produtoService: ProdutoService) {}

  addToCart(product: Produtos): void {
    const message = this.produtoService.addToCart(product);
    alert(message);
  }

  addToWishlist(product: Produtos): void {
    const message = this.produtoService.addToWishlist(product);
    alert(message);
  }
}
