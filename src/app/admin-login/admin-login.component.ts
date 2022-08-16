import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit 
{

  username='';
  password='';
  invalidLogin=false;
  errorMessage='Invalid Credentials';
  successMessage:string|any;
  loginSuccess=false;

  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void 
  {

  }

  checkLogin()
  {
    let user=
    {
      "userName":this.username,
      "password":this.password,
    }

    let result=this.http.post(`http://localhost:9095/wep/api/loginAdmin`,user);
    result.subscribe((response) => {
      console.log(response);
      if (response)
      {
        sessionStorage.setItem('username', this.username)
        sessionStorage.setItem('password',this.password)
        this.invalidLogin=false;
        this.loginSuccess=true;
        this.successMessage="Login Successful";
        this.router.navigate(['admin-home']);
      }
      else
      {
        this.invalidLogin=true;
      }
    });

      
  this.loginSuccess=false
      }
}