import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './shared/navbar/navbar';
import { Footer } from './shared/footer/footer';
import { Home } from './pages/home/home';
import { ColoresPrimarios } from './pages/colores-primarios/colores-primarios';
import { Psicologia } from './pages/psicologia/psicologia';
import { Combinaciones } from './pages/combinaciones/combinaciones';
import { Chatbot } from './pages/chatbot/chatbot';
import { Politica } from './pages/politica/politica';
import { Terminos } from './pages/terminos/terminos';
import { Error } from './pages/error/error';

@NgModule({
  declarations: [
    App,
    Navbar,
    Footer,
    Home,
    ColoresPrimarios,
    Psicologia,
    Combinaciones,
    Chatbot,
    Politica,
    Terminos,
    Error
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
