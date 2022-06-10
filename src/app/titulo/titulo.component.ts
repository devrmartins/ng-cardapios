import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent implements OnInit {
  @Input() titulo: string = "";
  @Input() tamanho: string = "medio";

  public tamanhoDefinido: string = "medio";
  private tamanhos = ['pequeno', 'medio', 'grande'];

  constructor() { }

  ngOnInit(): void {
    this.tamanhoDefinido = this.tamanhos.includes(this.tamanho) ? this.tamanho : 'medio';
  }

}
