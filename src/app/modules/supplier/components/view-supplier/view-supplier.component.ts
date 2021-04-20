import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import SupplierTestService from 'src/app/main/mocks/SupplierTestService';

@Component({
  selector: 'app-view-supplier',
  templateUrl: './view-supplier.component.html',
  styleUrls: ['./view-supplier.component.css']
})
export class ViewSupplierComponent implements OnInit {

  supplier
  constructor(private _router: Router,
    private supplierTestService: SupplierTestService) { }

  ngOnInit(): void {

    this.supplierTestService.ID.subscribe(id => {
      this.supplier = this.supplierTestService.get(parseInt(id))
    })
  }

}
