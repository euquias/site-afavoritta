import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionalComponent } from './page/cardapio/administracao/adicional/adicional.component';
import { AdministracaoComponent } from './page/cardapio/administracao/administracao.component';
import { CategoriaComponent } from './page/cardapio/administracao/categoria/categoria.component';
import { DashboardComponent } from './page/cardapio/administracao/dashboard/dashboard.component';
import { MenuComponent } from './page/cardapio/administracao/menu/menu.component';
import { PromocaoComponent } from './page/cardapio/administracao/promocao/promocao.component';
import { UsuarioComponent } from './page/cardapio/administracao/usuario/usuario.component';
import { CardapioComponent } from './page/cardapio/cardapio.component';
import { CestoComponent } from './page/cardapio/cesto/cesto.component';
import { DetalhesComponent } from './page/cardapio/cesto/detalhes/detalhes.component';
import { PedidoComponent } from './page/cardapio/cesto/pedido/pedido.component';
import { Menu1Component } from './page/cardapio/menu1/menu1.component';
import { Menu2Component } from './page/cardapio/menu2/menu2.component';
import { NavComponent } from './page/nav/nav.component';
import { SistemaComponent } from './sistema/sistema.component';


const routes: Routes = [
  {
    path: "",
    component: NavComponent
  },
  {
    path: 'cardapio',
    component: CardapioComponent,
    children: [
      {
        path: '', redirectTo: 'menu1', pathMatch: 'full'
      },
      {
        path: 'menu1',
        component: Menu1Component
      },
      {
        path: 'menu2',
        component: Menu2Component
      }
    ]
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
    path:'adm',
    component:AdministracaoComponent,
    children: [
      {
        path: '', redirectTo: 'categoria', pathMatch: 'full'
      },
      {
        path:'categoria',
        component:CategoriaComponent
      },
      {
        path:'menu',
        component:MenuComponent
      },
      {
        path:'promocao',
        component:PromocaoComponent
      },
      {
        path:'usuario',
        component:UsuarioComponent 
      },
      {
        path:'adicional',
        component:AdicionalComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
