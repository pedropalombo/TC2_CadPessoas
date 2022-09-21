import { Component } from '@angular/core';
import { Pessoa } from './pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CadastroPessoas';

  public pessoaNome : String = "ulala";
  public pessoaLista : Array<Pessoa> = [];

  ngOnInit(): void {
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
