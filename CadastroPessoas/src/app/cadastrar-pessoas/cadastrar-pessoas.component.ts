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

  //@Input() testeStringCadastra : string;

  @Input() pessoaListaCadastro : any;

  public pessoaNome : String = '';
  public pessoaDataNasc : Date | any;
  public pessoaPhotoURL : String = '';

  checkDate() {
    if(!this.pessoaDataNasc) {
      return false;
    } else {
      let dateSplit : Array<string> = this.pessoaDataNasc.split('-');
      //alert("splittado: " + dateSplit[0]);

      if(parseInt(dateSplit[0]) > 2022 || parseInt(dateSplit[0]) < 1901) {
        return false;
  
      } else if(parseInt(dateSplit[0]) == 2022 && parseInt(dateSplit[1]) >= 9 && parseInt(dateSplit[2]) >= 28) {
        return false;
      
      } else {
        return true;
      }
    }
  }

  //verifica os dados inseridos, e adiciona pra lista de pessoa, e envia a lista de volta
  //TODO: enviar a lista de volta
  enviaPessoa() {
    if(!this.pessoaNome) {
      alert("Ta faltando o nome!");
    
    } else if(!this.checkDate()){
      alert("Data inválida");
    
    } else {
      let pessoaUUID = uuidv4();

      let pessoa : Pessoa = {
        id : pessoaUUID,
        nome : this.pessoaNome,
        dataNasc : this.pessoaDataNasc,
        fotoURL : 'https://thispersondoesnotexist.com/image'
      }

      //alert(JSON.stringify(pessoa));
      //this.cadastraPessoa.emit(pessoa);

      this.pessoaListaCadastro.push(pessoa);

      //alert(JSON.stringify(this.pessoaListaCadastro));
    }
    alert("Ainda não envia a pessoa :(");
  }

  ngOnInit(): void {
    //alert("teste cad: " + this.testeStringCadastra);
    //alert("teste cad lista: " + JSON.stringify(this.pessoaListaCadastro));
  }

}
