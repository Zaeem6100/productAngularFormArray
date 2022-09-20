import {NgModule, OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import { FormsComponent } from './forms/forms.component';
import { ProductformComponent } from './productform/productform.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    ProductformComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
