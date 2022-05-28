import { Cardapio } from './../../models/cardapio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cardapios: Cardapio[] = [
    {
      imagem: 'https://espetinhodesucesso.com.br/wp-content/uploads/2022/01/Como-identificar-a-carne-que-parece-picanha.jpg',
      titulo: 'Cardapio 01',
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

  cardapiosNovidades: Cardapio[] = [
    {
      imagem: 'https://espetinhodesucesso.com.br/wp-content/uploads/2022/01/Como-identificar-a-carne-que-parece-picanha.jpg',
      titulo: 'Novidade Cardapio 01',
      endereco: 'Endereco 01',
      cidade: 'João Pessoa',
      telefone: '83 999999999',
    },
    {
      imagem:
        'https://espetinhodesucesso.com.br/wp-content/uploads/2022/01/Como-identificar-a-carne-que-parece-picanha.jpg',
      titulo: 'Novidade Cardapio 02',
      endereco: 'Endereco 02',
      cidade: 'João Pessoa',
      telefone: '83 999999999',
    },
    {
      imagem:
        'https://espetinhodesucesso.com.br/wp-content/uploads/2022/01/Como-identificar-a-carne-que-parece-picanha.jpg',
      titulo: 'Novidade Cardapio 03',
      endereco: 'Endereco 03',
      cidade: 'João Pessoa',
      telefone: '83 999999999',
    },
    {
      imagem:
        'https://espetinhodesucesso.com.br/wp-content/uploads/2022/01/Como-identificar-a-carne-que-parece-picanha.jpg',
      titulo: 'Novidade Cardapio 04',
      endereco: 'Endereco 04',
      cidade: 'João Pessoa',
      telefone: '83 999999999',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
