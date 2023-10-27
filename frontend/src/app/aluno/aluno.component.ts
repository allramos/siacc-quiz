import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { QuestaoService } from '../services/questao.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent implements OnInit {

  form!: any

  constructor(
    private fb: FormBuilder,
    private service: QuestaoService
    ){}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      turma: [''],
      pontuacao: 0
    })
  }

  salvar(){
    this.form.controls['pontuacao'].setValue( this.service.pontuacao)
    // console.log(this.form.value);
    if(this.form.valid){
    this.service.salvarAluno(this.form.value).subscribe(data => {
      location.reload()
    })
    }
  }

}
