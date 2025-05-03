import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-punto3',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './punto3.component.html',
  styleUrl: './punto3.component.css'
})
export class Punto3Component implements OnInit {

  palabras: string[] = [
    'BOXEO',
    'KARATE',
    'JUDO',
    'TAEKWONDO',
    'KICKBOXING',
    'MUAY THAI',
    'LUCHA',
    'ESGRIMA',
    'JIUJITSU',
    'CAPOEIRA',
  ];

  palabraSecreta: String = '';
  palabraMostrada: String = '';
  intentosRestantes: number = 6;
  letrasAdivinadas: string[] = [];
  mensaje: string = '';
  juegoTerminado: boolean = false;
  letraIntento: string = '';

  imagenesAhorcado: string[] =[
    'assets/img/punto3/ahorcado_0.png',
    'assets/img/punto3/ahorcado_1.png',
    'assets/img/punto3/ahorcado_2.png',
    'assets/img/punto3/ahorcado_3.png',
    'assets/img/punto3/ahorcado_4.png',
    'assets/img/punto3/ahorcado_5.png',
    'assets/img/punto3/ahorcado_6.png',
  ];


  

  constructor(){}

  ngOnInit():void {
    this.inicializarJuego();
  }

  elegirPalabraSecreta(): void {
    const randomIndex = Math.floor(Math.random() * this.palabras.length);
    this.palabraSecreta = this.palabras[randomIndex];
  }

  inicializarJuego(): void{
    this.elegirPalabraSecreta();
    this.palabraMostrada = '_'.repeat(this.palabraSecreta.length);
    this.intentosRestantes = 6;
    this.letrasAdivinadas = [];
    this.mensaje = '';
    this.juegoTerminado = false;
    this.letraIntento = '';
    console.log('Palabra secreta:', this.palabraSecreta);
  }

  adivinarLetra(letra: string): void {
    if(this.juegoTerminado){
      return;
    }
    const letraMayuscula = letra.toUpperCase();

    if(this.letrasAdivinadas.includes(letraMayuscula)){
      this.mensaje = `Ya adivinaste la letra "${letraMayuscula}". Intenta con otra.`;
      return;
    }

    this.letrasAdivinadas.push(letraMayuscula)

    if(this.palabraSecreta.includes(letraMayuscula)){
      let nuevaPlabraMostrada = '';
      for(let i = 0; i< this.palabraSecreta.length; i++){
        if(this.palabraSecreta[i] === letraMayuscula){
          nuevaPlabraMostrada += letraMayuscula;
        }else{
          nuevaPlabraMostrada += this.palabraMostrada[i];
        }
      }
      this.palabraMostrada = nuevaPlabraMostrada;
      this.mensaje = `¡Correcto! La letra "${letraMayuscula}" está en la palabra.`;

      if(this.palabraMostrada === this.palabraSecreta){
        this.mensaje = `¡Felicidades! ¡Adivinaste la palabra secreta: "${this.palabraSecreta}"!`;
        this.juegoTerminado = true;
      }
    }else{
      this.intentosRestantes--;
      this.mensaje =`Incorrecto. La letra "${letraMayuscula}" no está en la palabra. Te quedan ${this.intentosRestantes} intentos.`;

      if(this.intentosRestantes === 0){
        this.mensaje = `¡Oh no! Te quedaste sin intentos. La palabra secreta era: "${this.palabraSecreta}".`;
        this.juegoTerminado = true;
        this.abrirModalPerdido();
      }
    }
  }

  get imagenAhorcado(): string {
    const indice = 6 - this.intentosRestantes;
    return this.imagenesAhorcado[indice];
  }

  abrirModalPerdido(): void{
    const modalElement = document.getElementById('modalPerdido');
    if(modalElement){
      const modal = new (window as any).bootstrap.Modal(modalElement, {} );
      modal.show();
    }
  }

  reiniciarJuego(): void {
    this.inicializarJuego();
  }


}
