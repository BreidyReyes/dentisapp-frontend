import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DentistService } from '../../../../services/dentist.service';
import { JsonPipe } from '@angular/common';
import { DisponibilidadService } from '../../../../services/disponibilidad.service';

@Component({
  selector: 'app-new-form',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './new-form.html',
  styleUrl: './new-form.css'
})
export class disponibilidadNewForm {
  formData!: FormGroup;
  dentist: any= []

  constructor (private usersService: DentistService, private disponibilidadService: DisponibilidadService  ){
    this.formData = new FormGroup({
      dentist: new FormControl("", [ Validators.required]),
      diaSemana: new FormControl(),
      horaInicio: new FormControl(),

    });
  }

  onSubmit(){
    // console.log(this.formData.value),   
    // console.log(
    //   this.formData.valid,
    //   this.formData.invalid,
    //   this.formData.pristine,
    //   this.formData.dirty,
    //   this.formData.touched
    // );
    if (this.formData.valid) {
      console.log(this.formData.value)
      this.disponibilidadService.registrarDisponibilidad(this.formData.value).subscribe({
        next: ( data ) => {
          console.log( data ) 
          //aqui va una re direcion al listado de disponibilidad
        },
        error: ( error ) => {
          console.error( error )
        },
        complete: () => {
              this.formData.reset();
        }
      })
    }

  }
  ngOnInit() {
    this.usersService.getDentist().subscribe({
      next: (data) => {
        console.log(data)
        this.dentist = data
      },
      error: (error) => {
        console.error(error)
      },
      complete:() => {}
    })
  }

  ngOnDestroy() {
    console.log( 'ngOnDestroy' );
  }
}
