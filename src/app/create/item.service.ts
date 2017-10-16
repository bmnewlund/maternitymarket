import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ItemService {
  constructor(private http: Http) {}
  AddItems(items: any) {
    return this.http.post('https://maternity1150.firebaseio.com/items.json',
      items);
  }
}