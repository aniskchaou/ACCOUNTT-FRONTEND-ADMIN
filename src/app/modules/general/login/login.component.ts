import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { URLLoader } from 'src/app/main/configs/loader';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends URLLoader implements OnInit {

  model: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { super() }

  ngOnInit() {
    sessionStorage.setItem('token', '');

  }

  login() {
    /* let url = 'http://localhost:8080/user/login';
 
     let result = this.http.post(url, {
       username: this.model.username,
       password: this.model.password
     }).subscribe(isValid => {
       if (isValid) {
         sessionStorage.setItem(
           'token',
           btoa(this.model.username + ':' + this.model.password)
         );
         this.router.navigate(['/dashboard']);
       } else {
         alert("Authentication failed.");
       }
     });*/
  }

}
