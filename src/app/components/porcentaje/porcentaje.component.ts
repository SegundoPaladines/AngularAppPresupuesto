import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { PresupuestoService } from '../../services/presupuesto.service';

@Component({
  selector:'porcentaje',
  templateUrl:'./porcentaje.component.html',
  styleUrls:['./porcentaje.component.css']
})

export class PorcentajeComponent implements OnInit{

  @Input () valor:number;
  ingreso:number;
  porcentaje:number;
  @Output() porcentajeCalculado = new EventEmitter<number>();

  constructor(private presupuestoServiceProvider:PresupuestoService){
    this.presupuestoServiceProvider.pedirActualizacion.subscribe(()=> this.hacerActualizacion());
  }

  ngOnInit(): void {
    this.presupuestoServiceProvider.actualizarCampos();
    this.hacerActualizacion();
  }

  /* si cambia el valor de valor, ojo, con los imputs mejor tenerlo*/
  ngOnChanges(changes: SimpleChanges): void {
    if ('valor' in changes) {
      this.hacerActualizacion();
    }
  }

  hacerActualizacion(){
    this.ingreso = this.presupuestoServiceProvider.ingreso;
    this.porcentaje = (this.ingreso>0)? (this.valor/this.ingreso) : 1;
    this.porcentajeCalculado.emit(this.porcentaje);
  }
}
