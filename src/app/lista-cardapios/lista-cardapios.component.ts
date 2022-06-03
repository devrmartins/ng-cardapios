import { Component, Input, OnInit } from '@angular/core';
import { Cardapio } from '../models/cardapio';

@Component({
  selector: 'app-lista-cardapios',
  templateUrl: './lista-cardapios.component.html',
  styleUrls: ['./lista-cardapios.component.scss'],
})
export class ListaCardapiosComponent implements OnInit {
  @Input() cardapios: Cardapio[] = [];
  @Input() titulo: string = '';

  constructor() {}

  ngOnInit(): void {}

  abrirCardapio(cardapio: Cardapio) {
    console.log(cardapio);
  }
}
