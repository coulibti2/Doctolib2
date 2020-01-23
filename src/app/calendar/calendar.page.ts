import { Component, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';
import { AngularFireDatabase } from '@angular/fire/database';
import { ModalController } from '@ionic/angular';
import { EventPage } from '../event/event.page';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage  {
  currentDate = new Date();
  currentMonth: string;
  @ViewChild(CalendarComponent, {static: false}) myCalendar: CalendarComponent;
  showAddEvent: boolean;

  newEvent = {
    title: '',
    description: '',
    startTime: '',
    endTime: ''
  };
  allEvents = [];


  constructor(
      public modalController: ModalController,
      public afDB: AngularFireDatabase
  ) {
    this.loadEvent();
  }

  onViewTitleChanged(title: string) {
    this.currentMonth = title;
  }

  showHideForm(){
    this.showAddEvent = !this.showAddEvent;
  }

  addEvent() {
      this.afDB.list('Events').push({
        title: this.newEvent.title,
        startTime:  this.newEvent.startTime,
        endTime: this.newEvent.endTime,
        description: this.newEvent.description
      });
      this.showHideForm();
  }
  loadEvent() {
    this.afDB.list('Events').snapshotChanges(['child_added']).subscribe(actions => {
      actions.forEach(action => {
        console.log('Titre: ' + action.payload.exportVal().title);
        this.allEvents.push({
          title: action.payload.exportVal().title,
          startTime:  new Date(action.payload.exportVal().startTime),
          endTime: new Date(action.payload.exportVal().endTime),
          description: action.payload.exportVal().description,
        });
      });
    });
  }
  onTimeSelected(ev: any) {
    const selected = new Date(ev.selectedTime);
    this.newEvent.startTime = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.newEvent.endTime = (selected.toISOString());
  }
  async onEventSelected(event: any) {
    console.log('Event: ' + JSON.stringify(event));
    const modal = await this.modalController.create({
      component: EventPage,
      componentProps: event
    });
    return await modal.present();
  }


}
