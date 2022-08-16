import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router, private logoutService:UserService) { }

  ngOnInit(): void 
  {
    this.logoutService.logOut();
    sessionStorage.removeItem('password')
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('classification')
    this.router.navigate(['login-register']);
  }

}
