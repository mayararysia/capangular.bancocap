import { Component, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/model/cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']  
})
export class ClienteComponent implements OnInit {

  rotaNovoCliente:string = '/clientes-view';
  submitted = false;

  cliente: Cliente = {
    nome: '',
    cpf: ''
  }
  
  constructor() { }

  ngOnInit(): void {
  }  

  onSubmit(form: NgForm) {

    this.submitted = true;

    alert("Cliente" +  form.name.toString() + "cadastrado com sucesso!");
    console.log(form);
  } 
  
}

