import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService 
{

  constructor(private http:HttpClient) { }

  saveUser(user:Object):Observable<Object>
  {
    return this.http.post(`http://localhost:9095/wep/api/registerUser`,user);
  }

  loginUser(user:Object):Observable<any>
  {
    return this.http.post(`http://localhost:9095/wep/api/loginUser`,user);
  }

  isUserLoggedIn()
  {
    let user = sessionStorage.getItem('username')
    console.log(!(user===null))
    return !(user===null)
  }

  isTraineeLoggedIn()
  {
    let user = sessionStorage.getItem('classification')
    if(user=='Trainee')
    {
    return true
    }
    else
    {
    return false
    }
  }

  isNgoLoggedIn()
  {
    let user = sessionStorage.getItem('classification')
    if(user=='Ngo')
    {
    return true
    }
    else
    {
    return false
    }
  }

  isAdminLoggedIn()
  {
    let user=sessionStorage.getItem('password')
    if(user=='admin123')
    {
      return true
    }
    else
    {
      return false
    }
  }

  logOut()
  {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('password')
    sessionStorage.removeItem('classification')
  }

  getNgoUsersList():Observable<any>
  {
    return this.http.get(`http://localhost:9095/wep/api/findAllUsers`);

  }

  getTraineeUsersList():Observable<any>
  {
    return this.http.get(`http://localhost:9095/wep/ap/findAllUsers`);

  }

}
