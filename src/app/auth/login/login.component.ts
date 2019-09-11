import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router:Router, private snackBar: MatSnackBar, private loginService: LoginService) { }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
      const credentials = this.loginForm.value
      
      this.loginService.login(credentials).subscribe(
          (sucess) => {
            this.snackBar.open('Login feito com sucesso', 'Ok', {duration:4000})
            this.router.navigateByUrl('')
          },

          (error) => {
            this.snackBar.open('Credenciais inválidas!', 'Ok', {duration: 4000});
          }
      ).unsubscribe()
  }
}
