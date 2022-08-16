import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router, private logoutService:UserService) { }

  ngOnInit(): void 
  {
    this.logoutService.logOut();
    this.router.navigate(['/home']);
  }

}
