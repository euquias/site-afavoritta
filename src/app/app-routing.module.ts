import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionalComponent } from './page/cardapio/administracao/adicional/adicional.component';
import { AdministracaoComponent } from './page/cardapio/administracao/administracao.component';
import { CategoriaComponent } from './page/cardapio/administracao/categoria/categoria.component';
import { DashboardComponent } from './page/cardapio/administracao/dashboard/dashboard.component';
import { FreteComponent } from './page/cardapio/administracao/frete/frete.component';
import { MenuComponent } from './page/cardapio/administracao/menu/menu.component';
import { OrdenDeliteComponent } from './page/cardapio/administracao/orden-pedidos/orden-delite/orden-delite.component';
import { OrdenModelComponent } from './page/cardapio/administracao/orden-pedidos/orden-model/orden-model.component';
import { OrdenObsComponent } from './page/cardapio/administracao/orden-pedidos/orden-obs/orden-obs.component';
import { OrdenPedidosComponent } from './page/cardapio/administracao/orden-pedidos/orden-pedidos.component';
import { OrdenStatusComponent } from './page/cardapio/administracao/orden-pedidos/orden-status/orden-status.component';
import { PromocaoComponent } from './page/cardapio/administracao/promocao/promocao.component';
import { UsuarioComponent } from './page/cardapio/administracao/usuario/usuario.component';
import { CardapioComponent } from './page/cardapio/cardapio.component';
import { CestoComponent } from './page/cardapio/cesto/cesto.component';
import { DetalhesStatusComponent } from './page/cardapio/cesto/detalhes/detalhes-status/detalhes-status.component';
import { DetalhesComponent } from './page/cardapio/cesto/detalhes/detalhes.component';
import { PedidoComponent } from './page/cardapio/cesto/pedido/pedido.component';
import { Menu1Component } from './page/cardapio/menu1/menu1.component';
import { Menu2Component } from './page/cardapio/menu2/menu2.component';
import { NavComponent } from './page/nav/nav.component';
import { SistemaComponent } from './sistema/sistema.component';
import { MenuUpdateComponent } from './page/cardapio/administracao/menu/menu-update/menu-update.component';
import { AuthGuard } from './sistema/auth.guard';
import { MenuRemoverComponent } from './page/cardapio/administracao/menu/menu-remover/menu-remover.component';
import { CategoriaUpdateComponent } from './page/cardapio/administracao/categoria/categoria-update/categoria-update.component';
import { CategoriaRemoverComponent } from './page/cardapio/administracao/categoria/categoria-remover/categoria-remover.component';
import { UsuarioUpdateComponent } from './page/cardapio/administracao/usuario/usuario-update/usuario-update.component';
import { UsuarioRemoverComponent } from './page/cardapio/administracao/usuario/usuario-remover/usuario-remover.component';
import { Kvs1Component } from './page/cardapio/administracao/kvs1/kvs1.component';


const routes: Routes = [
  {
    path: "",
    component: NavComponent
  },
  {
    path: 'cardapio',
    component: CardapioComponent

  },
  {
    path: 'menu1',
    component: Menu1Component
  },
  {
    path: 'menu2',
    component: Menu2Component
  },
  {
    path: 'pedido',
    component: PedidoComponent
    
  },
  {
    path: 'detalhes',
    component: DetalhesComponent
    
  },
  {
    path: 'sistema',
    component: SistemaComponent
  },
  {
    path: 'adm',
    component: AdministracaoComponent,
    canActivate: [AuthGuard],  
    children: [
      {
        path: '', redirectTo: 'categoria', pathMatch: 'full'
      },
      {
        path: 'categoria',
        component: CategoriaComponent  ,
        canActivate: [AuthGuard]  
      }, 
      {
        path: 'menu',
        component: MenuComponent  ,
        canActivate: [AuthGuard]  
      },
      {
        path: 'promocao',
        component: PromocaoComponent ,
        canActivate: [AuthGuard] 
      },
      {
        path: 'usuario',
        component: UsuarioComponent ,
        canActivate: [AuthGuard]  
      },
      {
        path: 'adicional',
        component: AdicionalComponent ,
        canActivate: [AuthGuard] 
      },
      {
        path: 'dashboard',
        component: DashboardComponent ,
        canActivate: [AuthGuard] 
      },
      {
        path: 'ordem',
        component: OrdenPedidosComponent,
        canActivate: [AuthGuard] 
      },
      {
        path:'kvs1',
        component:Kvs1Component,
        canActivate: [AuthGuard] 
      },
      {
        path: 'frete',
        component: FreteComponent,
        canActivate: [AuthGuard] 
      },

    ]
  },
  {
    path: 'ordemodel/:id',
    component: OrdenModelComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'obs/:id',
    component: OrdenObsComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'status/:id',
    component: OrdenStatusComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'deletar/:id',
    component: OrdenDeliteComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'update/:id',
    component: MenuUpdateComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'remover/:id',
    component: MenuRemoverComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'updates/:id',
    component:CategoriaUpdateComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'deletes/:id',
    component:CategoriaRemoverComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'updatess/:id',
    component:UsuarioUpdateComponent,
    canActivate: [AuthGuard] 
  },
  {
    path: 'deletess/:id',
    component:UsuarioRemoverComponent,
    canActivate: [AuthGuard] 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
