import { Component, OnInit } from '@angular/core';
import { ItemService } from 'app/components/admin/create/item.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  items: any
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items =>{
      console.log(items);
      this.items = items;
    })
  }

}
