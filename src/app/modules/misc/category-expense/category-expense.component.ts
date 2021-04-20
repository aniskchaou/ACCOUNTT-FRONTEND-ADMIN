import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/loader';

@Component({
  selector: 'app-category-expense',
  templateUrl: './category-expense.component.html',
  styleUrls: ['./category-expense.component.css']
})
export class CategoryExpenseComponent extends URLLoader implements OnInit {

  constructor() { super() }

  ngOnInit(): void {
    super.loadScripts()
  }

}
