import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConnexionComponent } from './connexion/connexion.component';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { TodoPageComponent } from './todo-page/todo-page.component';


const routes: Routes = [
  { path: '', component: InscriptionComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'tache', component: TodoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
