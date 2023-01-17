import { Component } from '@angular/core';
import { UsersDataService } from "./services/users-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptor';
  users:any;
  constructor(private userData:UsersDataService){
    console.log(userData);
    userData.getusers().subscribe((data)=>{
      // console.log('data:', data);
      this.users = data
      // alert(this.users.name)
      // console.log(this.users);
    });
 }
}

