import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarPessoasComponent } from './listar-pessoas/listar-pessoas.component';
import { CadastrarPessoasComponent } from './cadastrar-pessoas/cadastrar-pessoas.component';
import { MostrarPerfilComponent } from './mostrar-perfil/mostrar-perfil.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarPessoasComponent,
    CadastrarPessoasComponent,
    MostrarPerfilComponent,
    EditarPessoaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
