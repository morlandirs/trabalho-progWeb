import {Injectable} from "@angular/core";
import {Produtos} from "../model/produto";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  carrinho: Produtos[] = [];
  listaDesejos: Produtos[] = []

  addToCart(product: Produtos): string {
    if (!this.carrinho.find(item => item.name === product.name)) {
      this.carrinho.push(product);
      return `${product.name} foi adicionado ao carrinho.`;
    }
    return `${product.name} já está no carrinho.`;
  }

  addToWishlist(product: Produtos): string {
    if (!this.listaDesejos.find(item => item.name === product.name)) {
      this.listaDesejos.push(product);
      return `${product.name} foi adicionado à lista de desejos.`;
    }
    return `${product.name} já está na lista de desejos.`;
  }
}
