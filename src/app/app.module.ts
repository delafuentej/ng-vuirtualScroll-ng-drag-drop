import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
/* scroll */
import { ScrollingModule } from '@angular/cdk/scrolling'
import { VirtualComponent } from './virtual/virtual.component';
/* drag & drop */
import { DragComponent } from './drag/drag.component';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { CountriesComponent } from './countries/countries.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    VirtualComponent,
    DragComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
