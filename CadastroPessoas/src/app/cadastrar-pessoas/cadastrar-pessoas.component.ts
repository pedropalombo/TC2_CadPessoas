import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Pessoa } from '../pessoa';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-cadastrar-pessoas',
  templateUrl: './cadastrar-pessoas.component.html',
  styleUrls: ['./cadastrar-pessoas.component.scss']
})
export class CadastrarPessoasComponent implements OnInit {

  constructor() { }

  @Input() pessoaListaCadastro : any;

  public pessoaNome : String = '';
  public pessoaDataNasc : Date | any;
  public pessoaPhotoURL : String = '';

  enviaPessoa() {
    let pessoaUUID = uuidv4();

    let pessoa : Pessoa = {
      id : pessoaUUID,
      nome : this.pessoaNome,
      dataNasc : this.pessoaDataNasc,
      fotoURL : this.pessoaPhotoURL
    }

    //alert(JSON.stringify(pessoa));
    //this.cadastraPessoa.emit(pessoa);

    this.pessoaListaCadastro.push(pessoa);

  }

  ngOnInit(): void {
  }

}
