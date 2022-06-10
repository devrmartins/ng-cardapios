import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { ListaCardapiosComponent } from './lista-cardapios/lista-cardapios.component';
import { HomeComponent } from './pages/home/home.component';
import { CardapiosComponent } from './pages/cardapios/cardapios.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TituloComponent } from './titulo/titulo.component';
import { ItemComponent } from './item/item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardapioComponent,
    ListaCardapiosComponent,
    HomeComponent,
    CardapiosComponent,
    NotFoundComponent,
    TituloComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
