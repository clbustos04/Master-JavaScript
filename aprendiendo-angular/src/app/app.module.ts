import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { VideojuegosComponent } from './videojuegos/videojuegos.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    VideojuegosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
