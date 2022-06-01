import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListarCardapiosDTO } from './../models/listar-cardapios.dto';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  constructor(private http: HttpClient) { }

  listar(): Observable<ListarCardapiosDTO> {
    return this.http.get<ListarCardapiosDTO>(`${environment.apiUrl}/${environment.listarCardapios}`);
  }

}
