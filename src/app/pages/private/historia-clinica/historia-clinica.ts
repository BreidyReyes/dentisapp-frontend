import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-historia-clinica',
  imports: [ ReactiveFormsModule ],
  templateUrl: './historia-clinica.html',
  styleUrl: './historia-clinica.css'
})
export class HistoriaClinica {
  formData!: FormGroup;

  constructor() {
    this.formData = new FormGroup({
      name: new FormControl(),
      documentId: new FormControl(),
      birthDate: new FormControl(),
      age: new FormControl(),
      email: new FormControl(),
      gender: new FormControl(),
      ethnicGroup: new FormControl(),
      bloodType: new FormControl(),
      covidIsolation: new FormControl(),
      consultReason: new FormControl(),
      diseaseHistory: new FormControl(),
      personalHistory: new FormControl(),
      currentMeds: new FormControl(),
      familyHistory: new FormControl(),
      oralHygiene: new FormControl(),
      intraoralExam: new FormControl(),
      otherFindings: new FormControl(),
      companionName: new FormControl(),
      companionId: new FormControl(),
      companionRelation: new FormControl(),
      isGuardian: new FormControl(),
      guardianName: new FormControl(),
      guardianId: new FormControl(),
      guardianPhone: new FormControl()
    });
  }
}
