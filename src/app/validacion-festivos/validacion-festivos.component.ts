import { Component, ElementRef, ViewChild } from '@angular/core';
import { festivosServicios } from '../Services/http.service';
import { festivos } from '../models/festivos';

@Component({
  selector: 'app-validacion-festivos',
  standalone: true,
  imports: [],
  templateUrl: './validacion-festivos.component.html',
  styleUrls: ['./validacion-festivos.component.css']
})

export class ValidacionFestivosComponent {

  @ViewChild('entradaValidacion') entradaValidacion!: ElementRef;
  @ViewChild('entradaAnno') entradaAnno!: ElementRef;

  constructor(private clienteServicio: festivosServicios) {}

  // Asegurarse de que los ViewChild estén disponibles después de que la vista esté lista
  ngAfterViewInit(): void {
    // Aquí puedes acceder a los ViewChilds
    console.log(this.entradaValidacion);
    console.log(this.entradaAnno);
  }

  public ValidateHoliDay() {
    const selecccionarFecha = this.entradaValidacion.nativeElement.value;
    let arrayFecha = selecccionarFecha.split("-")
    console.log(arrayFecha)
    this.clienteServicio.validarFestivo(arrayFecha).subscribe({
      next: (response) => {
        alert(response.message);
      },
      error: (error) => {
        console.log("Ocurrio un Error");
        console.error(error);
      }
    });
  }

  public ObtenerFestivo() {
    const annoSeleccionado = this.entradaAnno.nativeElement.value;
    this.clienteServicio.obtenerFestivo(annoSeleccionado).subscribe({
      next: (response) => {
        this.clienteServicio.festivosList.length = 0;

        for (let festivo of response) {
          let claseFestivos = new festivos(festivo.nombre, festivo.dia, festivo.mes, annoSeleccionado);
          this.clienteServicio.festivosList.push(claseFestivos);
        }
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
