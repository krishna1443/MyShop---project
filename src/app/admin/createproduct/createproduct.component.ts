import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
    

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css'],
})
export class CreateproductComponent {
  title = ' Angular Template Driven Form ';
  title2 = 'Template Driven form validation';
  title3 = 'Angular Reactive Form';
  closeResult: string = '';
  productData: any = {};
  loginData: any = {};
  Registered: any = {};
  Adduser: any;
  data: any;
  carts: any = [];
  Mobilenumber:any;
  data2: any = [
    {
      id: 1,
      name: 'Maharastra',
    },
    {
      id: 2,
      name: 'Pune',
    },
    {
      id: 3,
      name: 'Mumbai',
    },
    {
      id: 4,
      name: 'West Bengal',
    },
    {
      id: 5,
      name: 'Bihar',
    },
  ];
  url = 'https://fakestoreapi.com/users';
  // url = 'https://fakestoreapi.com/carts';

  // RegisterForm = new FormGroup({
  //   UserName:new FormControl(''),
  //   Password:new FormControl(''),
  // })
  RegisterForm = this.fb.group({
    Mobile:['',[Validators.required]],
    UserName: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('[a-zA-Z].*'),
      ],
    ],
    Password: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(15)],
    ],
    Email: ['', [Validators.required, Validators.email]],
    Name: this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    }),
    address: this.fb.group({
      city: ['', Validators.required],
      street: ['', Validators.required],
      number: ['', Validators.required],
      zipcode: ['', Validators.required],
      geolocation: this.fb.group({
        lat: ['', Validators.required],
        long: ['', Validators.required],
      }),
    }),
    Phone: ['', [Validators.required]],
  });
  constructor(private fb: FormBuilder, private http: HttpClient,private modalService: NgbModal) {
    this.Adduser = [];
  }
  public ngOnInit() {}

  getData(data: NgForm) {
    console.log(data);
    this.productData = data;
  }
  loginUser(registerData: NgForm) {
    console.log(registerData);
    this.loginData = registerData;
  }
  RegisterUser(content2:any) {
    if (!this.RegisterForm.valid) {
      console.log('invalid');
      // alert('All fields are Required');
      this.open(content2);
      return;
    }
    
    // console.log(this.RegisterForm.value);
    this.Registered = this.RegisterForm.value;
    // console.log(this.Registered);
    // console.log(this.RegisterForm.get('UserName'));
    this.http
      .post<any>(this.url, this.RegisterForm.value)
      .subscribe((result: any) => {
        this.Adduser = result;
        console.log(result);
        // alert(result.id);
        alert('User Create' + result.id);
        this.resetForm();
      });
  }
  get UserName(): FormControl {
    return this.RegisterForm.get('UserName') as FormControl;
  }
  get Password(): FormControl {
    return this.RegisterForm.get('Password') as FormControl;
  }
  get Email(): FormControl {
    return this.RegisterForm.get('Email') as FormControl;
  }
  get firstName(): FormControl {
    return (this.RegisterForm.get('Name') as FormGroup).get(
      'firstName'
    ) as FormControl;
  }
  get lastName(): FormControl {
    return (this.RegisterForm.get('Name') as FormGroup).get(
      'lastName'
    ) as FormControl;
  }
  get city(): FormControl {
    return (this.RegisterForm.get('address') as FormGroup).get(
      'city'
    ) as FormControl;
  }
  get street(): FormControl {
    return (this.RegisterForm.get('address') as FormGroup).get(
      'street'
    ) as FormControl;
  }
  get number(): FormControl {
    return (this.RegisterForm.get('address') as FormGroup).get(
      'number'
    ) as FormControl;
  }
  get zipcode(): FormControl {
    return (this.RegisterForm.get('address') as FormGroup).get(
      'zipcode'
    ) as FormControl;
  }
  get lat(): FormControl {
    return (this.RegisterForm.get('address') as FormGroup).get(
      'geolocation.lat'
    ) as FormControl;
  }
  get long(): FormControl {
    return (this.RegisterForm.get('address') as FormGroup).get(
      'geolocation.long'
    ) as FormControl;
  }
  get Phone(): FormControl {
    return this.RegisterForm.get('Phone') as FormControl;
  }
  get Mobile(): FormControl {
    return this.RegisterForm.get('Mobile') as FormControl;
  }
  resetForm() {
    this.RegisterForm.reset();
  }
  open(content?:any) {
    console.log(content);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  } 

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
