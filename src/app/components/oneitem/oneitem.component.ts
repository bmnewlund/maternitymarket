import { Component, OnInit } from '@angular/core';
import { ItemService } from 'app/components/admin/create/item.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-oneitem',
  templateUrl: './oneitem.component.html',
  styleUrls: ['./oneitem.component.css']
})
export class OneitemComponent implements OnInit {

  id: string
  item

  constructor(private itemService: ItemService, private CurrentURL: ActivatedRoute) { 

  }

  ngOnInit() {

    this.CurrentURL.params.subscribe(itemID =>{
      this.id = itemID.id
    })

    this.itemService.getItemByKey(this.id).subscribe(items =>{

    this.item = items 

    })
  }
}
