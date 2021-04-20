import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserTestService } from 'src/app/main/mocks/UserTestService';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  user
  constructor(private _router: Router, private userTestService: UserTestService) { }

  ngOnInit(): void {

    this.userTestService.ID.subscribe(id => {
      this.user = this.userTestService.get(parseInt(id))
    })
  }

}
