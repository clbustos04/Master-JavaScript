//Importar mosdulos del router de anfular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import { ZapatillasComponent } from './zapatillas/zapatillas/zapatillas.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';
import { CursosComponent } from './cursos/cursos.component';  
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';

//Array de configuracion de rutas
const appRoutes: Routes = [
    {path:'' , component: HomeComponent},
    {path:'home' , component: HomeComponent},
    {path:'zapatillas' , component: ZapatillasComponent},
    {path:'videojuegos' , component: VideojuegosComponent},
    {path:'cursos' , component: CursosComponent},
    {path:'cursos/:nombre' , component: CursosComponent},
    {path:'cursos/:nombre/:followers' , component: CursosComponent},
    {path:'externo' , component: ExternoComponent},
    {path: '**', component: HomeComponent}
];

//Exportar modulo del routing
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);