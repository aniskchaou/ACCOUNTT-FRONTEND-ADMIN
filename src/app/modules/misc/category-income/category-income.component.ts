import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/loader';

@Component({
  selector: 'app-category-income',
  templateUrl: './category-income.component.html',
  styleUrls: ['./category-income.component.css']
})
export class CategoryIncomeComponent extends URLLoader implements OnInit {

  constructor() { super() }

  ngOnInit(): void {
    super.loadScripts()
  }

}
