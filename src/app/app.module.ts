import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageComponent} from './page/page.component';
import {CardapioComponent} from './page/cardapio/cardapio.component';
import {CarrosselComponent} from './page/carrossel/carrossel.component';
import {NavComponent} from './page/nav/nav.component';
import {Menu1Component} from './page/cardapio/menu1/menu1.component';
import {Menu2Component} from './page/cardapio/menu2/menu2.component';
import {InforComponent} from './page/cardapio/infor/infor.component';
import {InformacaoComponent} from './page/informacao/informacao.component';
import {SistemaComponent} from './sistema/sistema.component';
import {CestoComponent} from './page/cardapio/cesto/cesto.component';
import {PedidoComponent} from './page/cardapio/cesto/pedido/pedido.component';
import {DetalhesComponent} from './page/cardapio/cesto/detalhes/detalhes.component';
import {AdministracaoComponent} from './page/cardapio/administracao/administracao.component';
import {CategoriaComponent} from './page/cardapio/administracao/categoria/categoria.component';
import {MenuComponent} from './page/cardapio/administracao/menu/menu.component';
import {PromocaoComponent} from './page/cardapio/administracao/promocao/promocao.component';
import {UsuarioComponent} from './page/cardapio/administracao/usuario/usuario.component';
import {AdicionalComponent} from './page/cardapio/administracao/adicional/adicional.component';
import {DashboardComponent} from './page/cardapio/administracao/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {InputsComponent} from './page/cardapio/cesto/detalhes/inputs/inputs.component';
import {RadioComponent} from './page/cardapio/cesto/detalhes/radio/radio.component';
import {DetalhesItemComponent} from './page/cardapio/cesto/detalhes/detalhes-item/detalhes-item.component';
import {DetalhesTotalComponent} from './page/cardapio/cesto/detalhes/detalhes-total/detalhes-total.component';
import {DetalhesFreteComponent} from './page/cardapio/cesto/detalhes/detalhes-frete/detalhes-frete.component';
import {OrdenPedidosComponent} from './page/cardapio/administracao/orden-pedidos/orden-pedidos.component';
import {FreteComponent} from './page/cardapio/administracao/frete/frete.component';
import {OrdenModelComponent} from './page/cardapio/administracao/orden-pedidos/orden-model/orden-model.component';
import { Menu3Component } from './page/cardapio/menu3/menu3.component';
import { OrdenStatusComponent } from './page/cardapio/administracao/orden-pedidos/orden-status/orden-status.component';
import { OrdenObsComponent } from './page/cardapio/administracao/orden-pedidos/orden-obs/orden-obs.component';
import { OrdenDeliteComponent } from './page/cardapio/administracao/orden-pedidos/orden-delite/orden-delite.component';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    CardapioComponent,
    CarrosselComponent,
    NavComponent,
    Menu1Component,
    Menu2Component,
    InforComponent,
    InformacaoComponent,
    SistemaComponent,
    CestoComponent,
    PedidoComponent,
    DetalhesComponent,
    AdministracaoComponent,
    CategoriaComponent,
    MenuComponent,
    PromocaoComponent,
    UsuarioComponent,
    AdicionalComponent,
    DashboardComponent,
    InputsComponent,
    RadioComponent,
    DetalhesItemComponent,
    DetalhesTotalComponent,
    DetalhesFreteComponent,
    OrdenPedidosComponent,
    FreteComponent,
    OrdenModelComponent,
    Menu3Component,
    OrdenStatusComponent,
    OrdenObsComponent,
    OrdenDeliteComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
