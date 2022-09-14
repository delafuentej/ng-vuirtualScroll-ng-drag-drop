import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
/* scroll */
import { ScrollingModule } from '@angular/cdk/scrolling'
import { VirtualComponent } from './virtual/virtual.component';
/* drag & drop */
import { DragComponent } from './drag/drag.component';
import { DragDropModule} from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [
    AppComponent,
    VirtualComponent,
    DragComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
