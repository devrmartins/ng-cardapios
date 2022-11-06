import { Injectable } from '@angular/core';
import { Cardapio } from '../models/cardapio';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  cardapios: Cardapio[] = [
    {
      imagem: "https://s2.glbimg.com/TYVOVw7XXf6DwUashZWbGR3eZoY=/512x320/smart/e.glbimg.com/og/ed/f/original/2021/09/02/predio-tombado-de-1940-em-sao-paulo-recebe-novo-restaurante-italiano_5.jpg",
      titulo: "Cardapio 01",
      descricao: "Lorem ipsum",
      telefone: "83 9 9999-9999",
      destaques: true,
    },
    {
      imagem: "https://s2.glbimg.com/TYVOVw7XXf6DwUashZWbGR3eZoY=/512x320/smart/e.glbimg.com/og/ed/f/original/2021/09/02/predio-tombado-de-1940-em-sao-paulo-recebe-novo-restaurante-italiano_5.jpg",
      titulo: "Cardapio 02",
      descricao: "Lorem ipsum",
      telefone: "83 9 9999-9999",
      destaques: false,
    },
    {
      imagem: "https://s2.glbimg.com/TYVOVw7XXf6DwUashZWbGR3eZoY=/512x320/smart/e.glbimg.com/og/ed/f/original/2021/09/02/predio-tombado-de-1940-em-sao-paulo-recebe-novo-restaurante-italiano_5.jpg",
      titulo: "Cardapio 03",
      descricao: "Lorem ipsum",
      telefone: "83 9 9999-9999",
      destaques: true
    },
    {
      imagem: "https://s2.glbimg.com/TYVOVw7XXf6DwUashZWbGR3eZoY=/512x320/smart/e.glbimg.com/og/ed/f/original/2021/09/02/predio-tombado-de-1940-em-sao-paulo-recebe-novo-restaurante-italiano_5.jpg",
      titulo: "Cardapio 04",
      descricao: "Lorem ipsum",
      telefone: "83 9 9999-9999",
      destaques: true
    },
  ];

  constructor() { }

  getCardapios() {
    return this.cardapios;
  }

  getCardapiosDestacados() {
    let lista = [...this.cardapios];
    return lista.filter(f => f.destaques);
  }

}
