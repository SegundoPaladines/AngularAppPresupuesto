import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { IngresosComponet } from './components/ingresos/ingresos.component';
import { EgresosComponent } from './components/egresos/egresos.component';
import { FormsModule } from '@angular/forms';
import { PresupuestoService } from './services/presupuesto.service';
import { PorcentajeComponent } from './components/porcentaje/porcentaje.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormularioComponent,
    IngresosComponet,
    EgresosComponent,
    PorcentajeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    PresupuestoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
