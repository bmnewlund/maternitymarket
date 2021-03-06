// this component is the ViewAll Items Component, containing all the products

import { Component, OnInit } from '@angular/core';
import { ItemService } from 'app/components/admin/create/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: any
  constructor(private itemService: ItemService) { }
  ngOnInit() {

    }
}
