import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from 'src/app/model/usuario.model';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {

  usuario: Usuario = {};
  usuarios: Usuario[];
  error:boolean = false;
  errorUsuarioInvalido: string = "";

  constructor(private loginService : LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login(form: NgForm){
    let usuario: Usuario = form.value;
    this.loginService.listarUsuarios().subscribe(res => {
      
      usuario = this.loginService.validarUsuario(usuario, res)
      usuario ? this.router.navigate(['/home']) : this.error = true, this.errorUsuarioInvalido = "usuário não encontrado";
    }); 
  }

  

}
