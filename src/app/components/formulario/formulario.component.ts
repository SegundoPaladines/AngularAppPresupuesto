import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from 'src/app/clases/item.model';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector:'formulario',
  templateUrl:'./formulario.component.html',
  styleUrls:['./formulario.component.css']
})

export class FormularioComponent{

  nombre:string;
  valor:number;
  opcion:string = 'ingreso';

  constructor(private presupuestoServiceProvider: PresupuestoService){}

  agregarItem(){
    if(this.nombre != undefined && this.nombre != null && this.valor != undefined && this.valor != null){
      let reg = /^[A-Za-z0-9\s\t]+$/
      if(this.valor > 0 && reg.test(this.nombre)){
        let item = new Item(this.nombre, this.valor);
        if(this.opcion=='ingreso'){
          this.presupuestoServiceProvider.agregarIngreso(item);
        }else if(this.opcion=='egreso'){
          this.presupuestoServiceProvider.agregarEgreso(item);
        }
      }else{
        alert("Valores no Validos");
      }
    }
    else{
      alert("No pueden haber campos vacios");
    }
  }
}
