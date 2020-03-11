import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { CreateComponent } from './components/create/create.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ErrorComponent } from './components/error/error.component';
import { routing, appRoutingProviders } from './app.routing';
import { DetalleComponent } from './components/detalle/detalle.component';
import { EditarComponent } from './components/editar/editar.component';
import { SliderComponent } from './components/slider/slider.component';
import { ResaltadoDirective } from './resaltado.directive';



@NgModule({
  declarations: [
    AppComponent,
    SobremiComponent,
    ProyectosComponent,
    CreateComponent,
    ContactoComponent,
    ErrorComponent,
    DetalleComponent,
    EditarComponent,
    SliderComponent,
    ResaltadoDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule
  ],
  providers: [,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
