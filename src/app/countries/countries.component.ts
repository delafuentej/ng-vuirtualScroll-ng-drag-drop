import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries: any=[];

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
    this.http.get(`https://restcountries.com/v3.1/lang/spa`)
    .subscribe( countries => this.countries= countries)
    /* console.log(this.countries) */
  }
  drop(event:CdkDragDrop<any>){
  /* console.log("ok!",event) */
  moveItemInArray(this.countries, event.previousIndex, event.currentIndex );
    

  }

}
