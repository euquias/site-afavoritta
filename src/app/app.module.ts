import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { CardapioComponent } from './page/cardapio/cardapio.component';
import { CarrosselComponent } from './page/carrossel/carrossel.component';
import { NavComponent } from './page/nav/nav.component';
import { Menu1Component } from './page/cardapio/menu1/menu1.component';
import { Menu2Component } from './page/cardapio/menu2/menu2.component';
import { InforComponent } from './page/cardapio/infor/infor.component';
import { InformacaoComponent } from './page/informacao/informacao.component';
import { SistemaComponent } from './sistema/sistema.component';
import { CestoComponent } from './page/cardapio/cesto/cesto.component';
import { PedidoComponent } from './page/cardapio/cesto/pedido/pedido.component';
import { DetalhesComponent } from './page/cardapio/cesto/detalhes/detalhes.component';
import { AdministracaoComponent } from './page/cardapio/administracao/administracao.component';
import { CategoriaComponent } from './page/cardapio/administracao/categoria/categoria.component';
import { MenuComponent } from './page/cardapio/administracao/menu/menu.component';
import { PromocaoComponent } from './page/cardapio/administracao/promocao/promocao.component';
import { UsuarioComponent } from './page/cardapio/administracao/usuario/usuario.component';
import { AdicionalComponent } from './page/cardapio/administracao/adicional/adicional.component';
import { DashboardComponent } from './page/cardapio/administracao/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { InputsComponent } from './page/cardapio/cesto/detalhes/inputs/inputs.component';
import { RadioComponent } from './page/cardapio/cesto/detalhes/radio/radio.component';
import { DetalhesItemComponent } from './page/cardapio/cesto/detalhes/detalhes-item/detalhes-item.component';
import { DetalhesTotalComponent } from './page/cardapio/cesto/detalhes/detalhes-total/detalhes-total.component';
import { DetalhesFreteComponent } from './page/cardapio/cesto/detalhes/detalhes-frete/detalhes-frete.component';
import { OrdenPedidosComponent } from './page/cardapio/administracao/orden-pedidos/orden-pedidos.component';
import { FreteComponent } from './page/cardapio/administracao/frete/frete.component';
import { OrdenModelComponent } from './page/cardapio/administracao/orden-pedidos/orden-model/orden-model.component';
import { Menu3Component } from './page/cardapio/menu3/menu3.component';
import { OrdenStatusComponent } from './page/cardapio/administracao/orden-pedidos/orden-status/orden-status.component';
import { OrdenObsComponent } from './page/cardapio/administracao/orden-pedidos/orden-obs/orden-obs.component';
import { OrdenDeliteComponent } from './page/cardapio/administracao/orden-pedidos/orden-delite/orden-delite.component';
import { DetalhesStatusComponent } from './page/cardapio/cesto/detalhes/detalhes-status/detalhes-status.component';
import { Menu4Component } from './page/cardapio/menu4/menu4.component';
import { PagamentoComponent } from './page/cardapio/administracao/dashboard/pagamento/pagamento.component';
import { MenuUpdateComponent } from './page/cardapio/administracao/menu/menu-update/menu-update.component';
import { MenuRemoverComponent } from './page/cardapio/administracao/menu/menu-remover/menu-remover.component';
import { MenuExibirComponent } from './page/cardapio/administracao/menu/menu-exibir/menu-exibir.component';
import { SistemaLoginComponent } from './sistema/sistema-login/sistema-login.component';
import { HttpInterceptorProviders } from ".././app/sistema/http-interceptors";

import { AuthsGuard } from '../app/sistema/auths.guard';
import { CategoriaExibirComponent } from './page/cardapio/administracao/categoria/categoria-exibir/categoria-exibir.component';
import { CategoriaRemoverComponent } from './page/cardapio/administracao/categoria/categoria-remover/categoria-remover.component';
import { CategoriaUpdateComponent } from './page/cardapio/administracao/categoria/categoria-update/categoria-update.component';
import { UsuarioUpdateComponent } from './page/cardapio/administracao/usuario/usuario-update/usuario-update.component';
import { UsuarioRemoverComponent } from './page/cardapio/administracao/usuario/usuario-remover/usuario-remover.component';
import { UsuarioExibirComponent } from './page/cardapio/administracao/usuario/usuario-exibir/usuario-exibir.component';
import { UsersDetailComponent } from './sistema/sistema-login/users-detail/users-detail.component';
import { FooterComponent } from './page/footer/footer.component';
import { Kvs1Component } from './page/cardapio/administracao/kvs1/kvs1.component';
import { SnackbarComponent } from './snackbar/snackbar.component'
import {SnackbarService} from '../app/snackbar/snackbar.service'

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
    DetalhesStatusComponent,
    Menu4Component,
    PagamentoComponent,
    MenuUpdateComponent,
    MenuRemoverComponent,
    MenuExibirComponent,
    SistemaLoginComponent,
    CategoriaExibirComponent,
    CategoriaRemoverComponent,
    CategoriaUpdateComponent,
    UsuarioUpdateComponent,
    UsuarioRemoverComponent,
    UsuarioExibirComponent,
    UsersDetailComponent,
    FooterComponent,
    Kvs1Component,
    SnackbarComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule


  ],
  providers: [
    HttpInterceptorProviders,
    SnackbarService

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
