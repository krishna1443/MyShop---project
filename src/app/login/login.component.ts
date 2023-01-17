import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from "@angular/common/http";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginData: any = {};
  data: any;
  newPet:any;
  loggeduser:any = {};
  user:any = {
    type: " " , 
    _id: " " , 
    userName: " ", 
    token: " ",
}
  loginUrl = "http://139.59.87.15:3080/api/v1/account/login"

  
  public getToken(): string {
    return JSON.parse(localStorage.getItem('token') || "{}");
  }

  constructor(private fb: FormBuilder, private http:HttpClient) {
  
  }
  LoginForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
  });
  loginUser(data:any) {
    // console.log(data);
    console.log('hiii...');
    this.loginData = data
    console.log( this.loginData);

    // localStorage.setItem('token', JSON.stringify(this.loginData)
    this.http
      .post<any>(this.loginUrl, this.LoginForm.value)
      .subscribe((result: any) => {
        this.loggeduser = result;
        console.log(result);
        alert('User Create' + result.result.token);
        // this.resetForm();
        localStorage.setItem('token', JSON.stringify(result.result.token));
      });
      // this.newPet = JSON.parse(localStorage.getItem('token') || "{}");
      // console.log(this.newPet);
      
  }

  
    
  get userName(): FormControl {
    return this.LoginForm.get('userName') as FormControl;
  }
  get password(): FormControl {
    return this.LoginForm.get('password') as FormControl;
  }

}

