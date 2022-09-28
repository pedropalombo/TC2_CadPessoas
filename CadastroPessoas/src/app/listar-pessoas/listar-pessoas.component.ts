import { Component, Input, OnInit, Output } from '@angular/core';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-listar-pessoas',
  templateUrl: './listar-pessoas.component.html',
  styleUrls: ['./listar-pessoas.component.scss']
})
export class ListarPessoasComponent implements OnInit {

  constructor() { }
  
  @Output() pessoaSelecionada : Pessoa;

  public datePlaceholder = new Date("2019-10-10");

  //default array of Pessoa
  @Output() pessoaLista : Array<Pessoa> = [
    {
      id: '11111',
      nome: 'Aragorn',
      dataNasc: this.datePlaceholder,
      fotoURL: undefined,
    },
    {
      id: '3578',
      nome: "Vul'Jin",
      dataNasc: this.datePlaceholder,
      fotoURL: undefined,
    },
    {
      id: '616',
      nome: 'Santana',
      dataNasc: this.datePlaceholder,
      fotoURL: undefined,
    },
    {
      id: '777',
      nome: 'Joseph',
      dataNasc: this.datePlaceholder,
      fotoURL: undefined,
    }
  ];

  //placeholder pro MostrarPerfil, porque não consegui entender @Input/@Output direito, mas mostrar que pegar o obj não é um problema 
  verPerfilPlaceholder(pessoa : Pessoa) {
    alert('ID: '+ pessoa.id + '\n' +
          'Nome: '+ pessoa.nome + '\n' +
          'Data: '+ pessoa.dataNasc?.toLocaleDateString() + '\n' +
          'URL: '+ pessoa.fotoURL
    );
  }

  selecionaPessoa(pessoa : Pessoa) {
    this.pessoaSelecionada = pessoa;
  }

  //obs: even though it is removing, the DOM is not updating for some reason
  //removes 'Pessoa' from 'PessoaLista'
  removePessoa(pessoa : Pessoa) {
    let pessoaIndx = this.pessoaLista.findIndex((pessoaProcurada) => {
      return pessoaProcurada.nome === pessoa.nome;
    });

    //alert("index : " + pessoaIndx);

    this.pessoaLista.splice(pessoaIndx, 1);

    alert("Pessoa sendo deletada: " + JSON.stringify(pessoa.nome));
  }

  ngOnInit(): void {
    //this.pessoaLista = pessoa;

    
  }

}
