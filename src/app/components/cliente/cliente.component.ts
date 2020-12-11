import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
  
})
export class ClienteComponent implements OnInit {

  cliente: Cliente = {
    nome: '',
    cpf: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarCliente(): void {
    alert("Cliente criado com sucesso!");
    console.log(this.cliente);
  }

}
