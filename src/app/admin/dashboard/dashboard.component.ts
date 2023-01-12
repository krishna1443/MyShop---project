import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  productdata:any;
  sortdata:any;
  ascendingdata:any;
  url='https://fakestoreapi.com/products'
  constructor(private http:HttpClient) {
    this.productdata = [];
   }
   ngOnInit():void{
    this.getproductslist()
   }

  getproductslist()
  {
    return this.http.get(this.url).subscribe((result:any)=>{(this.productdata = result)
      // console.log(this.productdata = result)
    })
  }
  getdata(event:any){
    console.log(event);
    this.productdata = event;
    console.log(this.productdata);
    
  }
  ascenDdata(event2:any){
    console.log(event2);
    this.productdata = event2;
    console.log(this.productdata);
  }
  
}