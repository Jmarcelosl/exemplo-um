import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo',
  imports: [],
  templateUrl: './titulo.html',
  styleUrl: './titulo.scss',
})
export class Titulo implements OnInit{


  public mensagem: String = "Boas Vindas";

  ngOnInit(): void {
    this.definirMensagem();}

  definirMensagem(): void {
    const hora = new Date().getHours();
    if(hora < 12){
      this.mensagem = "Bom dia!";
    }else if(hora > 18){
      this.mensagem = "Boa noite!"
    }else{
      this.mensagem = "Boa tarde!";
    }
  }

}