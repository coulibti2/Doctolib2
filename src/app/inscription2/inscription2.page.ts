import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-inscription2',
  templateUrl: './inscription2.page.html',
  styleUrls: ['./inscription2.page.scss'],
})
export class Inscription2Page {

  // connection de BDD
  constructor(
      public formBuilder: FormBuilder,
      public afDB: AngularFireDatabase,
      public  afAuth: AngularFireAuth,
  ) {}

  InscriptionForm: FormGroup;
  nom: string;
  prenom: string;
  adresse: any;
  ville: any;

  errorMessages = {
    nom: [
      {type: 'required', message: 'Le nom est obligatoire!'},
      {type: 'minlength', message: 'Le nom doit être composer par 2 caracteres minimum!'},
      {type: 'maxlength', message: 'Le nom doit être composer par 20 caracteres maximum!'},
      {type: 'pattern', message: 'Veillez entrer le nom valide!'},
    ],
    prenom: [
      {type: 'required', message: 'Le prenom est obligatoire!'},
      {type: 'minlength', message: 'Le prenom doit être composer par 2 caracteres minimum!'},
      {type: 'maxlength', message: 'Le prenom doit être composer par 20 caracteres maximum!'},
      {type: 'pattern', message: 'Veillez entrer le prenom valide!'},
    ],
    adresse: [
      {type: 'required', message: 'adresse est obligatoire!'},
      {type: 'minlength', message: 'adresse doit être composer par 6 caracteres minimum!'},
      {type: 'maxlength', message: 'adresse doit être composer par moins de 50 caracteres!'},
      {type: 'pattern', message: 'Veillez entrer adresse valide!'},
    ],

    ville: [
      {type: 'required', message: 'Ville est obligatoire!'},
      {type: 'minlength', message: 'Ville doit être composer par 6 caracteres minimum!'},
      {type: 'maxlength', message: 'Ville doit être composer par moins de 50 caracteres!'},
      {type: 'pattern', message: 'Veillez entrer un Ville valide!'},
    ]
  };

  inscriptionForm = this.formBuilder.group({
    nom: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
    ])),
    prenom: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
    ])),
    adresse: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(50),
      /*
            Validators.pattern('\\w+@\\w+\\..{2,3}(.{2,3})?$')
            */
    ])),

    ville: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30),
      // Validators.pattern('/^[A-Za-z]\\w{7,14}$/')
    ]))
  });


  add() {
    this.afDB.list('Newdoctor/').push({
      nom: this.nom,
      prenom: this.prenom,
      adresse: this.adresse,
      ville: this.ville
      // age: parseInt(value.age)
    });
  }

}
