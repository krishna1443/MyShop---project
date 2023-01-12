import { Component, OnInit } from '@angular/core';
import { UsersDataService } from "../services/users-data.service";


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  
})
export class ShopComponent implements OnInit {
  users:any ;
  constructor( private userService: UsersDataService) { }
  
  ngOnInit(): void {
    this.userService.users().subscribe((data:any)=>{
      console.log('data:', data);
      this.users = data
      console.log(this.users);
    });
  }
}
