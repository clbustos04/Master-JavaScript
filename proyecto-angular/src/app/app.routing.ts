//Importar mosdulos del router de anfular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Importar componentes
import { SobremiComponent } from './components/sobremi/sobremi.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { CreateComponent } from './components/create/create.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ErrorComponent } from './components/error/error.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { EditarComponent } from './components/editar/editar.component';



//Array de configuracion de rutas
const appRoutes: Routes = [
    {path:'' , component: SobremiComponent},
    {path:'sobre-mi' , component: SobremiComponent},
    {path:'proyectos' , component: ProyectosComponent},
    {path:'crear-proyecto' , component: CreateComponent},
    {path:'contacto' , component: ContactoComponent},
    {path:'detalle/:id' , component: DetalleComponent},
    {path:'editar-proyecto/:id' , component: EditarComponent},
    {path: '**', component: ErrorComponent}
];

//Exportar modulo del routing
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);