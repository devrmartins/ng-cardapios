import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cardapio } from '../models/cardapio';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CardapiosDTO } from '../models/cardapiosDTO';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  public cardapios$: BehaviorSubject<Cardapio[]> = new BehaviorSubject<Cardapio[]>([]);

  constructor(private http: HttpClient) { }

  getCardapios(): Observable<CardapiosDTO> {
    return this.http.get<CardapiosDTO>(environment.apiUrl + "/cardapios");
  }

  removerCardapio(id: number) {
    return this.http.delete(`${environment.apiUrl}/cardapios/${id}`);
  }

  getCardapiosDestacados() {
    let lista = [...this.cardapios$.value];
    return lista.filter(f => f.destaques);
  }

}
