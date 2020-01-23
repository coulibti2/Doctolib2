import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { formatDate } from '@angular/common';
import {LoadingController, ToastController, AlertController} from '@ionic/angular';
import { NavController } from '@ionic/angular';
import {PatientPage} from '../patient/patient.page';
import {Router} from '@angular/router';
@Component({
  selector: 'app-event2',
  templateUrl: './event2.page.html',
  styleUrls: ['./event2.page.scss'],
})
export class Event2Page {
  title: string;
  decsription: string;
  start: string;
  end: string;

  constructor(
      public modalController: ModalController,
      public navParams: NavParams,
      private alertCtrl: AlertController,
      private navCtrl: NavController,
      private router: Router
  ) {
    this.title = navParams.get('title');
    this.decsription = navParams.get('description');
    this.start = formatDate(navParams.get('startTime'), 'medium', 'fr-FR');
    this.end = formatDate(navParams.get('endTime'), 'medium', 'fr-FR');
  }

  close() {
    this.modalController.dismiss();
  }
  async showAlert() {
   const alert = await this.alertCtrl.create({
      header: 'CONFIRMATION DU RDV',
      subHeader: '',
      message: 'En confirmant ce RDV, vous acceptez les conditions du respect du RDV. Veuillez- vous munir de votre carte vitale et votre dossier médical ce jour. Aucun frais ne sera remboursé',
      buttons: [{
        text: 'Annuler',
        handler: () => {

      }
    },  {
        text: 'Confirmer',
        handler: () => {
          console.log('ok');
          this.router.navigateByUrl('/home');
      }
  }]
  });
   alert.present();
  }
}
