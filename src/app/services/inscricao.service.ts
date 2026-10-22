import { Injectable } from '@angular/core';
import { Inscricao } from '../inscricao';

@Injectable({ providedIn: 'root' })
export class InscricaoService {
  private inscricoes: Inscricao[] = [];
  private proximoId = 1;

  listar(): Inscricao[] {
    return this.inscricoes;
  }

  adicionar(novaInscricao: Pick<Inscricao, 'nome' | 'email' | 'oficina'>): void {
    this.inscricoes = [
      ...this.inscricoes,
      { ...novaInscricao, id: this.proximoId++, status: 'Pendente' },
    ];
  }

  remover(id: number): void {
    this.inscricoes = this.inscricoes.filter((inscricao) => inscricao.id !== id);
  }

  confirmarInscricao(id: number): void {
    this.inscricoes = this.inscricoes.map((inscricao) =>
      inscricao.id === id ? { ...inscricao, status: 'Confirmada' } : inscricao,
    );
  }
}
