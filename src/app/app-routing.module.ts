import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardapioComponent } from './page/cardapio/cardapio.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
  {
    path: "",
    component: PageComponent
  },
  {
    path: 'cardapio',
    component: CardapioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
