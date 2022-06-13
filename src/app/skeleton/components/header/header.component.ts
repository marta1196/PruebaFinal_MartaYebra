import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  constructor(private router: Router) { }

  onLogin(){
    this.router.navigateByUrl('/auth/login');
  }

  onLogOut(){
    this.router.navigateByUrl('/auth/logout');
  }

  onSignUp(){
    this.router.navigateByUrl('/auth/register');
  }
}
