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
      this.itens = response.itens;
    })
  }

}
