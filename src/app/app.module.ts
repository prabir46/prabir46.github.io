import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookSeatsComponent } from './book-seats/book-seats.component';
import { DbService } from "./book-seats/db.service";

@NgModule({
  declarations: [
    AppComponent,
    BookSeatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
