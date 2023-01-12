import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css'],
})
export class CartsComponent {
  url = 'https://fakestoreapi.com/carts';
  carts: any;
  i!: number;
  data: any;
  selectedcart:any;
  products:any;
  name:string = 'peter';
  itemImageUrl = '../assets/images/download2.png';
  disabled : boolean = false;
  modelname:any;
  

  constructor(private http: HttpClient) {
    this.carts = [];
  }
  ngOnInit(): void {
    this.showcarts();
  }
  
  showcarts() {
    return this.http.get(this.url).subscribe((result: any) => {
      this.carts = result;
      console.log((this.carts = result));
    });
  }
  showModal(data: any) {
    // console.log('data', data);
    // this.selectedcart = this.carts[data]
    this.selectedcart = data
    console.log(this.selectedcart);
  }
}
