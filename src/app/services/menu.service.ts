import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class MenuService {

  public newItemSubject = new Subject<any>();

  constructor(private http: Http) { }

  getAllItems(){
   return this.http.get('data/data.json').map(res=>res.json());
  }

  addItem(data){
    data.image = 'default-img';
    this.newItemSubject.next(data);
  }
}
