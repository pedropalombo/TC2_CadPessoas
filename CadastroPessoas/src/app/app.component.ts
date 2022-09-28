import { Component, Output } from '@angular/core';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  //placeholder array of Pessoa
  @Output() pessoaLista : Array<Pessoa> = [
    {
      id: '11111',
      nome: 'ullll',
      dataNasc: undefined,
      fotoURL: undefined,
    },
    {
      id: '3578',
      nome: 'pax',
      dataNasc: undefined,
      fotoURL: undefined,
    },
    {
      id: '616',
      nome: 'magnesio',
      dataNasc: undefined,
      fotoURL: undefined,
    },
    {
      id: '777',
      nome: 'deusvult',
      dataNasc: undefined,
      fotoURL: undefined,
    }
  ];

  //TODO: showProfile's logic is 'mostrar-perfil'
  //basic idea on how to go through/find people on "pessoaLista"
  showProfile(idPassado : String) {
    for(var pessoa in this.pessoaLista) {
      if(this.pessoaLista[pessoa].id == idPassado) {
        alert(this.pessoaLista[pessoa].id+
          '\n'+
          this.pessoaLista[pessoa].nome);
      }
    }
  }

  ngOnInit(): void {
  }
}
