import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit {
  @Input() imagem = "https://espetinhodesucesso.com.br/wp-content/uploads/2022/01/Como-identificar-a-carne-que-parece-picanha.jpg"
  @Input() titulo = "Picanha Gourmet ao Molho Italiano"
  @Input() endereco = "Rua fulano de tal"
  @Input() cidade = "João Pessoa - PB"
  @Input() telefone = "(83) 9 99999-9999"

  constructor() { }

  ngOnInit(): void {
  }

}
