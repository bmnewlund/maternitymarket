import {Routes, RouterModule} from "@angular/router";

import { AboutComponent } from "app/about/about.component";
import { AdminComponent } from "app/admin/admin.component";
import { ContactComponent } from "app/contact/contact.component";
import { CreateComponent } from "app/create/create.component";
import { FooterComponent } from "app/footer/footer.component";
import { HomeComponent } from "../home/home.component";
import { ItemsComponent } from "app/items/items.component";
import { LegalComponent } from "app/legal/legal.component";
import { LoginComponent } from "../login/login.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { OneitemComponent } from "app/oneitem/oneitem.component";

export const routes = [
  //{path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  //{path: 'login', component: LoginComponent},
  {path: 'about', component: AboutComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'contact', component: ContactComponent}, 
  {path: 'create', component: CreateComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'items', component: ItemsComponent},
  {path: 'login', component: LegalComponent},
  {path: 'oneitem', component: OneitemComponent},
  {path: '**', component: HomeComponent}
];
