import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from 'src/app/model/usuario.model';
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperarSenha',
  templateUrl: './recuperarSenha.component.html',
  styleUrls: ['./recuperarSenha.component.css']
  
})
export class recuperarSenhaComponent implements OnInit {

  usuario: Usuario = {};

  constructor(private loginService : LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  recuperarSenha(form: NgForm){

    this.router.navigate(['/login']);
  }

}
