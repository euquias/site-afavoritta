import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { CardapioComponent } from './page/cardapio/cardapio.component';
import { CarrosselComponent } from './page/carrossel/carrossel.component';
import { NavComponent } from './page/nav/nav.component';
import { Menu1Component } from './page/cardapio/menu1/menu1.component';
import { Menu2Component } from './page/cardapio/menu2/menu2.component';


@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    CardapioComponent,
    CarrosselComponent,
    NavComponent,
    Menu1Component,
    Menu2Component
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
