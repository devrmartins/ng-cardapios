import { CardapioService } from './../../services/cardapio.service';
import { Component, Input, OnInit } from '@angular/core';
import { Cardapio } from '../../models/cardapio';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit {

  @Input() cardapio?: Cardapio;

  constructor(private cardapioService: CardapioService) { }

  ngOnInit(): void {
  }

  remover() {
    console.log("Remover", this.cardapio);
    if (this.cardapio != null) {
      this.cardapioService
      .removerCardapio(this.cardapio.id)
      .subscribe();
    }
  }

}
