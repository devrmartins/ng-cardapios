import { CardapioService } from './../../services/cardapio.service';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Cardapio } from '../../models/cardapio';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit {

  @Input() cardapio?: Cardapio;

  @Output('onRemove') removeEmitter: EventEmitter<Cardapio> = new EventEmitter();

  constructor(private cardapioService: CardapioService) { }

  ngOnInit(): void {
  }

  remover() {
    console.log("Remover", this.cardapio);
    if (this.cardapio != null) {
      this.cardapioService
      .removerCardapio(this.cardapio.id)
      .subscribe(() => {
        this.removeEmitter.emit(this.cardapio);
      }, error => {
        alert("Ops! não foi possível remover.");
      });
    }
  }

}
