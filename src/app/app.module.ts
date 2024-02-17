import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, DashboardComponent],
  imports: [BrowserModule, AppRoutingModule, provideFirebaseApp(() => initializeApp({"projectId":"job-portal-d3030","appId":"1:102118975118:web:7694d411e80e68763b4bdf","storageBucket":"job-portal-d3030.appspot.com","apiKey":"AIzaSyCFUp92K_9Le0NEp4mT5z2HafB5DJMrj4w","authDomain":"job-portal-d3030.firebaseapp.com","messagingSenderId":"102118975118"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
