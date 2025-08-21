import { Routes } from '@angular/router';
import { Pagina1Component } from './pages/pagina1/pagina1.component';
import { Pagina2Component } from './pages/pagina2/pagina2.component';
import { PaginaErroComponent } from './pages/pagina-erro/pagina-erro.component';
import { rotaGuard } from './autenticacao/rota.guard';

export const routes: Routes = [
  { path: 'pagina1', component: Pagina1Component },
  { path: 'pagina2', component: Pagina2Component, canActivate: [rotaGuard] },
  { path: '', redirectTo: '/pagina1', pathMatch: 'full' },
  { path: '**', component: PaginaErroComponent }
];


