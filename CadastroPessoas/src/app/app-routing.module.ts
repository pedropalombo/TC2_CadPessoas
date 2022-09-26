import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarPerfilComponent } from './mostrar-perfil/mostrar-perfil.component';

const routes: Routes = [
  {path: 'mostrar-perfil', component: MostrarPerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
