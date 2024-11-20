import { Component } from '@angular/core';
import { festivosServicios } from '../Services/http.service';
import { festivos } from '../models/festivos';

@Component({
  selector: 'app-vistas',
  standalone: true,
  imports: [],
  templateUrl: './vistas.component.html',
  styleUrl: './vistas.component.css'
})
export class VistasComponent {

  constructor(public clienteServicio:festivosServicios ){}
}
