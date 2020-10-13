import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  public Labels1: string[] =  ['Café', 'Cacao', 'Banano'];
  public data1 = [
    [1250, 2585, 4500],
  ];



}
