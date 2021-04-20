import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/loader';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent extends URLLoader implements OnInit {

  constructor() { super() }

  ngOnInit(): void {
    super.loadScripts()
  }

}
