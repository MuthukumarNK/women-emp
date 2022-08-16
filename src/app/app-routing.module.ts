import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { StepHomeComponent } from './step-home/step-home.component';
import { LegislationsComponent } from './legislations/legislations.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { StepStatusComponent } from './step-status/step-status.component';
import { StepRegistrationConfirmComponent } from './step-registration-confirm/step-registration-confirm.component';
import { StepNgosComponent } from './step-ngos/step-ngos.component';
import { TrainingSectorsAgricultureComponent } from './training-sectors-agriculture/training-sectors-agriculture.component';
import { TrainingSectorsStitchingComponent } from './training-sectors-stitching/training-sectors-stitching.component';
import { TrainingSectorsTailoringComponent } from './training-sectors-tailoring/training-sectors-tailoring.component';
import { NgosOrganizationsComponent } from './ngos-organizations/ngos-organizations.component';
import { NgosStatusComponent } from './ngos-status/ngos-status.component';
import { StepRegistrationComponent } from './step-registration/step-registration.component';
import { NgosFundingnormsComponent } from './ngos-fundingnorms/ngos-fundingnorms.component';
import { AdminNgoComponent } from './admin-ngo/admin-ngo.component';
import { AdminTraineesComponent } from './admin-trainees/admin-trainees.component';
import { NgosRegisterComponent } from './ngos-register/ngos-register.component';
import { NgosHomeComponent } from './ngos-home/ngos-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminNgoDetailsComponent } from './admin-ngo-details/admin-ngo-details.component';
import { AdminNgoEditComponent } from './admin-ngo-edit/admin-ngo-edit.component';
import { AdminNgoAddComponent } from './admin-ngo-add/admin-ngo-add.component';
import { AdminTraineeDetailsComponent } from './admin-trainee-details/admin-trainee-details.component';
import { AdminTraineeEditComponent } from './admin-trainee-edit/admin-trainee-edit.component';
import { AdminTraineeAddComponent } from './admin-trainee-add/admin-trainee-add.component'

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path: 'navigation',component:NavigationComponent},
  {path: 'home',component:HomeComponent},
  {path: 'login-register',component:LoginRegisterComponent},
  {path: 'about-us', component:AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'faq', component:FaqComponent},
  {path: 'step-home', component:StepHomeComponent},
  {path: 'legislations', component:LegislationsComponent},
  {path: 'guidelines', component:GuidelinesComponent},
  {path: 'step-ngos', component:StepNgosComponent},
  {path: 'step-status', component:StepStatusComponent},
  {path: 'step-registration-confirm', component:StepRegistrationConfirmComponent},
  {path: 'training-sectors-agriculture', component:TrainingSectorsAgricultureComponent},
  {path: 'training-sectors-stitching', component:TrainingSectorsStitchingComponent},
  {path: 'training-sectors-tailoring', component:TrainingSectorsTailoringComponent},
  {path: 'ngos-organizations', component:NgosOrganizationsComponent},
  {path: 'ngos-status', component:NgosStatusComponent},
  {path: 'step-registration', component:StepRegistrationComponent},
  {path: 'ngos-fundingnorms', component:NgosFundingnormsComponent},
  {path: 'ngos-register', component:NgosRegisterComponent},
  {path: 'ngos-home', component:NgosHomeComponent},
  {path: 'admin-ngo', component:AdminNgoComponent},
  {path: 'admin-trainee', component:AdminTraineesComponent},
  {path: 'admin-home', component:AdminHomeComponent},
  {path: 'admin-login',component:AdminLoginComponent},
  {path: 'admin-ngo-details/:id',component:AdminNgoDetailsComponent},
  {path: 'admin-ngo-edit/:id',component:AdminNgoEditComponent},
  {path: 'admin-trainee-details/:id',component:AdminTraineeDetailsComponent},
  {path: 'admin-trainee-edit/:id',component:AdminTraineeEditComponent},
  {path: 'admin-ngo-add',component:AdminNgoAddComponent},
  {path: 'admin-trainee-add',component:AdminTraineeAddComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
