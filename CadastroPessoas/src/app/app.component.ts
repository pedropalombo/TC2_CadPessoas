import { Component } from '@angular/core';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  public pessoaLista : Array<Pessoa> = []; //placeholder array of Pessoa

  //placeholder function
  alertada() {
    alert("Ainda nn faz nada");
  }

  //TODO: showProfile's logic is 'mostrar-perfil'
  //basic idea on how to go through/find people on "pessoaLista"
  showProfile(idPassado : number) {
    for(var pessoa in this.pessoaLista) {
      if(this.pessoaLista[pessoa].id == idPassado) {
        alert(this.pessoaLista[pessoa].id+
          '\n'+
          this.pessoaLista[pessoa].nome+
          '\n'+
          this.pessoaLista[pessoa].email);
      }
    }
  }

  ngOnInit(): void {
    //placeholder array for testing purposes
    this.pessoaLista = [
      {
        id: 11111,
        nome: 'ullll',
        email: 'ula@lol.com',
        dataNasc: undefined,
        fotoURL: undefined,
      },
      {
        id: 3578,
        nome: 'pax',
        email: 'saas@jooj.com',
        dataNasc: undefined,
        fotoURL: undefined,
      },
      {
        id: 616,
        nome: 'magnesio',
        email: 'fermentacao@quimica.com',
        dataNasc: undefined,
        fotoURL: undefined,
      },
      {
        id: 777,
        nome: 'deusvult',
        email: 'inri@bless.com',
        dataNasc: undefined,
        fotoURL: undefined,
      }
    ]
  }
}
