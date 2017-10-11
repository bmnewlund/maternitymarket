import { Component } from '@angular/core';
import { ItemsComponent } from './items/items.component';
import { CreateComponent } from './create/create.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
