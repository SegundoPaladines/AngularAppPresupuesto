import { Component, OnInit } from "@angular/core";
import { PresupuestoService } from "src/app/services/presupuesto.service";

@Component(
  {
    selector:'encabezado',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
  }
)

export class HeaderComponent implements OnInit{
  ingreso:number;
  egreso:number;
  presupuesto:number;

  constructor(private presupuestoServiceProvider:PresupuestoService){
    this.presupuestoServiceProvider.pedirActualizacion.subscribe(()=>this.hacerActualizacion());
  }

  ngOnInit(): void {
    this.presupuestoServiceProvider.actualizarCampos();
  }

  hacerActualizacion(){
    this.ingreso = this.presupuestoServiceProvider.ingreso;
    this.egreso = this.presupuestoServiceProvider.egreso;
    this.presupuesto = this.presupuestoServiceProvider.presupuesto;
  }
}
