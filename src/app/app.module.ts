import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabase } from 'angularfire2/database';

import { config } from './constants/environment';

import { AppComponent } from './app.component';
import { LoginComponent } from 'app/auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule } from "@angular/router";
import { routes } from "./constants/routes";
import { FooterComponent } from './footer/footer.component';
import { ItemsComponent } from './items/items.component';
import { CreateComponent } from './create/create.component';
import { OneitemComponent } from './items/oneitem/oneitem.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LegalComponent } from './legal/legal.component';
import { SignupComponent } from 'app/auth/signup/signup.component';
import { EdititemComponent } from './edititem/edititem.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ItemService } from './create/item.service';
import { AuthService } from 'app/auth/auth.service';
import { AuthGuard } from 'app/auth/auth-guard.service';
import { DeleteitemComponent } from './deleteitem/deleteitem.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AngularFireAuth } from 'angularfire2/auth';


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


