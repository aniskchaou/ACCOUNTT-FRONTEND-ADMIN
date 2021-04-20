import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AccountTestService from 'src/app/main/mocks/AccountTestService';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent implements OnInit {

  account
  constructor(private _router: Router,
    private accountTestService: AccountTestService) { }

  ngOnInit(): void {
    this.accountTestService.ID.subscribe(id => {
      this.account = this.accountTestService.get(parseInt(id))
    })
  }

}
