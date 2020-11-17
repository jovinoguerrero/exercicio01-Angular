import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {

  nome: string = 'Jovino Guerrero Toledo';
  idade: number = 28;
  gosto: string = 'Tocar instrumentos de percussão';
  cidade: string = 'Rio de Janeiro';
  foto: string = "assets/images/eu.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
