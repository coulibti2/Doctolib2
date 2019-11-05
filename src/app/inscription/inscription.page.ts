import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  inscriptionForm: FormGroup;

  errorMessages = {
    nom: [
      { type: 'required', message: 'Le nom est obligatoire!'},
      { type: 'minlength', message: 'Le nom doit être composer par 2 caracteres minimum!'},
      { type: 'maxlength', message: 'Le nom doit être composer par 20 caracteres maximum!'},
      { type: 'pattern', message: 'Veillez entrer le nom valide!'},
    ],
    prenom: [
      { type: 'required', message: 'Le prenom est obligatoire!'},
      { type: 'minlength', message: 'Le prenom doit être composer par 2 caracteres minimum!'},
      { type: 'maxlength', message: 'Le prenom doit être composer par 20 caracteres maximum!'},
      { type: 'pattern', message: 'Veillez entrer le prenom valide!'},
    ],
    email: [
      { type: 'required', message: 'Email est obligatoire!'},
      { type: 'minlength', message: 'Email doit être composer par 6 caracteres minimum!'},
      { type: 'maxlength', message: 'Email doit être composer par moins de 50 caracteres!'},
      { type: 'pattern', message: 'Veillez entrer adresse valide!'},
    ],
    emailConf: [
      { type: 'required', message: 'Les mails saisis ne sont pas les mêmes!'},
       ],
    password: [
      { type: 'required', message: 'Mot de passe est obligatoire!'},
      { type: 'minlength', message: 'Mot de passe doit être composer par 6 caracteres minimum!'},
      { type: 'maxlength', message: 'Mot de passe doit être composer par moins de 50 caracteres!'},
      { type: 'pattern', message: 'Veillez entrer un mot de passe valide!'},
    ],
    passwordConf: [
      { type: 'required', message: 'Les monts de passes saisis ne sont pas les mêmes!'},
    ],
  };

  constructor(
      public formBuilder: FormBuilder
  ) {
    this.inscriptionForm = this.formBuilder.group({
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
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50),
        Validators.pattern('\\w+@\\w+\\..{2,3}(.{2,3})?$')
      ])),
      emailConf: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50),
        Validators.pattern('\\w+@\\w+\\..{2,3}(.{2,3})?$')
      ])),
      password: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
          // Validators.pattern('/^[A-Za-z]\\w{7,14}$/')
          ])),
      passwordConf: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
          // Validators.pattern('/^[A-Za-z]\\w{7,14}$/')
          ]))
    });
  }

  ngOnInit = () => {
  }
  inscription() {
    console.log('nom:', this.inscriptionForm.value.nom);
    console.log('prenom:', this.inscriptionForm.value.prenom);
    console.log('email:', this.inscriptionForm.value.email);
    console.log('password: ' , this.inscriptionForm.value.password);
  }

  }
