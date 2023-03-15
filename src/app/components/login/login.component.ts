import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(public router: Router, private toastr: ToastrService){
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.pattern("^([a-zA-Z0-9_\\-\\.\\+]+)@([a-zA-Z0-9_\\-\\.]+)\\.(\\b(?!web\\b)[a-zA-Z]{2,5})$")]),
      password: new FormControl('',[Validators.required, Validators.minLength(2)])
    });
  }


  /** Redirecting users based on user credentials */
  onSubmit(){
    if(this.loginForm.valid){
      this.router.navigate(['/table'], { replaceUrl: true });
    } else {
      this.toastr.error('Please Enter a valid email and password');
      return;
    }
  }
}
