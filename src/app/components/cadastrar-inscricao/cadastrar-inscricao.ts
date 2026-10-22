import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InscricaoService } from '../../services/inscricao.service';

@Component({
  selector: 'app-cadastrar-inscricao',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './cadastrar-inscricao.html',
  styleUrl: './cadastrar-inscricao.css',
})
export class CadastrarInscricao {
  private readonly formBuilder = inject(FormBuilder);
  private readonly inscricaoService = inject(InscricaoService);

  readonly opcoesOficina = ['Introdução à fotografia', 'Programação criativa', 'Horta sustentável'];
  readonly formulario = this.formBuilder.nonNullable.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    oficina: ['', Validators.required],
  });
  readonly controles = this.formulario.controls;

  cadastrar(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    this.inscricaoService.adicionar(this.formulario.getRawValue());
    this.formulario.reset();
  }
}
