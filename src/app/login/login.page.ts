import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  errorMessages = {
    email: [
      { type: 'required', message: 'Email est obligatoire!'},
      { type: 'minlength', message: 'Email doit être composer par 6 caracteres minimum!'},
      { type: 'maxlength', message: 'Email doit être composer par moins de 50 caracteres!'},
      { type: 'pattern', message: 'Veillez entrer adresse valide!'},
    ],
    password: [
      { type: 'required', message: 'Mot de passe est obligatoire!'},
      { type: 'minlength', message: 'Mot de passe doit être composer par 6 caracteres minimum!'},
      { type: 'maxlength', message: 'Mot de passe doit être composer par moins de 50 caracteres!'},
      { type: 'pattern', message: 'Veillez entrer un mot de passe valide!'},
    ],
  };

  constructor(
      public formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      password: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
          // Validators.pattern('/^[A-Za-z]\\w{7,14}$/')
          ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50),
        Validators.pattern('\\w+@\\w+\\..{2,3}(.{2,3})?$')
      ]))
    });
  }

  ngOnInit = () => {
  }
  login() {
    console.log('email:', this.loginForm.value.email);
    console.log('password: ' , this.loginForm.value.password);
  }

}
