import { Component, OnInit, Output } from '@angular/core';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-listar-pessoas',
  templateUrl: './listar-pessoas.component.html',
  styleUrls: ['./listar-pessoas.component.scss']
})
export class ListarPessoasComponent implements OnInit {

  constructor() { }

  @Output() pessoaSelecionada : any;
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

  selecionaPessoa(pessoa : Pessoa) {
    this.pessoaSelecionada = pessoa;
  }

  ngOnInit(): void {
  }

}
