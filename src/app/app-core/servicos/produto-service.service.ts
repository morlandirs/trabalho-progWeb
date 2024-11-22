import {Injectable} from "@angular/core";
import {Produtos} from "../model/produto";

@Injectable({
  providedIn: 'root'
})
export class ProdutoServiceService {
  carrinho: Produtos[] = [];
  listaDesejos: Produtos[] = []
}
