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

  //@Input() testeStringEdita : string;

  @Input() pessoaInfo : Pessoa | any;
  @Input() pessoaListaEdita : any;

  @Output() editPessoa = new EventEmitter<Pessoa>();

  constructor() { 
  }

  checkDate() {
    if(!this.pessoaData) {
      return false;
    } else {
      let dateSplit : Array<string> = this.pessoaData.split('-');
      alert("splittado: " + dateSplit[0]);

      if(parseInt(dateSplit[0]) > 2022 || parseInt(dateSplit[0]) < 1901) {
        return false;
  
      } else if(parseInt(dateSplit[0]) == 2022 && parseInt(dateSplit[1]) >= 9 && parseInt(dateSplit[2]) >= 28) {
        return false;
      
      } else {
        return true;
      }
    }
  }

  setPessoa() {
    if(this.pessoaNome != '') {
      this.pessoaInfo.nome = this.pessoaNome;
    } 
    
    if(this.checkDate()) {
      this.pessoaInfo.dataNasc = this.pessoaData;
    } else {
      alert('Data inválida');
    }

    if(this.pessoaPhotoURL != '') {
      this.pessoaInfo.fotoURL = this.pessoaPhotoURL;
    } else {
      this.pessoaInfo.fotoURL = 'https://thispersondoesnotexist.com/image';
    }
    
    return;
  }

  //even though it is removing, the DOM is not updating for some reason
  removePessoa(pessoa : Pessoa) {
    let pessoaIndx = this.pessoaListaEdita.findIndex((pessoaProcurada : Pessoa) => {
      return pessoaProcurada.nome === pessoa.nome;
    });

    //alert("index : " + pessoaIndx);

    this.pessoaListaEdita.splice(pessoaIndx, 1);

    //alert("nova lista: " + JSON.stringify(this.pessoaLista));
  }

  enviaPessoa() {

    if(!this.pessoaNome) {
      alert("Ta faltando o nome!");
    
    } else if(!this.checkDate()){
      alert("Data inválida");
    
    } else {   
      
      //this.removePessoa(this.pessoaInfo);
      this.setPessoa();

      //alert(JSON.stringify(pessoa));
      //this.cadastraPessoa.emit(pessoa);

      this.pessoaListaEdita.push(this.pessoaInfo);

      //alert(JSON.stringify(this.pessoaListaEdita));
    }

    //alert(JSON.stringify(pessoa));
    this.editPessoa.emit(this.pessoaListaEdita);

    //alert("Pessoa a ser enviada: " + JSON.stringify(this.pessoaInfo))

  }

  ngOnInit(): void {
    //alert("teste ed: " + this.testeStringEdita);
    //alert("teste ed pessoa: " + JSON.stringify(this.pessoaInfo));
    //alert("teste ed pessoa lista: " + JSON.stringify(this.pessoaListaEdita));

  }

}
