import { Injectable } from '@angular/core';
import { USERS } from '../mock/users';
import { User } from '../model/user.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private currentUserSubject: BehaviorSubject<User[] | null> = new BehaviorSubject<User[] | null>(USERS);
  public currentUser$: Observable<User[] | null> = this.currentUserSubject.asObservable();
  

  // 로그인 메서드
  

}
