import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginData: any = {};
  data: any;

  constructor(private fb: FormBuilder) {
  
  }
  LoginForm = this.fb.group({
    Username: ['', Validators.required],
    Password: ['', Validators.required],
  });
  loginUser(data:any) {
    // console.log(data);
    console.log('hiii...');
    this.loginData = data
    console.log( this.loginData);
    
    
    
  }
  get Username(): FormControl {
    return this.LoginForm.get('Username') as FormControl;
  }
  get Password(): FormControl {
    return this.LoginForm.get('Password') as FormControl;
  }
}
