import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { ListaCardapiosComponent } from './components/lista-cardapios/lista-cardapios.component';
import { CardapioComponent } from './components/cardapio/cardapio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaCardapiosComponent,
    CardapioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
