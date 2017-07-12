import { Component, OnInit, Input } from '@angular/core';
import {Items} from './../items';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent implements OnInit {

  @Input('item') item: Items;
  constructor() { }

  ngOnInit() {
  }

}
