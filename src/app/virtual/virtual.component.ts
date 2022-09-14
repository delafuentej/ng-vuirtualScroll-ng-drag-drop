import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {
 

  @ViewChild(CdkVirtualScrollViewport)
  viewport!: CdkVirtualScrollViewport;

   persons=Array(500).fill(0);

  constructor() { }

  ngOnInit(): void {
    console.log(this.persons)
  }
  toTheEnd(){
    this.viewport.scrollToIndex(this.persons.length);

  }

  toTheMiddle(){
    this.viewport.scrollToIndex(this.persons.length/2);
  }
  toTheStart(){
    this.viewport.scrollToIndex(this.persons[0]);
  }
}
