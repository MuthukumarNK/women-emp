import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { LegislationsComponent } from './legislations/legislations.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { StepHomeComponent } from './step-home/step-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { TrainingSectorsAgricultureComponent } from './training-sectors-agriculture/training-sectors-agriculture.component';
import { TrainingSectorsTailoringComponent } from './training-sectors-tailoring/training-sectors-tailoring.component';
import { TrainingSectorsStitchingComponent } from './training-sectors-stitching/training-sectors-stitching.component';
import { StepNgosComponent } from './step-ngos/step-ngos.component';
import { StepStatusComponent } from './step-status/step-status.component';
import { StepRegistrationConfirmComponent } from './step-registration-confirm/step-registration-confirm.component';
import { NgosOrganizationsComponent } from './ngos-organizations/ngos-organizations.component';
import { NgosStatusComponent } from './ngos-status/ngos-status.component';
import { StepRegistrationComponent } from './step-registration/step-registration.component';
import { NgosFundingnormsComponent } from './ngos-fundingnorms/ngos-fundingnorms.component';
import { AdminNgoComponent } from './admin-ngo/admin-ngo.component';
import { AdminTraineesComponent } from './admin-trainees/admin-trainees.component';
import { NgosRegisterComponent } from './ngos-register/ngos-register.component';
import { NgosHomeComponent } from './ngos-home/ngos-home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminNgoDetailsComponent } from './admin-ngo-details/admin-ngo-details.component';
import { AdminNgoEditComponent } from './admin-ngo-edit/admin-ngo-edit.component';
import { AdminTraineeDetailsComponent } from './admin-trainee-details/admin-trainee-details.component';
import { AdminTraineeEditComponent } from './admin-trainee-edit/admin-trainee-edit.component';
import { AdminNgoAddComponent } from './admin-ngo-add/admin-ngo-add.component';
import { AdminTraineeAddComponent } from './admin-trainee-add/admin-trainee-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    AboutUsComponent,
    LoginRegisterComponent,
    LogoutComponent,
    LegislationsComponent,
    ContactUsComponent,
    FaqComponent,
    StepHomeComponent,
    GuidelinesComponent,
    TrainingSectorsAgricultureComponent,
    TrainingSectorsTailoringComponent,
    TrainingSectorsStitchingComponent,
    StepNgosComponent,
    StepStatusComponent,
    StepRegistrationConfirmComponent,
    NgosOrganizationsComponent,
    NgosStatusComponent,
    StepRegistrationComponent,
    NgosFundingnormsComponent,
    AdminNgoComponent,
    AdminTraineesComponent,
    NgosRegisterComponent,
    NgosHomeComponent,
    AdminHomeComponent,
    LogoutComponent,
    AdminLoginComponent,
    AdminNgoDetailsComponent,
    AdminNgoEditComponent,
    AdminTraineeDetailsComponent,
    AdminTraineeEditComponent,
    AdminNgoAddComponent,
    AdminTraineeAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
