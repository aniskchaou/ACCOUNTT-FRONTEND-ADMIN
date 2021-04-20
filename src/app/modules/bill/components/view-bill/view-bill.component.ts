import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillTestService } from 'src/app/main/mocks/BillTestService';

@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrls: ['./view-bill.component.css']
})
export class ViewBillComponent implements OnInit {

  bill
  constructor(private _router: Router, private billTestService: BillTestService) { }

  ngOnInit(): void {

    this.billTestService.ID.subscribe(id => {
      this.bill = this.billTestService.get(parseInt(id))
    })
  }

}
