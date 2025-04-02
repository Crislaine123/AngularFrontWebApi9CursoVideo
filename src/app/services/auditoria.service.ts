import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auditoria } from '../models/auditoria';

@Injectable({
  providedIn: 'root'
})
export class AuditoriaService {

  ApiUrl = environment.UrlApi;

  constructor(private http: HttpClient) { }


  BuscarAuditorias() : Observable<Auditoria[]> {
    return this.http.get<Auditoria[]>(`${this.ApiUrl}/Auditoria/Auditoria`);
  }


}


