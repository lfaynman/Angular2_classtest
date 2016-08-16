import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CatlistComponent } from './catlist/catlist.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AppMvpComponent } from './app-mvp/app-mvp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatlistComponent,
    CalendarComponent,
    AppMvpComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
