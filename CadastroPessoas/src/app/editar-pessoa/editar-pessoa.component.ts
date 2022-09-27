import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Pessoa } from '../pessoa';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.scss']
})
export class EditarPessoaComponent implements OnInit {
  
  public pessoaNome : string = 'nn sei';
  public pessoaData : Date | any;
  public pessoaPhotoURL : String = '';

  @Input() pessoaInfo : Pessoa | any;
  @Input() pessoaListaEdita : any;

  @Output() editPessoa = new EventEmitter<Pessoa>();

  constructor() { 
  }

  enviaPessoa() {
    let pessoaUUID = uuidv4();

    let pessoa : Pessoa = {
      id : pessoaUUID,
      nome : this.pessoaNome,
      dataNasc : this.pessoaData,
      fotoURL : this.pessoaPhotoURL
    }

    //alert(JSON.stringify(pessoa));
    this.editPessoa.emit(pessoa);

  }

  ngOnInit(): void {
  }

}
