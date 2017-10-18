import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from 'app/auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule } from "@angular/router";
import { routes } from "./constants/routes";
import { FooterComponent } from './footer/footer.component';
import { ItemsComponent } from './items/items.component';
import { CreateComponent } from './create/create.component';
import { OneitemComponent } from './oneitem/oneitem.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LegalComponent } from './legal/legal.component';
import { SignupComponent } from 'app/auth/signup/signup.component';
import { EdititemComponent } from './edititem/edititem.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { MyitemsComponent } from './myitems/myitems.component';
import { ItemService } from './create/item.service';
import { AuthService } from 'app/auth/auth.service';


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
    MyitemsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [ItemService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
