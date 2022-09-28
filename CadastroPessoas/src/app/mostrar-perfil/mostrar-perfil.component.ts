import { Component, Input, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-mostrar-perfil',
  templateUrl: './mostrar-perfil.component.html',
  styleUrls: ['./mostrar-perfil.component.scss']
})

export class MostrarPerfilComponent implements OnInit {

  @Input() pessoaSendoMostrada : Pessoa;

  public defaultDate : Date = new Date();
  public defaultID = uuidv4();
  public dateFormated : string = this.defaultDate.toLocaleDateString();

  //hardcoding porque não consegui entender direito @Input/@Output, então não consegui buscar o obj por algum motivo
  protected newPessoa : Pessoa = {
    nome: 'Masteria Padronica',
    dataNasc: this.defaultDate,
    id: this.defaultID,
    fotoURL: 'https://thispersondoesnotexist.com/image'
  }

  constructor() {
  }

  ngOnInit(): void {
    
  }

}
