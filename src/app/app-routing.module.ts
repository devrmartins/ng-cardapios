import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { CadastroComponent } from "./pages/cadastro/cadastro.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "cardapio/novo", component: CadastroComponent },
  { path: "cardapio/:id", component: CardapioComponent },
  { path  : "**", redirectTo: "", pathMatch: "full" }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
