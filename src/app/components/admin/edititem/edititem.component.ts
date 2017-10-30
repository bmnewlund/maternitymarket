//import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Component, OnInit, Input } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
declare var $ :any;
import {Observable} from 'rxjs/Observable';
import { ItemService } from '../create/item.service';
import { Item } from 'app/models/item.model';

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css']
})
export class EdititemComponent implements OnInit {
  @Input() key: any;
  item: Item[];

  constructor(public itemService: ItemService) {
    // this.item = this.itemService.itemRef;
   }

  ngAfterViewInit(){
    $(document).ready(function(){
      $("#free-item").click(function(){
        $("#price").val('Free');
      });
    });
  }

  ngOnInit() {
    // this.itemService.getItems().subscribe(item => {
    //   console.log(item);
    //   this.item = item;
    // })
  }

  // editItem(item){
    
  // }

  updateItem(category, title, price, description) {
    let data = {
      category: category.value,
      title: title.value,
      price: price.value,
      description: description.value,
      key: this.key.keyId
    }
    
    console.log(data);
    this.itemService.updateItem(data)
    $('#edititem-modal').modal('hide');
    
  }
}
