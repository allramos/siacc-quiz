import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GeralService } from '../services/geral.service';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent implements OnInit {

  form!: any

  constructor(
    private fb: FormBuilder,
    private service: AlunoService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      turma: [''],
    })
  }

  salvar() {
    // this.form.controls['pontuacao'].setValue(this.service.pontuacao)
    if (this.form.valid) {
      this.service.create(this.form.value).subscribe(data => {
        location.reload()
      })
    }
  }

}
