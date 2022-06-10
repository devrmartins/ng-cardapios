import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cardapio } from 'src/app/models/cardapio';
import { Item } from 'src/app/models/item';
import { CardapioService } from 'src/app/services/cardapio.service';

@Component({
  selector: 'app-cardapios',
  templateUrl: './cardapios.component.html',
  styleUrls: ['./cardapios.component.scss']
})
export class CardapiosComponent implements OnInit {
  cardapioId: string = '';
  cardapio?: Cardapio;
  itens?: Item[];

  constructor(
    private route: ActivatedRoute,
    private cardapioService: CardapioService) { }

  ngOnInit() {
    this.cardapioId = this.route.snapshot.params['id'];
    this.cardapioService.listarItens(this.cardapioId).subscribe(response => {
      this.cardapio = {
        id: response.id,
        titulo: response.titulo
      }
      const itens = response.itens.map((item, index) => {
        if (index === 0) {
          item.promocao = true;
        }
        item.descricao = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dolor neque, ultrices ac odio vel, finibus pellentesque libero. Etiam aliquam dolor a diam porttitor tempus. Nunc sit amet urna eros. Cras eleifend semper orci, eget semper nisi vestibulum at. Integer consequat dui eu sollicitudin ultricies. Ut lacus quam, iaculis in urna vel, facilisis ultricies quam. Curabitur at orci laoreet, fermentum tortor in, blandit urna. Integer fringilla eu mauris vel aliquam.'
        return item
      })
      this.itens = itens;
    })
  }

}
