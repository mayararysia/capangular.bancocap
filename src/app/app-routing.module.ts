import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteViewComponent } from './components/cliente/cliente-view/cliente-view.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ContaViewComponent } from './components/conta/conta-view/conta-view.component';
import { ContaComponent } from './components/conta/conta.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "clientes",
    component: ClienteComponent
  },
  {
    path: "cliente-view",
    component: ClienteViewComponent
  },
  {
    path: "contas",
    component: ContaComponent
  },
  {
    path: "conta-view",
    component: ContaViewComponent
  },
  {
    path: "login",
    component: LoginComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
