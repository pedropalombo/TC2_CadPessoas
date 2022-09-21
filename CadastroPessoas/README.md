# Atenção Vagabas

Os arquivos tem seus respectivos TODOs em forma de comentario. Antes de fazerem as parada, procurem por eles antes de implementar a lógica q tão bolando, pra nn precisar ficar rachando a mente atoa.

Além disso, sempre q forem adicionar algo novo, criem uma branch onde vão fazer as mudanças, usando essa nomenclatura:
-> 'feature/titulo-pra-feature': pra coisas novas que ainda não estão no código.
-> 'fix/tema-concerto-da-feature': pra debbugs das features.

A branch 'develop' serve como um meio-campo de teste, antes de a gente jogar tudo na master. previne ter q ficar fazer rollback e os krl.

OBS: lembrem-se de nn trabalhar direto na master, e sim na suas respectivas branches. nn q seja impossivel de resolver, mas a gente tem mais cerebro q isso B).
PS: linha de merge fica ent:.
  |-> feature|fix/... -> develop -> master

# CadastroPessoas

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
