import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InscricaoService } from '../../services/inscricao.service';

@Component({
  selector: 'app-lista-inscricoes',
  imports: [RouterLink],
  templateUrl: './lista-inscricoes.html',
  styleUrl: './lista-inscricoes.css',
})
export class ListaInscricoes {
  private readonly inscricaoService = inject(InscricaoService);

  get inscricoes() {
    return this.inscricaoService.listar();
  }

  get totalInscricoes(): number {
    return this.inscricoes.length;
  }

  get inscricoesConfirmadas(): number {
    return this.inscricoes.filter((inscricao) => inscricao.status === 'Confirmada').length;
  }

  get inscricoesPendentes(): number {
    return this.inscricoes.filter((inscricao) => inscricao.status === 'Pendente').length;
  }

  confirmarInscricao(id: number): void {
    this.inscricaoService.confirmarInscricao(id);
  }

  remover(id: number): void {
    this.inscricaoService.remover(id);
  }
}
