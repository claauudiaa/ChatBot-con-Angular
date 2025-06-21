// ARCHIVO DE RUTAS, AQUÍ SE IMPORTAN Y SE ESTABLECEN LAS RUTAS DE TODOS LOS COMPONENTES

// Importar componentes para poder usarlos
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ColoresPrimarios } from './pages/colores-primarios/colores-primarios';
import { Psicologia } from './pages/psicologia/psicologia';
import { Combinaciones } from './pages/combinaciones/combinaciones';
import { Chatbot } from './pages/chatbot/chatbot';
import { Politica } from './pages/politica/politica';
import { Terminos } from './pages/terminos/terminos';
import { Error } from './pages/error/error';


// Importar rutas para referenciar enlaces
const routes: Routes = [
  { path: '', component: Home }, // página inicial, la que se ve con solo la barra (/)
  { path: 'colores-primarios', component: ColoresPrimarios }, // página de colores primarios
  { path: 'psicologia', component: Psicologia }, // página de psicologia del color
  { path: 'combinaciones', component: Combinaciones }, // página de combinaciones
  { path: 'chatbot', component: Chatbot }, // pagina para el chatbot
  { path: 'politica', component: Politica }, // página de politica y privacidad
  { path: 'terminos', component: Terminos }, // página de términos y condiciones
  { path: '**', component: Error }, // para rutas de error
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
