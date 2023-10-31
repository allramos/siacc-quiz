import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { io } from "socket.io-client";
import { QuestaoService } from '../services/questao.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  questao!: any
  // pontuacao: number = 0
  respostaJogador: boolean = false
  respondeu: boolean = false
  questoesVistas: Set<any> = new Set();
  errouAlguma = false;
  tamPartida = 10
  iniciando = true;
  erradas = 0

  socket = io("http://localhost:3003")

  constructor(
    protected service: QuestaoService,
    private _snackBar: MatSnackBar
  ) {

  }


  ngOnInit(): void {

    // this.getQuestao()
    this.iniciar()
    let i = 0;
    if (i < this.tamPartida && !this.respondeu)
    this.getQuestao()
      // this.play()

  }

  play() {
    // this.socket.on('message', (data: any) => {
    if (!this.service.encerrada) {
      // this.respostaJogador = data
      // console.log('mensagem:', data);



      if (!this.respondeu && !this.iniciando) {
        if (this.respostaJogador == this.questao.gabarito) {
          this.acertou()
          this.respondeu = true
          if (this.questoesVistas.size == this.tamPartida) {
            this.venceu()
            // mensagem parabéns
            if (this.errouAlguma) {
              this.partidaEncerrada()
              return
            }
          }

        } else {
          console.log('errou');
          this.errouAlguma = true;
          this.erradas++;
          let audio: HTMLAudioElement = new Audio('/assets/erro.mp3');
          audio.play();
        }
      }

      if (this.questoesVistas.size >= this.tamPartida) {
        if (this.errouAlguma) {
          this.partidaEncerrada()
          return
        }
      }


      if (!this.iniciando && !this.getQuestao()) {
        setTimeout(() => {
          console.log('Buscando questão...');
          this.getQuestao()
        }, 500)
      }

      if (this.iniciando) {
        this.getQuestao()
        this.iniciando = false;
      }

    } else {
      this._snackBar.open('Aguardando o registro da pontuação. =====>', undefined,
        {
          horizontalPosition: 'center',
          verticalPosition: 'top'
        })
    }
    // });
  }

  getQuestao() {
    let ehNova = true
    this.service.getQuestao().subscribe((data: any) => {
      if (this.questoesVistas.has(data[0].id)) {
        ehNova = false
        return
      }
      this.respondeu = false;
      this.questao = data[0]
      this.questoesVistas.add(data[0].id)
      // console.log(this.questoesVistas);
    })
    return ehNova
  }

  acertou() {
    console.log('acertou');
    this.service.pontuacao++;

    let audio: HTMLAudioElement = new Audio('/assets/sucesso.mp3');
    audio.play();

  }

  venceu() {
    console.log('venceu');
    this.snack()
  }

  partidaEncerrada() {
    //Se está no ranking, cadastra o nome
    console.log('partida encerrada');
    this.service.encerrada = true
    if (this.service.pontuacao >= 7)
      this.snack('sucesso', 'Parabéns! Sua pontuação final foi ' + this.service.pontuacao + ' pontos.', 'OK', 0)
    else
      this.snack('sucesso', 'Sua pontuação final foi ' + this.service.pontuacao + ' pontos.', 'OK', 0)

    this.questao = {
      enunciado: 'Fim da partida. Registre seu resultado ->.'
    }


    // location.reload()

    // verificar se a pontuação está entre as melhores do ranking

  }

  iniciar() {
    this.service.pontuacao = 0;
    this.errouAlguma = false;
    this.questoesVistas.clear()
    this.iniciando = true
    this.service.encerrada = false
    this.erradas = 0

    this.questao = {
      enunciado: 'Aperte um dos botões para iniciar.'
    }
  }

  responder(res: any) {
    console.log(res);

    this.respostaJogador = res ? true : false
    this.getQuestao()
  }

  public snack(
    tipo: string = 'sucesso',
    message: string = 'Parabéns! Você acertou ' + this.tamPartida + ' questões! Avante!',
    action: any = undefined,
    duration: number = 5000,
    horizontalPosition: any = 'center',
    verticalPosition: any = 'bottom',
  ) {


    this._snackBar.open(message, action, {
      duration: duration,
      panelClass: tipo,
      horizontalPosition: horizontalPosition,
      verticalPosition: verticalPosition
    });
  }

}
