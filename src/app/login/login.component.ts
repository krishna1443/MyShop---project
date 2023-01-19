import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginData: any = {};
  data: any;
  storage: any;
  loggeduser:any = {};
  userLoggedin:boolean = true;
  data2: any;
  signupdata: any = {};
  signuser: any = {};

  loginUrl = 'http://139.59.87.15:3080/api/v1/account/login';
  Creteaccounturl = 'http://139.59.87.15:3080/api/v1/account/create';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}
  LoginForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
  });
  loginUser(data: any) {
    this.userLoggedin = true;
    // console.log(data);
    console.log('hiii...');
    this.loginData = data;
    console.log(this.loginData);
    // localStorage.setItem('token', JSON.stringify(this.loginData)
    this.http
      .post<any>(this.loginUrl, this.LoginForm.value)
      .subscribe((result: any) => {
        this.loggeduser = result;
        console.log(result);
        
        // this.resetForm();
        // alert('User Create' + result.result.token);
        // localStorage.setItem('token', JSON.stringify(result.result.token));
      });
    // this.storage = JSON.parse(localStorage.getItem('token') || "{}");
    // console.log(this.storage);
  }

  get userName(): FormControl {
    return this.LoginForm.get('userName') as FormControl;
  }
  get password(): FormControl {
    return this.LoginForm.get('password') as FormControl;
  }
  signupFormGroup = this.fb.group({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^([a-zA-Z0-9@*#]{8,15})$'),
    ]),
    confirm_Password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('^([a-zA-Z0-9@*#]{8,15})$'),
    ]),
  });

  get firstName(): FormControl {
    return this.signupFormGroup.get('firstName') as FormControl;
  }
  get lastName(): FormControl {
    return this.signupFormGroup.get('lastName') as FormControl;
  }
  get mobile(): FormControl {
    return this.signupFormGroup.get('mobile') as FormControl;
  }
  get email(): FormControl {
    return this.signupFormGroup.get('email') as FormControl;
  }
  get confirm_Password(): FormControl {
    return this.signupFormGroup.get('confirm_Password') as FormControl;
  }

  onSignupUser(data2:any) {
    this.signupdata = data2;
    console.log(this.signupdata);

    this.http
      .post<any>(this.Creteaccounturl, this.signupdata)
      .subscribe((result: any) => {
        this.signuser = result;
        console.log(result);
        // alert('User Create' + result.result.token);
        // localStorage.setItem('token', JSON.stringify(result.result.token));
      });
  }
  switchForm() {
    this.userLoggedin = !this.userLoggedin;
  }
}
