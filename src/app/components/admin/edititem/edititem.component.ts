import { Component, OnInit } from '@angular/core';
declare var $ :any;

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css']
})
export class EdititemComponent implements OnInit {

  constructor() { }

  ngAfterViewInit(){
    $(document).ready(function(){
      $("#free-item").click(function(){
        $("#price").val('Free');
      });
    });
  }

  ngOnInit() {
  }

  editItem(){
    $('#edititem-modal').modal('hide');
  }
}
