import { Cardapio } from './../models/cardapio';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  cardapios: Cardapio[] = [
    {
      imagem: 'https://espetinhodesucesso.com.br/wp-content/uploads/2022/01/Como-identificar-a-carne-que-parece-picanha.jpg',
      titulo: 'Cardapio 011111',
      endereco: 'Endereco 01',
      cidade: 'João Pessoa',
      telefone: '83 999999999',
    },
    {
      imagem:
        'https://espetinhodesucesso.com.br/wp-content/uploads/2022/01/Como-identificar-a-carne-que-parece-picanha.jpg',
      titulo: 'Cardapio 02',
      endereco: 'Endereco 02',
      cidade: 'João Pessoa',
      telefone: '83 999999999',
    },
    {
      imagem:
        'https://espetinhodesucesso.com.br/wp-content/uploads/2022/01/Como-identificar-a-carne-que-parece-picanha.jpg',
      titulo: 'Cardapio 03',
      endereco: 'Endereco 03',
      cidade: 'João Pessoa',
      telefone: '83 999999999',
    },
    {
      imagem:
        'https://espetinhodesucesso.com.br/wp-content/uploads/2022/01/Como-identificar-a-carne-que-parece-picanha.jpg',
      titulo: 'Cardapio 04',
      endereco: 'Endereco 04',
      cidade: 'João Pessoa',
      telefone: '83 999999999',
    },
  ];

  constructor() { }

  listar(): Cardapio[] {
    return this.cardapios;
  }

}
