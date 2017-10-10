import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
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
    LegalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
