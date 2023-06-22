import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  PATH_BACKEND = environment.URL_BACKEND + environment.PORT_BACKEND;

  URL_GET = this.PATH_BACKEND + "/api/Usuarios"
  URL_GET_BY_ID = this.PATH_BACKEND + "/api/Usuarios/GetById"
  URL_ADD_USUARIO = this.PATH_BACKEND + "/api/Usuarios/AddUsuario"
  URL_UPDATE_USUARIO = this.PATH_BACKEND + "/api/Usuarios/UpdateUsuario"
  URL_DELETE_USUARIO = this.PATH_BACKEND + "/api/Usuarios/DeleteUsuario"

  constructor(private http: HttpClient) { }

  public GetUsuarios(): Observable<HttpResponse<any>> {

    return this.http
        .get<any>(this.URL_GET,
            { observe: 'response' })
        .pipe();
  }

  public AddUsuario(entidad): Observable<HttpResponse<any>> {
    return this.http
    .post<any>(this.URL_ADD_USUARIO, entidad,
    { observe: 'response' })
    .pipe();
  }

  public UpdateUsuario(entidad): Observable<HttpResponse<any>> {
    return this.http
    .post<any>(this.URL_UPDATE_USUARIO, entidad,
    { observe: 'response' })
    .pipe();
  }

  public DeleteUsuario(item): Observable<HttpResponse<any>> {
    let params = new HttpParams();
    params = params.set('id', item.id);
    return this.http
    .post<any>(this.URL_DELETE_USUARIO,  "", {params: params, observe: 'response' })
    .pipe();
  }


}
