import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { config } from '../environments/environment';
import { AppComponent } from './app.component';
import { LoginComponent } from 'app/components/auth/login/login.component';
import { HomeComponent } from 'app/components/home/home.component';
import { NavbarComponent } from 'app/components/navbar/navbar.component';

import { RouterModule } from "@angular/router";
import { routes } from "./constants/routes";
import { FooterComponent } from 'app/components/footer/footer.component';
import { ItemsComponent } from 'app/components/items/items.component';
import { CreateComponent } from 'app/components/admin/create/create.component';
import { OneitemComponent } from 'app/components/oneitem/oneitem.component';
import { AdminComponent } from 'app/components/admin/admin.component';
import { ContactComponent } from 'app/components/footer/contact/contact.component';
import { AboutComponent } from 'app/components/footer/about/about.component';
import { LegalComponent } from 'app/components/footer/legal/legal.component';
import { SignupComponent } from 'app/components/auth/signup/signup.component';
import { EdititemComponent } from 'app/components/admin/edititem/edititem.component';
import { EditprofileComponent } from 'app/components/admin/editprofile/editprofile.component';
import { ItemService } from 'app/components/admin/create/item.service';
import { AuthService } from 'app/services/auth.service';
import { AuthGuard } from 'app/services/auth-guard.service';
import { DeleteitemComponent } from 'app/components/admin/deleteitem/deleteitem.component';
import { LoginpageComponent } from 'app/components/auth/loginpage/loginpage.component';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireAuthModule} from 'angularfire2/auth';
import * as firebase from 'firebase';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ItemsComponent,
    CreateComponent,
    OneitemComponent,
    AdminComponent,
    ContactComponent,
    AboutComponent,
    LegalComponent,
    SignupComponent,
    EdititemComponent,
    EditprofileComponent,
    DeleteitemComponent,
    LoginpageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [
    ItemService, 
    AuthService, 
    AuthGuard, 
    AngularFireDatabase,
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


