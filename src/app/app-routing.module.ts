import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CardapiosComponent } from './pages/cardapios/cardapios.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cardapio/:id', component: CardapiosComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
