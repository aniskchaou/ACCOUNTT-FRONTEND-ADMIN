import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/loader';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent extends URLLoader implements OnInit {

  constructor() { super() }

  ngOnInit(): void {
    super.loadScripts()
  }

}
