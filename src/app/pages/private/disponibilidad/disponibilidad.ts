import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-disponibilidad',
  imports: [ReactiveFormsModule],
  templateUrl: './disponibilidad.html',
  styleUrl: './disponibilidad.css'
})
export class Disponibilidad {
  formData!: FormGroup;

  constructor ( ){
    this.formData = new FormGroup({
      odontologoId: new FormControl(),
      diaSemana: new FormControl(),
      horaInicio: new FormControl(),

    })
  }
}
