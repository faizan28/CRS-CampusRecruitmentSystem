import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { CompanyLoginComponent } from './company-login/company-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { HomeComponent } from './home/home.component';

import { routing } from './app.routing'
import { StudentService } from './services/student.service'
import { CompanyService } from './services/company.service'
import { AdminService } from './services/admin.service'

//angular firebae needed
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule  } from 'angularfire2/auth';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { AboutProjectComponent } from './about-project/about-project.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CommentsComponent } from './comments/comments.component';
import { NavComponent } from './nav/nav.component';

//firebase configuration
export const firebaseConfig = {
     apiKey: "AIzaSyAHBWSdFoqCDCBpmOQr9wGa4Z6Aw95Qmy0",
    authDomain: "ng4test-c1d62.firebaseapp.com",
    databaseURL: "https://ng4test-c1d62.firebaseio.com",
    projectId: "ng4test-c1d62",
    storageBucket: "",
    messagingSenderId: "37828785494"
}

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    StudentLoginComponent,
    CompanyLoginComponent,
    AdminDashboardComponent,
    StudentDashboardComponent,
    CompanyDashboardComponent,
    HomeComponent,
    StudentProfileComponent,
    StudentListComponent,
    CompanyProfileComponent,
    AboutProjectComponent,
    AboutMeComponent,
    CommentsComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [StudentService,CompanyService,AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
