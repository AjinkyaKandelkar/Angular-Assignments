import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { RecepiesListComponent } from './recepies/recepies-list/recepies-list.component';
import { RecepiesDetailsComponent } from './recepies/recepies-details/recepies-details.component';
import { RecepiesItemComponent } from './recepies/recepies-list/recepies-item/recepies-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListAddComponent } from './Shopping-List/shopping-list-add/shopping-list-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepiesComponent,
    RecepiesListComponent,
    RecepiesDetailsComponent,
    RecepiesItemComponent,
    ShoppingListComponent,
    ShoppingListAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
