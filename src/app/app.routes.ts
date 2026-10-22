import { Routes } from '@angular/router';
import { CadastrarInscricao } from './components/cadastrar-inscricao/cadastrar-inscricao';
import { ListaInscricoes } from './components/lista-inscricoes/lista-inscricoes';

export const routes: Routes = [
  { path: 'cadastro', component: CadastrarInscricao },
  { path: 'lista', component: ListaInscricoes },
  { path: '', pathMatch: 'full', redirectTo: 'cadastro' },
  { path: '**', redirectTo: 'cadastro' },
];
