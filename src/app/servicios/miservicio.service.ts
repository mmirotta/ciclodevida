import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MiservicioService {
  private url = environment.urlpaises;
  public usuario;
  constructor(private http: HttpClient) { }

  public obtenerPaises() {
    return this.http.get(this.url);
  }

  public obtenerUsuariosMocki() {
    return this.http.get('https://api.mocki.io/v1/570c5e5c');
  }
}
