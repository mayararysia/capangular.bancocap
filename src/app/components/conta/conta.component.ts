import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';
import { Conta } from 'src/app/model/conta.model';

import * as objectHash from 'object-hash'

// declare var require: any

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {
 
  hash: any;

  selectedValue: string = '';
  exibirCadastro: boolean = false;
  
  conta: Conta ={
    hcode: '',
    cliente: {
      cpf: '', nome: ''
    },
    saldo: 0.0
  }
  
  mock_clientes: Cliente[] = [
    { cpf: '1', nome: "John" },
    { cpf: '2', nome: "Mary" },
    { cpf: '3', nome: "Sophie"},
    { cpf: '4', nome: "Susan"},
    { cpf: '5', nome: "Terry" },
    { cpf: '6', nome: "Cindy" },
    { cpf: '7', nome: "Grace"},
    { cpf: '8', nome: "Steve"},
    { cpf: '9', nome: "Menphis"},
    { cpf: '10', nome: "Zenny"}
  ];
  
  constructor() { }
  
  ngOnInit(): void { }
  
  
  criarConta(): void {
    this.encontrarClientePorNome(this.selectedValue)
    
    console.log(this.conta);
    console.log('hashCode: '+this.hash)
  }
  
  encontrarClientePorNome(nome: string) {
    for (const client of this.mock_clientes) {
      if( client.nome == this.selectedValue ) {
        this.conta.cliente = client;

        this.hash = objectHash(this.conta)

        break
      }
    }
  }
  
}
