import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuCardComponent } from './menu-card/menu-card.component';
import {MenuService} from "./services/menu.service";
import { AddItemFormComponent } from './add-item-form/add-item-form.component';
import {UtilService} from "./services/util.service";
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuCardComponent,
    AddItemFormComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MenuService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
