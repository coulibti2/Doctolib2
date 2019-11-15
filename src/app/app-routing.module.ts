import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'pages', loadChildren: './pages/pages.module#PagesPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'inscription', loadChildren: './inscription/inscription.module#InscriptionPageModule' },
  { path: 'patient', loadChildren: './patient/patient.module#PatientPageModule' },
  { path: 'doctor', loadChildren: './doctor/doctor.module#DoctorPageModule' },
  { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarPageModule' },
  { path: 'event', loadChildren: './event/event.module#EventPageModule' },
  { path: 'login2', loadChildren: './login2/login2.module#Login2PageModule' },
  { path: 'form', loadChildren: './form/form.module#FormPageModule' },
  { path: 'inscription2', loadChildren: './inscription2/inscription2.module#Inscription2PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
