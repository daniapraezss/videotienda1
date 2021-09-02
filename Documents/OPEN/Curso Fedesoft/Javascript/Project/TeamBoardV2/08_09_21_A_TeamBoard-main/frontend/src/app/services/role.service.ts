import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor(private _http:HttpClient) {}
  
  getRoles(){
    return this._http.get(environment.APP_URL + 'role/listRole');

  }
}