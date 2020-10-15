import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { ErrorComponent } from './componentes/error/error.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './servicios/auth.guard';


const routes: Routes = [
  {path: '', component: BienvenidaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent,
    canActivate: [AuthGuard]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
