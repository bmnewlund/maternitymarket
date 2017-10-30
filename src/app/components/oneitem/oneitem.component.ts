import { Component, OnInit } from '@angular/core';
import { ItemService } from 'app/components/admin/create/item.service';
import { UserService } from 'app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-oneitem',
  templateUrl: './oneitem.component.html',
  styleUrls: ['./oneitem.component.css']
})
export class OneitemComponent implements OnInit {

  id: string
  item: any
  user: any = {
    email: "",
    phone: "",
    zip: ""
  }

  constructor(private itemService: ItemService, private CurrentURL: ActivatedRoute, private userService: UserService) { 

  }

  ngOnInit() {

    this.CurrentURL.params.subscribe(itemID =>{
      this.id = itemID.id
    })

    this.itemService.getItemByKey(this.id).subscribe(items =>{
    this.item = items

      this.userService.getUserByUserID(this.item.userid).subscribe(user =>{
        this.user = user[0]
        console.log(this.item.category)
      })
    })
  }
}
