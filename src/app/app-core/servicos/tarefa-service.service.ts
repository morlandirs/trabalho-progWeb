import { Injectable } from '@angular/core';
import {Tarefa} from "../model/tarefa";
import {Status} from "../model/status";

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private tarefas: string[] = [];
  private tarefasTeste: Tarefa[] =[];
  constructor() {
  }
  //aqui podemos ter toda a logica da aplicação referente a tarefa
  addTarefa(tarefa: string){
    this.tarefas.push(tarefa);
    console.log('TAREFAS CADASTRADAS: ', this.tarefas);
  }

  pupularTabelaTeste() : Tarefa[] {
    let status: Status= new Status(0, 'Nova');
    let tafefa: Tarefa = new Tarefa(
      'Estudar Angular',
      '19/04/2024',
      '19/05/2024',
      'Essa tarefa é destinada a estudar o framework angular.',
      status,
      0);
    let tafefa2: Tarefa = new Tarefa(
      'Estudar Bootstrap',
      '25/04/2024',
      '15/05/2024',
      'Essa tarefa é destinada a estudar o framework bootstrap.',
      status,
      0);
    this.tarefasTeste.push(tafefa, tafefa2);
    return this.tarefasTeste;
  }
}
