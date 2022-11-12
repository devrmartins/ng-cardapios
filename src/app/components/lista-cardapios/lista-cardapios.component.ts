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

}
