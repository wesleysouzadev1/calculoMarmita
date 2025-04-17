import { Routes } from '@angular/router';
import { ContainerPrincipalComponent } from './container-principal/container-principal.component';

export const routes: Routes = [
    {path: 'containerPrincipal', title: 'Cálculo de Marmitas', component: ContainerPrincipalComponent},
    {path: '', redirectTo: 'containerPrincipal', pathMatch: 'full'},
];
