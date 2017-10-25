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

  ViewByCategory(e) {
    this.itemService.getItemsByCategory(e.target.id).subscribe(items =>{
    console.log(e.target.id);
    this.items = items;
    this.Unclicked = !this.Unclicked
    })
  }

}