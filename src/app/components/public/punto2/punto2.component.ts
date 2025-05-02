import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-punto2',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './punto2.component.html',
  styleUrl: './punto2.component.css'
})
export class Punto2Component {

  productos = [
    {
      nombre: 'Guantes de boxeo Proyec' , 
      descripcion: 'Los guantes Proyec ofrecen una combinación perfecta de durabilidad y comodidad, ideales para trabajos exigentes. Su diseño ergonómico y materiales de alta calidad garantizan un ajuste seguro y una excelente protección, sin sacrificar la destreza.', 
      img: 'assets/img/punto2/guantes_proyec.jpg', 
      precio: 90000
    },
    {
      nombre: 'Guantes de boxeo Proyec' , 
      descripcion: 'Los guantes Proyec ofrecen una combinación perfecta de durabilidad y comodidad, ideales para trabajos exigentes. Su diseño ergonómico y materiales de alta calidad garantizan un ajuste seguro y una excelente protección, sin sacrificar la destreza.', 
      img: 'assets/img/punto2/guantes_proyec.jpg', 
      precio: 90000
    },
    {
      nombre: 'Guantes de boxeo Proyec' , 
      descripcion: 'Los guantes Proyec ofrecen una combinación perfecta de durabilidad y comodidad, ideales para trabajos exigentes. Su diseño ergonómico y materiales de alta calidad garantizan un ajuste seguro y una excelente protección, sin sacrificar la destreza.', 
      img: 'assets/img/punto2/guantes_proyec.jpg', 
      precio: 90000
    },
    {
      nombre: 'Guantes 2M' , 
      descripcion: 'Los guantes 2M están diseñados para brindar máxima protección y confort en diversas aplicaciones. Con su tecnología avanzada y materiales resistentes, son perfectos para el uso diario, asegurando un agarre firme y una larga vida útil.', 
      img: 'assets/img/punto2/guantes_2m.jpg', 
      precio: 50000
    },
    {
      nombre: 'Guantes 2M' , 
      descripcion: 'Los guantes 2M están diseñados para brindar máxima protección y confort en diversas aplicaciones. Con su tecnología avanzada y materiales resistentes, son perfectos para el uso diario, asegurando un agarre firme y una larga vida útil.', 
      img: 'assets/img/punto2/guantes_2m.jpg', 
      precio: 50000
    },
    {
      nombre: 'Guantes 2M' , 
      descripcion: 'Los guantes 2M están diseñados para brindar máxima protección y confort en diversas aplicaciones. Con su tecnología avanzada y materiales resistentes, son perfectos para el uso diario, asegurando un agarre firme y una larga vida útil.', 
      img: 'assets/img/punto2/guantes_2m.jpg', 
      precio: 50000
    },
    {
      nombre: 'Guantes Adidas' , 
      descripcion: 'Los guantes Adidas destacan por su estilo moderno y funcionalidad. Confeccionados con materiales premium, ofrecen un ajuste perfecto y un excelente rendimiento, ideales para deportistas que buscan tanto protección como comodidad en sus actividades.', 
      img: 'assets/img/punto2/guantes_adidas.jpg', 
      precio: 100000
    },
    {
      nombre: 'Guantes Adidas' , 
      descripcion: 'Los guantes Adidas destacan por su estilo moderno y funcionalidad. Confeccionados con materiales premium, ofrecen un ajuste perfecto y un excelente rendimiento, ideales para deportistas que buscan tanto protección como comodidad en sus actividades.', 
      img: 'assets/img/punto2/guantes_adidas.jpg', 
      precio: 100000
    },
    {
      nombre: 'Guantes Adidas' , 
      descripcion: 'Los guantes Adidas destacan por su estilo moderno y funcionalidad. Confeccionados con materiales premium, ofrecen un ajuste perfecto y un excelente rendimiento, ideales para deportistas que buscan tanto protección como comodidad en sus actividades.', 
      img: 'assets/img/punto2/guantes_adidas.jpg', 
      precio: 100000
    },
  ];

carrito: any[] = []; 

constructor() {}

ngOnInit(): void{}

agregarAlCarrito(producto: any): void{
  this.carrito.push(producto);
  console.log('Carrito:', this.carrito);
}


calcularTotal(): number {
  let total = 0;
  for( let item of this.carrito){
    total += item.precio;
  }
  return total;
}
}
