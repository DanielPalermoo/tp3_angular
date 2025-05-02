import { Component } from '@angular/core';

@Component({
  selector: 'app-punto1',
  imports: [],
  templateUrl: './punto1.component.html',
  styleUrl: './punto1.component.css'
})
export class Punto1Component {
  //Controlador
  //Array de Noticias
  noticias = [
    {
      titulo: 'Alex "Poatan" Pereira',
      descripcion:
        'Peleador brasileño de peso semipesado, conocido por su poderoso striking y su pasado como campeón de kickboxing. Ha sido campeón en dos divisiones de UFC',
      imagen: 'assets/img/punto1/alex_pereira.jpg',
    },
    {
      titulo: 'Israel Adesanya',
      descripcion:
        'Peleador de peso medio con un estilo técnico y llamativo, combina artes marciales mixtas con movimientos de kickboxing.',
      imagen: 'assets/img/punto1/israel_adesanya.jpg',
    },
    {
      titulo: 'Alexander Volkanovski',
      descripcion:
        'Campeón de peso pluma, célebre por su resistencia y su habilidad táctica en cada pelea.',
      imagen: 'assets/img/punto1/alexander_volkanovski.jpg',
    },
  ];

  //Indice del carrusel
  noticiaActual = 0;

  //Funcion para avanzar
  siguienteNoticia() {
    if (this.noticiaActual < this.noticias.length - 1) {
      this.noticiaActual++;
    } else {
      this.noticiaActual = 0; //Vuelve al inicio
    }
  }

  //Funcion para retroceder
  anteriorNoticia() {
    if (this.noticiaActual > 0) {
      this.noticiaActual--;
    } else {
      this.noticiaActual = this.noticias.length - 1; //Va al final
    }
  }
}
