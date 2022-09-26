import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarPessoasComponent } from './cadastrar-pessoas/cadastrar-pessoas.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';
import { ListarPessoasComponent } from './listar-pessoas/listar-pessoas.component';
import { MostrarPerfilComponent } from './mostrar-perfil/mostrar-perfil.component';

const routes: Routes = [
  {path: 'mostrar-perfil', component: MostrarPerfilComponent},
  {path: 'cadastrar-pessoa', component: CadastrarPessoasComponent},
  {path: 'editar-pessoa', component: EditarPessoaComponent},
  {path: 'listar-pessoas', component: ListarPessoasComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
