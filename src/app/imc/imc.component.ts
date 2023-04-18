import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent {

  peso : number = 0;
  altura : number = 0;
  result : number = 0;
  mensagem : string = "";

  calc(){
    this.result = this.peso / (this.altura * this.altura);

    if(this.result < 18.5){
      this.mensagem = "Magreza";
    }

    else if(this.result > 18.5 && this.result < 24.9)
    this.mensagem = "Normal"

    else if(this.result > 25.0 && this.result < 29.9)
    this.mensagem = "Sobrepeso"

    else if(this.result > 30.0 && this.result < 39.9)
    this.mensagem = "Obesidade"

    else if(this.result > 40.0)
    this.mensagem = "Obesidade Grave"

  }


}
