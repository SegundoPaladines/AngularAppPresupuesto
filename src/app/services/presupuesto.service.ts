import { EventEmitter } from "@angular/core";
import { Item } from "../clases/item.model"

export class PresupuestoService{
  ingresos:Item []=[]

  egresos:Item []=[]

  ingreso:number = 0;
  egreso:number = 0;
  presupuesto:number = 0;

  pedirActualizacion = new EventEmitter<void>();

  actualizarCampos(){
    this.ingreso = 0;
    this.ingresos.forEach(item => {
      this.ingreso += item.valor;
    });

    this.egreso = 0;
    this.egresos.forEach(item =>{
      this.egreso += item.valor;
    });

    this.presupuesto = this.ingreso - this.egreso;

    this.pedirActualizacion.emit();
  }

  agregarIngreso(ingreso:Item){
    this.ingresos.push(ingreso);
    this.actualizarCampos();
  }

  agregarEgreso(egreso:Item){
    this.egresos.push(egreso);
    this.actualizarCampos();
  }

  quitarIngreso(index:number){
    this.ingresos.splice(index, 1);
    this.actualizarCampos();
  }

  quitarEgreso(index:number){
    this.egresos.splice(index, 1);
    this.actualizarCampos();
  }
}
