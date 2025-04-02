import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path: '' , component: HomeComponent, canActivate: [ authGuard]},
    {path: 'detalhes/:id' , component: DetalhesComponent, canActivate: [ authGuard]},
    {path: 'cadastro' , component: CadastrarComponent},
    {path: 'editar/:id' , component: EditarComponent, canActivate: [ authGuard]},
    {path: 'login' , component: LoginComponent},
];
