import {Routes, RouterModule} from "@angular/router";
import { HomeComponent } from "../home/home.component";
// import { ViewAllComponent } from "../view-all/viewAll.component";
import { LoginComponent } from "../login/login.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "app/footer/footer.component";

export const routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  //{path: 'login', component: LoginComponent},
  //{path: 'footer', component: FooterComponent},  
  
 //  {path: 'viewAll', component: ViewAllComponent},
  {path: '**', component: HomeComponent}
];
