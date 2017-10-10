import {Routes, RouterModule} from "@angular/router";
import { HomeComponent } from "../home/home.component";
import { ViewAllComponent } from "../view/viewAll.component";
import { LoginComponent } from "../login/login.component";

export const routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},  
  {path: 'viewAll', component: ViewAllComponent},
  {path: '**', component: HomeComponent}
];