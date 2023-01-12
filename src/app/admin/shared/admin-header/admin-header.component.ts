import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css'],
})
export class AdminHeaderComponent {
  @Output() myoutput: EventEmitter<any> = new EventEmitter();
  @Output() myoutput2: EventEmitter<any> = new EventEmitter();
  sortdata: any;
  ascendingdata: any;
  date:any;
  url = 'https://fakestoreapi.com/products?sort=desc';
  url2 = 'https://fakestoreapi.com/products?sort=asc';
  // url3='https://api.spacexdata.com/v3/rockets'

  constructor(private http: HttpClient) {
    this.sortdata = [];
    this.ascendingdata = [];
    this.date = new Date();
    
  }
  ngOnInit(): void {
    this.getsortlist();
    this.ascendinglist();
  }
  getsortlist() {
    return this.http.get(this.url).subscribe((result: any) => {
      console.log((this.sortdata = result));
    });
  }

  ascendinglist() {
    return this.http.get(this.url2).subscribe((result1: any) => {
      console.log((this.ascendingdata = result1));
    });
  }
  sendData() {
    this.myoutput.emit(this.sortdata);
  }
  ascendData() {
    this.myoutput2.emit(this.ascendingdata);
  }
}
