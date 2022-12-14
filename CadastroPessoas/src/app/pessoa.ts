//interface on how a 'Pessoa' should be
//the '?' is for when there's an undefined value (obs: should only be for the imageURL)
export interface Pessoa {
    id: String;
    nome: String;
    dataNasc?: Date;
    fotoURL?: String;
}