import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(public router: Router){
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.pattern("^([a-zA-Z0-9_\\-\\.\\+]+)@([a-zA-Z0-9_\\-\\.]+)\\.(\\b(?!web\\b)[a-zA-Z]{2,5})$")]),
      password: new FormControl('',[Validators.required, Validators.minLength(2)])
    });
  }


  /** Redirecting users based on user credentials */
  onSubmit(){
    if(this.loginForm.valid){
      alert("login success!");
      this.router.navigate(['/table'], { replaceUrl: true });
    } else {
      alert("Enter valid email and password");
      return;
    }
  }
}
