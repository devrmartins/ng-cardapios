import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input("titulo-grande") tituloGrande: String = "";

  @Output() onClicado = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onTitulo() {
    console.log("clicado")
    this.onClicado.emit("Angular");
  }

}
