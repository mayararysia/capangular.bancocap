import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ContaComponent } from './components/conta/conta.component';
import { HomeComponent } from './components/home/home.component';

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
    path: "contas",
    component: ContaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
