import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HistoriaClinicaService } from '../../../../services/historia-clinica-services';
@Component({
  selector: 'app-new-form',
  imports: [ReactiveFormsModule],
  templateUrl: './new-form.html',
  styleUrls: ['./new-form.css']  // <- aquí el cambio: styleUrls en plural
})
export class HistoriaClinicaNewForm {
formData!: FormGroup;

  constructor( private historiaClinicaService: HistoriaClinicaService ) {
    this.formData = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength( 5 ), Validators.maxLength( 50 ) ]),
      documentId: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', [Validators.required]),
      age: new FormControl( 0, [Validators.required, Validators.min(0)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      gender: new FormControl('', [Validators.required]),
      ethnicGroup: new FormControl('', [Validators.required]),
      bloodType: new FormControl('', [Validators.required]),
      covidIsolation: new FormControl(true, [Validators.required]),
      consultReason: new FormControl('', [Validators.required]),
      diseaseHistory: new FormControl('', [Validators.required]),
      personalHistory: new FormControl('', [Validators.required]),
      currentMeds: new FormControl('', [Validators.required]),
      familyHistory: new FormControl('', [Validators.required]),
      oralHygiene: new FormControl('', [Validators.required]),
      intraoralExam: new FormControl('', [Validators.required]),
      otherFindings: new FormControl('', [Validators.required]),
      companionName: new FormControl('', [Validators.required]),
      companionId: new FormControl(),
      companionRelation: new FormControl(),
      isGuardian: new FormControl( true, [Validators.required]),
      guardianName: new FormControl(),
      guardianId: new FormControl(),
      guardianPhone: new FormControl( 0 )
    });
  }

  onSubmit() {
    console.log( this.formData.value );
    console.log(
      this.formData.valid,
      this.formData.invalid,
      this.formData.pristine,
      this.formData.dirty,
      this.formData.touched
    )

    if( this.formData.valid ) {
      console.log( this.formData.value );
      const formValue = {
        ...this.formData.value,
        birthDate: new Date(this.formData.value.birthDate).toISOString()
      };

      this.historiaClinicaService.createHistoriaClinica(formValue).subscribe({
        next: (response) => {
          console.log('Respuesta del servidor:', response);
          this.formData.reset();
        },
        error: (err) => {
          console.error('Error:', err);
        }
      });

    }
  }
}
