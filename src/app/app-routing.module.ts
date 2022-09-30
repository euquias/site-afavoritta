import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardapioComponent } from './page/cardapio/cardapio.component';
import { Menu1Component } from './page/cardapio/menu1/menu1.component';
import { Menu2Component } from './page/cardapio/menu2/menu2.component';
import { NavComponent } from './page/nav/nav.component';


const routes: Routes = [
  {
    path: "",
    component: NavComponent
  },
  {
    path: 'cardapio',
    component: CardapioComponent,
    children:[
      {
        path:'', redirectTo:'menu1',pathMatch:'full'
      },
      {
        path:'menu1',
        component:Menu1Component
      },
      {
        path:'menu2',
        component:Menu2Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
