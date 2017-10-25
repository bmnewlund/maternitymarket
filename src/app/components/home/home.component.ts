import { Component, OnInit } from '@angular/core';
import { ItemService } from 'app/components/admin/create/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

Unclicked = true

ShowCategories(e){
  this.Unclicked = !this.Unclicked
  
}
  
HideCategories(e){
  this.Unclicked = !this.Unclicked

}
  items: any
  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  ViewAll() {
    this.itemService.getItems().subscribe(items =>{
      console.log(items);
      this.items = items;
    })
  }

}
