import {Routes, RouterModule} from "@angular/router";
import { AboutComponent } from "app/components/footer/about/about.component";
import { AdminComponent } from "app/components/admin/admin.component";
import { ContactComponent } from "app/components/footer/contact/contact.component";
import { CreateComponent } from "app/components/admin/create/create.component";
// import { EdititemComponent } from 'app/components/admin/edititem/edititem.component';
import { EditprofileComponent } from 'app/components/admin/editprofile/editprofile.component';
import { FooterComponent } from "app/components/footer/footer.component";
import { HomeComponent } from "app/components/home/home.component";
import { ItemsComponent } from "app/components/items/items.component";
import { LegalComponent } from "app/components/footer/legal/legal.component";
import { LoginComponent } from "app/components/auth/login/login.component";
import { NavbarComponent } from "app/components/navbar/navbar.component";
import { SignupComponent } from 'app/components/auth/signup/signup.component';
import { OneitemComponent } from "app/components/oneitem/oneitem.component";
import { AuthGuard } from 'app/services/auth-guard.service';
import { LoginpageComponent } from "app/components/auth/loginpage/loginpage.component";

export const routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent}, 
  {path: 'create', component: CreateComponent},
  // {path: 'edititem', component: EdititemComponent},
  {path: 'editprofile', component: EditprofileComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'item', children:[
    {path: ':id', component: OneitemComponent}
  ]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  {path: 'legal', component: LegalComponent},
  {path: 'login', component: LoginComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'loginpage', component: LoginpageComponent},
  {path: '**', redirectTo: 'signup'}

];
