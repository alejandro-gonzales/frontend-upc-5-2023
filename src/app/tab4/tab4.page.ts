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
  public IdProducto = ""
  public IdCarritoCompra = ""
  public swGuardarCambios = false

  constructor(private hproductoService: HproductoService) 
  {
    this.GetHProducto();//Se carga el listado cada vez que se abra la pag.
  }

  public GetHProducto()
  {
    this.hproductoService.GetHProducto().subscribe
    ({
      next:(response: HttpResponse<any>)=>
      {
        this.listHProducto = response.body;
      },
      error: (error: any) => 
      {
        console.log(error);
      },
      complete: () => 
      {
        console.log('complete - this.GetHProducto()');
      },
    });
  }

  public addHProducto()
  {
    // if (this.nombreProducto.length > 0 && this.idCategoria.length > 0) 
    // {
    //   var entidad = 
    //   {
    //     nombre : this.nombreProducto,
    //     idCategoria : this.idCategoria
    //   }
    //   console.log(entidad)
    //   this.hproductoService.AddProducto(entidad).subscribe
    //   ({
    //       next: (response: HttpResponse<any>) => 
    //       {
    //         console.log(response.body)//1
    //         if(response.body == 1)
    //         {
    //           alert("Se agrego el Producto con exito :)");
    //           this.GetProductos();//Se actualize el listado
    //           this.nombreProducto = "";
    //           this.idCategoria = "";
    //         }
    //         else
    //         {
    //           alert("Al agregar el Producto fallo exito :(");
    //         }
    //       },
    //       error: (error: any) => 
    //       {
    //         console.log(error);
    //       },
    //       complete: () => 
    //       {
    //         console.log('complete - this.addProducto()');
    //       },
    //   });
    // }
  }
}
