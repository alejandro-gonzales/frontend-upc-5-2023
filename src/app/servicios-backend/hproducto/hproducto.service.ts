import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HproductoService {

  PATH_BACKEND = environment.URL_BACKEND + environment.PORT_BACKEND;

  URL_GET = this.PATH_BACKEND + "/api/HProducto"
  URL_GET_BY_ID = this.PATH_BACKEND + "/api/HProducto/GetById"
  URL_ADD_HPRODUCTO = this.PATH_BACKEND + "/api/HProducto/AddUsuario"

  constructor(private http: HttpClient) { }

  public GetHProducto(): Observable<HttpResponse<any>> 
  {
    return this.http
      .get<any>(this.URL_GET,
        { observe: 'response' })
      .pipe();
  }

  public AddHProducto(entidad): Observable<HttpResponse<any>> 
  {
    return this.http
      .post<any>(this.URL_ADD_HPRODUCTO, entidad,
        { observe: 'response' })
      .pipe();
  }

}
