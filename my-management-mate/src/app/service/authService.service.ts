import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { USERS } from '../mock/users';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  // 현재 로그인된 사용자 정보를 저장장
  private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  // 사용자 정보 변경을 구독할 수 있도록 Observable 제공
  public currentUser$: Observable<User | null> = this.currentUserSubject.asObservable();

  constructor(){
    const storedUser = this.getUserFromSessionStorge();
    if(storedUser){
      this.currentUserSubject.next(storedUser);
    }
  }
  

  // 로그인 메서드
  login(email: string, password: string): boolean{
    const user = USERS.find( u => u.email === email && u.password === password );
    if (user) {
      this.setUserToSessionStorge(user);
      this.currentUserSubject.next(user);
      return true;
    }
    else {
      return false;
    }
  }

  // 로그아웃
  logout():void {
    this.clearUserFromSessionStorge();
    this.currentUserSubject.next(null);
  }

  // 로그인 상태 확인
  isLoggedIn():boolean {
    return this.currentUserSubject.value !== null;
  }
  
  // 섹션에서 사용자 정보 가져오기기
  private getUserFromSessionStorge(): User | null{
    const userJson = sessionStorage.getItem('currentUser');
    return userJson ? JSON.parse(userJson) : null;
  };

  // 섹션에서 사용자 정보 저장
  private setUserToSessionStorge(user: User): void {
    sessionStorage.setItem('currentUser', JSON.stringify(user));
  };

  private clearUserFromSessionStorge(): void {
    sessionStorage.removeItem('currentUser');
  }
  

}
