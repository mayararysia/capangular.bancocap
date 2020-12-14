import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from 'src/app/model/usuario.model';
import { NgForm, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
  
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario = {};
  constructor(private loginService : LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  cadastroUsuario(form: NgForm){
    let usuario: Usuario = form.value;
    this.loginService.inserirUsuario(usuario);
    this.router.navigate(['/login'])
  }

}
