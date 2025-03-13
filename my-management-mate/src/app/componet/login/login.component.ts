import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../service/authService.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  checkedLoginForm!: FormGroup;

  constructor(
    private authService: AuthServiceService,
    private formBuilder: FormBuilder,
    private router: Router,
  ){}

  ngOnInit(): void {

    // 폼 초기화 및 예외처리
    this.checkedLoginForm = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.minLength(1) ]],
      password: ['', [ Validators.required, Validators.minLength(1) ]]
    });

  }

  onSubmit(): void {

    if(this.checkedLoginForm.invalid){
      return;
    }

    const loginFormValue = this.checkedLoginForm.value;
    const { email, password } = loginFormValue;
    this.authService.login(email, password);
    this.router.navigate(['']);

  }


}
