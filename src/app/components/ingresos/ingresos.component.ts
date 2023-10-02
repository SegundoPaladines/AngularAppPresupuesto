import { PresupuestoService } from './../../services/presupuesto.service';
import { Component, OnInit } from "@angular/core";
import { Item } from 'src/app/clases/item.model';

@Component({
  selector:'ingresos',
  templateUrl:'./ingresos.component.html',
  styleUrls:['./ingresos.component.css']
})

export class IngresosComponet implements OnInit{
  ingresos:Item [] = [];
  constructor(private presupuestoServiceProvider:PresupuestoService){}
  ngOnInit(): void {
    this.ingresos = this.presupuestoServiceProvider.ingresos;
  }

  quitarIngreso(index:number){
    this.presupuestoServiceProvider.quitarIngreso(index);
  }
}
