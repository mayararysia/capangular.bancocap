import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';
import { Conta } from 'src/app/model/conta.model';

@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {
  
  conta: Conta ={
    hash: '',
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
    { cpf: '5', nome: "Michel"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  criarConta(): void {
    alert("Conta criada com sucesso!");
    console.log(this.conta);
  }

}
