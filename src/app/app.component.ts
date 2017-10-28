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
  showList:boolean;

  constructor() {
    this.nombre = 'Eduardo Almaraz Pintor';
    this.colores = ['Amarillo', 'Verde', 'Azul'];
    this.placeholder = 'Ingresa un color';
    this.showList = true;

  }

  addColor(color) {
    this.colores.push(color.value);
    console.log(color.value);
    color.value = '';
    this.placeholder = 'Ingresa otro color';
    return false;
  }

  switchView() {
    this.showList = !this.showList;
  }
}
