import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { PaginaInicialComponent } from './componentes/pagina-inicial/pagina-inicial.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProdutosComponent } from './componentes/produtos/produtos.component';
import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';
import { ListaDesejosComponent } from './componentes/lista-desejos/lista-desejos.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    PaginaInicialComponent,
    ProdutosComponent,
    CarrinhoComponent,
    ListaDesejosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
