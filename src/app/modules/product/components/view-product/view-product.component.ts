import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ProductTestService from 'src/app/main/mocks/ProductTestService';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  product
  constructor(private _router: Router, private productTestService: ProductTestService) { }

  ngOnInit(): void {

    this.productTestService.ID.subscribe(id => {
      this.product = this.productTestService.get(parseInt(id))
    })
  }

}
