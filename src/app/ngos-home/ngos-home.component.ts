import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ngos-home',
  templateUrl: './ngos-home.component.html',
  styleUrls: ['./ngos-home.component.css']
})
export class NgosHomeComponent implements OnInit 
{
  user:User|any;
  
  username=sessionStorage.getItem('username')

  constructor(private http:HttpClient) { }

  ngOnInit(): void 
  {
    let users:Observable<any>
    users=this.http.get(`http://localhost:9095/wep/api/findAllUsers`)
    users.subscribe((data:User[]) =>
    {
      for(let user of data)
      {
        if(user.email==this.username)
        {
          this.user=user
        }
      }
    }
    )
    
  }

  
    
  

}
