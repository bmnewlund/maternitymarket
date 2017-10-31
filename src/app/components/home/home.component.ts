import { Component, OnInit, enableProdMode } from '@angular/core';
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
babylist = {
  category1: ["Activities & Gear","Apparel","Bath","Bedding","Car Seats","Diaper Bags","Diapers","Feeding & Nursing","Health & Safety"],
  category2: ["Nursery Decor","Nursery Furniture","Nursery Storage","Playroom","Strollers","Swaddle","Blankets","Toys","Baby Other"],
  momlist:['Activewear','Dresses','Pants','Shorts','Skirts','Sweaters','Tops','Mom Other']
}

  items: any
  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    $(document).ready(function(){
      $(".category").click(function(){
        $("#category-bar").replaceWith('<span id="category-bar">'+this.id+'</span>');
      });
      $(".browse-btn").click(function(){
        $("#category-bar").replaceWith('<span id="category-bar">Browsing All (click here to select a category)</span>');
        });
    });
  }

  ViewAll() {
    this.itemService.getItems().subscribe(items =>{
      this.items = items;
    })
  }

  ViewByCategory(e) {
    this.itemService.getItemsByCategory(e.target.id).subscribe(items =>{
    this.items = items;
    this.Unclicked = !this.Unclicked
    })
  }

}