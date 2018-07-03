import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuscaComponent } from './busca/busca.component';
import { HeaderComponent } from './header/header.component';
import { HttpModule } from '@angular/http';
import { UsuarioComponent } from './usuario/usuario.component'; 
import { FormsModule } from '@angular/forms';
//import { BuscaPipe } from './busca/busca.pipe';
import { routing } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    BuscaComponent,
    HeaderComponent,
    UsuarioComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
