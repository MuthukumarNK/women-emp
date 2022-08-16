import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit 
{
  username='';
  password='';
  classification='';
  invalidLogin=false;
  errorMessage='Invalid Credentials';
  successMessage:string|any;
  loginSuccess=false;

  Classification=['Trainee','Ngo']

  registerForm: FormGroup|any;
  submitted=false;

  user:User=new User();

  constructor(private formBuilder:FormBuilder,private http:HttpClient,
    private userService:UserService, private router:Router) { }

 
  ngOnInit(): void 
  {
    this.registerForm=this.formBuilder.group({
      fname: ['',[Validators.required,Validators.pattern('^[a-zA-z]+$')]],
      lname: ['',[Validators.required,Validators.pattern('^[a-zA-z]+$')]],
      classification: ['',[Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]],
      confirmPassword: ['',[Validators.required,Validators.minLength(6)]],
      dob: ['',[Validators.required]],
      phoneNo: ['',[Validators.required]]
    } );
    
    
    this.userService.logOut();
    
    
  }

  //convenience getter for easy access to form fields
  get f() {return this.registerForm.controls;}

  mustMatch()
  {
    if (this.user.password == this.user.confirmPassword)
    {
      return false;
    } 
    else
    {
      return true;
    }
  }

  

  User():void
  {
    this.submitted=false;
    this.user= new User();
  }

  onSubmit()
  {
    this.submitted=true;
    this.user=this.registerForm.value;
    if(this.registerForm.invalid)
    {
      alert('Invalid Submission');
      return;
    }
    else
    {
      if(this.mustMatch()==false)
      {
        this.save();
      }
      else
      {
        alert('Password and Confirm must be same')
      }
    }
  }

  save()
  {
    this.userService.saveUser(this.user).subscribe
    (data => console.log(data), error => console.log(error));
    this.user=new User();

    this.gotoList();
    
  }

  gotoList()
  {
    alert('User Registered Successfully')
    this.router.navigate(['/home']);
  }


  checkLogin()
  {
    let user=
    {
      "email":this.username,
      "password":this.password,
      "classification":this.classification
    }

  if(this.classification=='Ngo' ||this.classification=='Trainee') 
    {
    let result=this.userService.loginUser(user);
    result.subscribe((response) => {
      console.log(response);
    
      if (response)
      {
        if(this.classification=='Ngo')
        {
        this.router.navigate(['ngos-home']);
        }
        else if(this.classification=='Trainee')
        {
          this.router.navigate(['step-home']);
        }
        sessionStorage.setItem('username', this.username)
        sessionStorage.setItem('classification', this.classification)
        this.invalidLogin=false;
        this.loginSuccess=true;
        this.successMessage="Login Successful";
      }
      else
      {
        this.invalidLogin=true;
      }
      
    });

  this.loginSuccess=false
    }

  }
}

  


