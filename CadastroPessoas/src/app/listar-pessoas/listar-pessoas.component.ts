import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-listar-pessoas',
  templateUrl: './listar-pessoas.component.html',
  styleUrls: ['./listar-pessoas.component.scss']
})
export class ListarPessoasComponent implements OnInit {

  constructor() { }

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
