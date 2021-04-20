import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import RevenueTestService from 'src/app/main/mocks/RevenueTestService';

@Component({
  selector: 'app-view-revenue',
  templateUrl: './view-revenue.component.html',
  styleUrls: ['./view-revenue.component.css']
})
export class ViewRevenueComponent implements OnInit {

  revenue
  constructor(private _router: Router, private revenueTestService: RevenueTestService) { }

  ngOnInit(): void {

    this.revenueTestService.ID.subscribe(id => {
      this.revenue = this.revenueTestService.get(parseInt(id))
    })
  }

}
