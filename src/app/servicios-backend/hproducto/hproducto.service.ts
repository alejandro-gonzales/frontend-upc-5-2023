import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< Updated upstream
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
=======
>>>>>>> Stashed changes
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HproductoService {

  PATH_BACKEND = environment.URL_BACKEND + environment.PORT_BACKEND;

<<<<<<< Updated upstream
  URL_GET_HPRODUCTO = this.PATH_BACKEND + "/api/HProducto"
  URL_GET_BY_ID = this.PATH_BACKEND + "/api/HProducto/GetHProductoById"
  URL_ADD_HPRODUCTO = this.PATH_BACKEND + "/api/HProducto/AddHProducto"
  URL_UPDATE_HPRODUCTO = this.PATH_BACKEND + "/api/HProducto/UpdateHProducto"
  URL_DELETE_HPRODUCTO = this.PATH_BACKEND + "/api/HProducto/DeleteHProducto"

  constructor(private http: HttpClient) { }

  public GetHProducto(): Observable<HttpResponse<any>> 
  {
    return this.http
      .get<any>(this.URL_GET_HPRODUCTO,
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

  public UpdateHProducto(entidad): Observable<HttpResponse<any>> {

    return this.http
      .post<any>(this.URL_UPDATE_HPRODUCTO, entidad,
        { observe: 'response' })
      .pipe();
  }

  public DeleteHProducto(item): Observable<HttpResponse<any>> {

    let params = new HttpParams();
    params = params.set('id', item.id);

    return this.http
      .post<any>(this.URL_DELETE_HPRODUCTO,  "", 
        {params: params, observe: 'response' })
      .pipe();
  }
=======
  URL_GET = this.PATH_BACKEND + "/api/HProducto"
  URL_GET_BY_ID = this.PATH_BACKEND + "/api/HProducto/GetById"
  URL_ADD_HPRODUCTO = this.PATH_BACKEND + "/api/HProducto/AddUsuario"

  constructor(private http: HttpClient) { }

  public GetHProducto(): Observable<HttpResponse<any>> {

    return this.http
        .get<any>(this.URL_GET,
            { observe: 'response' })
        .pipe();
  }

  public AddHProducto(entidad): Observable<HttpResponse<any>> {

    return this.http
        .post<any>(this.URL_ADD_HPRODUCTO, entidad,
            { observe: 'response' })
        .pipe();
}
>>>>>>> Stashed changes

}
