import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../service/authService.service';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../../model/user.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  // 로그인 여부
  isLoggedIn$!: Observable<boolean>;
  // 현재 사용자 정보
  currentUser$!: Observable<User | null>;

  constructor(
    private authService: AuthServiceService,
  ){}

  ngOnInit(): void {

    this.isLoggedIn$ = this.authService.currentUser$.pipe(
      map(user => user !== null)
    );
    this.currentUser$ = this.authService.currentUser$;
  }

  logout(): void {
    this.authService.logout();
  }

}
