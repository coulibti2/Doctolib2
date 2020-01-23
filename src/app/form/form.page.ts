import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage  {
  private patient: FormGroup;
  constructor( private formBuilder: FormBuilder ) {
    this.patient = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: [''], adresse: [''], age: [''],
    });
  }
  logForm(){
    console.log(this.patient.value)
  }
}
