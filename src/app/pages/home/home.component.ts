import { CardapioService } from './../../services/cardapio.service';
import { Cardapio } from './../../models/cardapio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cardapios: Cardapio[] = [];
  cardapiosNovidades: Cardapio[] = [];

  constructor(private cardapioService: CardapioService) { }

  ngOnInit(): void {
    this.cardapioService.listar().subscribe(response => {
      this.cardapios = response.cardapios.filter(c => c.destaque);
      this.cardapiosNovidades = response.cardapios.filter(c => c.novidade);
    })
  }

}
