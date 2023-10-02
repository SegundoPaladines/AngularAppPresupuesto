import { Component, OnInit } from "@angular/core";
import { PresupuestoService } from '../../services/presupuesto.service';
import { Item } from "src/app/clases/item.model";

@Component({
  selector:'egresos',
  templateUrl:'./egresos.component.html',
  styleUrls:['./egresos.component.css']
})

export class EgresosComponent implements OnInit{
  egresos:Item [] = [];
  constructor(private presupuestoServiceProvider:PresupuestoService){}
  ngOnInit(): void {
    this.egresos = this.presupuestoServiceProvider.egresos;
  }

  quitarEgreso(index:number){
    this.presupuestoServiceProvider.quitarEgreso(index);
  }
}
