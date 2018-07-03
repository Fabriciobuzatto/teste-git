import { RouterModule, Routes } from '@angular/router';
import { BuscaComponent } from './busca/busca.component';
import { UsuarioComponent } from './usuario/usuario.component';

const appRoutes: Routes  = [
  { path: '', component: BuscaComponent },
  { path: ':user', component: UsuarioComponent },
  { path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);