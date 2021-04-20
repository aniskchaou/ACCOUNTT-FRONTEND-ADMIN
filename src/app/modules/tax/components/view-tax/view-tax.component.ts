import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import TaxTestService from 'src/app/main/mocks/TaxTestService';

@Component({
  selector: 'app-view-tax',
  templateUrl: './view-tax.component.html',
  styleUrls: ['./view-tax.component.css']
})
export class ViewTaxComponent implements OnInit {

  tax
  constructor(private _router: Router, private taxTestService: TaxTestService) { }

  ngOnInit(): void {

    this.taxTestService.ID.subscribe(id => {
      this.tax = this.taxTestService.get(parseInt(id))
    })
  }

}
