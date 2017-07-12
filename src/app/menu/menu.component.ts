import { Component, OnInit } from '@angular/core';
import {MenuService} from './../services/menu.service';
import {UtilService} from "../services/util.service";
import {SortByPipe} from './../pipes/sort-by.pipe';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items :Array<any> =[];
  error: string = '';
  sortField: string;
  sortDirection: string = 'asc';
  sortFields: Array<string>= [
    'type',
    'price',
    'item'
     ];

  constructor(private menuService: MenuService, private utilService: UtilService) { }

  ngOnInit() {
    this.menuService.getAllItems()
        .subscribe(
        data=> this.items = data,
        error=> this.error = error.statusText
      );

    this.menuService.newItemSubject.subscribe(
      data=> this.items = [data, ...this.items]
    );
  }

}
