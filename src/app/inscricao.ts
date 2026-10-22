export type StatusInscricao = 'Pendente' | 'Confirmada';

export interface Inscricao {
  id: number;
  nome: string;
  email: string;
  oficina: string;
  status: StatusInscricao;
}
