import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ProductMessage from 'src/app/main/messages/ProductMessage';
import ProductTestService from 'src/app/main/mocks/ProductTestService';

import { URLLoader } from 'src/app/main/configs/loader';
import URLS from 'src/app/main/urls/urls';
import { JsonService } from 'src/app/main/services/json.service';
import Constant from 'src/app/main/configs/const';
import { HTTPService } from 'src/app/main/services/http.service';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent extends URLLoader implements OnInit {


  products$
  id = 1
  msg: ProductMessage

  fields
  viewPrivilege: boolean
  editPrivilege: boolean
  removePrivilege: boolean
  createPrivilege: boolean

  constructor(private _router: Router,
    private httpService: HTTPService,
    private productTestService: ProductTestService,
    private messageService: ProductMessage,
    private jsonService: JsonService) {
    super()
    this.msg = this.messageService

  }

  setId(id) {
    this.id = id
  }

  getPrivileges() {
    this.viewPrivilege = this.getUserRole().product_view
    this.editPrivilege = this.getUserRole().product_edit
    this.removePrivilege = this.getUserRole().product_delete
    this.createPrivilege = this.getUserRole().product_create
  }

  getFields(language) {
    switch (language) {
      case 'fr':
        this.getFieldsJSON(URLS.FIELDS_PRODUCTS_TABLE_FR)
        break;

      case 'en':
        this.getFieldsJSON(URLS.FIELDS_PRODUCTS_TABLE_EN)

        break;

      default:
        this.getFieldsJSON(URLS.FIELDS_PRODUCTS_TABLE_FR)
        break;
    }

  }

  getFieldsJSON(url) {
    this.jsonService.getJSON(url).subscribe(data => {
      this.fields = data
    })
  }

  edit(id) {
    this.setId(id)
    this.productTestService.ID.next(id)
  }

  view(id) {
    this.setId(id)
    this.productTestService.ID.next(id)
  }

  delete(id) {
    var r = confirm("Voulez-vous supprimer cet enregistrement ?");
    if (r) {
      this.setId(id)
      this.productTestService.remove(this.productTestService.get(id))
      // this.httpService.remove(parseInt(id))
      this.getAllMock()
      super.show('Confirmation', this.msg.confirmationMessages.delete, 'success')
    }
  }


  reload() {
    this.ngOnInit();
  }

  ngOnInit() {
    this.getFields(Constant.USER_LANGUAGE)
    super.loadScripts()
    this.httpService.setURL(URLS.URL_BASE + URLS.URL_PRODUCTS)
    //this.getAll()
    this.getAllMock()
    this.getPrivileges()
  }

  getAllMock() {
    this.products$ = this.productTestService.getAll()
  }

  getAll() {


    this.httpService.getAll().subscribe(
      data => {
        this.products$ = data;
      },
      error => {
        super.show('Error', error.message, 'warning')
      }
    )
  }
}
