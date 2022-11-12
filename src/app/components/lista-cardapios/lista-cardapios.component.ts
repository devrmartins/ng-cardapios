import { Cardapio } from './../../models/cardapio';
import { CardapioService } from './../../services/cardapio.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-cardapios',
  templateUrl: './lista-cardapios.component.html',
  styleUrls: ['./lista-cardapios.component.scss']
})
export class ListaCardapiosComponent implements OnInit {
  cardapios: Cardapio[] = []
  filtrado: boolean = false;
  constructor(private cardapioService: CardapioService) {
  }

  ngOnInit(): void {
    this.cardapioService
    .getCardapios()
    .subscribe(resposta => {
      this.cardapios = resposta.cardapios;
    });
  }

  filtrar() {
    this.filtrado = !this.filtrado;
    if (this.filtrado) {
      this.cardapios = this.cardapioService.getCardapiosDestacados();
    } else {
      //this.cardapios = this.cardapioService.getCardapios();
    }
  }

  handleRemover(cardapio: Cardapio) {
    console.log("Handle Remover", cardapio);
    const novosCardapios = [...this.cardapios];
    const indexCardapio = novosCardapios.findIndex(c => c.id === cardapio.id);
    if (indexCardapio) {
      novosCardapios.splice(indexCardapio, 1);
      this.cardapios = novosCardapios;
    }
  }

}
