import { Component, OnInit} from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-spaceobservable',
  templateUrl: './spaceobservable.component.html',
  styleUrls: ['./spaceobservable.component.css'],
})
export class SpaceobservableComponent implements OnInit {
  listusers$: any;
  data:any;
  
  constructor(private userService: UsersDataService) {}

  ngOnInit(): void {
    this.userService.getusers().subscribe((data:any) => {
      this.listusers$ = data;
    }, error =>{
      console.log(error);
      
    });
  }
}
