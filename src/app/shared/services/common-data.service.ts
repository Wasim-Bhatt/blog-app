import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {
  isLoggedIn: boolean = false
  loggedinUser:User

  constructor() { }
}
