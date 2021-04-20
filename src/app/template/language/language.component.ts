import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Constant from 'src/app/main/configs/const';
import { URLLoader } from 'src/app/main/configs/loader';
@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent extends URLLoader implements OnInit {

  constructor(private _router: Router) { super() }

  ngOnInit(): void {
  }

  setEnglish() {
    Constant.USER_LANGUAGE = 'en'
    this._router.navigate(['/dashboard'])
    super.show("Info", "The system language has been changed.", "info")
  }

  setFrench() {
    Constant.USER_LANGUAGE = 'fr'
    this._router.navigate(['/dashboard'])
    super.show("Info", "La langue de système a été changé.", "info")
  }
}
