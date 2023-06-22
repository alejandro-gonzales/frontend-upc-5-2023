import { Component} from '@angular/core';
import { HproductoService } from '../servicios-backend/hproducto/hproducto.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page{

  public listHProducto = [];
  public idHProducto = ""
  public cantidad = ""
  public idProducto = ""
  public idCarritoCompra = ""
  public swGuardarCambios = false

  constructor(private hproductoService: HproductoService) {
    this.GetHProducto();//Se carga el listado cada vez que se abra la pag.
  }

  public GetHProducto(){
    this.hproductoService.GetHProducto().subscribe
    ({
      next:(response: HttpResponse<any>)=>{
        this.listHProducto = response.body;
      },
      error: (error: any) => {
        console.log(error);
      },
      complete: () => {
        console.log('complete - this.GetHProducto()');
      },
    });
  }

  public addHProducto(){
    if (this.cantidad.length > 0 && this.idProducto.length > 0 && this.idCarritoCompra.length > 0) {
      var entidad = {
        cantidad : this.cantidad,
        IdProducto : this.idProducto,
        IdCarritoCompra : this.idCarritoCompra
      }
      console.log(entidad)
      this.hproductoService.AddHProducto(entidad).subscribe({
          next: (response: HttpResponse<any>) => {
            console.log(response.body)//1
            if(response.body == 1){
              alert("Se agrego el Detalle del Producto con exito :)");
              this.GetHProducto();//Se actualize el listado
              this.cantidad = "";
              this.idProducto = "";
              this.idCarritoCompra = "";
            }
            else{
              alert("Al agregar el Detalle del Producto fallo :(");
            }
          },
          error: (error: any) => {
            console.log(error);
          },
          complete: () => {
            console.log('complete - this.addHProducto()');
          },
      });
    }
  }

  public guardarCambios(){
    this.swGuardarCambios = false;
    if (this.cantidad.length > 0 && this.idProducto.length > 0 && this.idCarritoCompra.length > 0){
      var entidad = {
        id: this.idHProducto,
        cantidad : this.cantidad,
        idProducto : this.idProducto,
        idCarritoCompra : this.idCarritoCompra
      }
      console.log(entidad)
      this.hproductoService.UpdateHProducto(entidad).subscribe({
        next: (response: HttpResponse<any>) => {
          console.log(response.body)//1
          if(response.body == 1){
            alert("Se modifico el Detalle del Producto con exito :)");
            this.GetHProducto();//Se actualize el listado
            this.idHProducto = "";
            this.cantidad = "";
            this.idProducto = "";
            this.idCarritoCompra = "";
          }
          else{
            alert("Al modificar el Detalle del Producto fallo exito :(");
          }
        },
        error: (error: any) => {
          console.log(error);
        },
        complete: () => {
          console.log('complete - this.guardarCambios()');
        },
      });
    }
  }

  public updateHProducto(item){
    console.log(item)
    this.idHProducto = item.id + ""//oculto
    this.cantidad = item.cantidad + ""//input
    this.idProducto = item.idProducto + "" //input
    this.idCarritoCompra = item.idCarritoCompra + "" //input
    this.swGuardarCambios = true;
  }

  public deleteHProducto(item)
  {
    console.log(item.id)
    this.hproductoService.DeleteHProducto(item).subscribe
    ({
      next: (response: HttpResponse<any>) => 
      {
        console.log(response.body)//1
        if(response.body == 1)
        {
          alert("Se elimino el Producto con exito :)");
          this.GetHProducto();//Se actualize el listado
        }
        else
        {
          alert("Al eliminar el Detalle del Producto fallo exito :(");
        }
      },
      error: (error: any) => 
      {
        console.log(error);
      },
      complete: () => 
      {
        console.log('complete - this.deleteHProducto()');
      },
    });
  }
}
