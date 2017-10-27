import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string;
  colores:string[];
  placeholder:string;

  constructor() {
    this.nombre = 'Eduardo Almaraz Pintor';
    this.colores = ['Amarillo', 'Verde', 'Azul'];
    this.placeholder = 'Ingresa un color';
  }

  addColor(color) {
    this.colores.push(color.value);
    console.log(color.value);
    color.value = '';
    this.placeholder = 'Ingresa otro color';
    return false;
  }
}
