import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuService } from './../services/menu.service';
import {NgForm} from '@angular/forms';
import {UtilService} from "../services/util.service";

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})
export class AddItemFormComponent implements OnInit {

  @ViewChild('newItemForm') newItemForm: NgForm;

  itemType: Array<string> = ['Appetizers', 'Main course', 'Dessert']
  constructor(private menuService:MenuService, private utilService:UtilService) { }

  ngOnInit() {
  }

  onItemSubmit(data){
    this.menuService.addItem(data);
    this.newItemForm.reset();
  }

}
