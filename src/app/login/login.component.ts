import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName = '';

  isUserNameSet() {
   if(this.userName == '')
     return false;
   else
     return true;
  }

  resetUserName() {
    this.userName = '';
  }
}
