import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit {
  @Input() imagem: string | undefined = "https://espetinhodesucesso.com.br/wp-content/uploads/2022/01/Como-identificar-a-carne-que-parece-picanha.jpg"
  @Input() titulo: string | undefined = "Picanha Gourmet ao Molho Italiano"
  @Input() endereco: string | undefined = "Rua fulano de tal"
  @Input() cidade: string | undefined = "João Pessoa - PB"
  @Input() telefone: string | undefined = "(83) 9 99999-9999"

  constructor() { }

  ngOnInit(): void {
  }

}
