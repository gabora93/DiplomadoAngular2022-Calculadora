import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'caluladora-app';

  operandoA = 0;
  operandoB = 0;
  resultado = 0;

  calcular(event: Event): void  {
    let element = (event.target as Element);
    switch (element.closest('button')?.id) {
      case 'sumar':
        this.resultado = this.operandoA + this.operandoB;
        break;
      case 'restar':
        this.resultado = this.operandoA - this.operandoB;
        break;
      case 'multiplicar':
        this.resultado = this.operandoA * this.operandoB;
        break;
      case 'dividir':
        this.resultado = this.operandoA / this.operandoB;
        break;
    }
  }
}
