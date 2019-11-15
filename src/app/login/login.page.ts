import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  dataUser = {
    email: '',
    password: ''
  };
  connected: boolean;
  statut: boolean;
  conne: boolean;
  test: any;
  constructor(
      public  afAuth: AngularFireAuth,
  ) {
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('non connecté');
        this.connected = false;
      } else {
        console.log('connecté: ' + auth.uid);
        // if(auth.role === 'admin')
        this.connected = true;
      }
    });
  }

  login() {
    this.test = 'patient';
    this.afAuth.auth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password);
    this.dataUser = {
      email: '',
      password: ''
    };
  }
  login1() {
    this.test = 'doctor';
    this.afAuth.auth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password);
    this.dataUser = {
      email: '',
      password: ''
    };
  }
  logout() {
    this.afAuth.auth.signOut();
  }

  signUp() {
    this.test = 'inscription';
    this.afAuth.auth.createUserWithEmailAndPassword(this.dataUser.email, this.dataUser.password);
    this.dataUser = {
      email: '',
      password: ''
    };
  }
}
