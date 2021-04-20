import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/loader';
import ProductMessage from 'src/app/main/messages/ProductMessage';
import ProductTestService from 'src/app/main/mocks/ProductTestService';
import { HTTPService } from 'src/app/main/services/http.service';

import URLS from 'src/app/main/urls/urls';
import ProductValidation from 'src/app/main/validations/ProductValidation';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent extends URLLoader implements OnInit {

  productForm: FormGroup
  msg: ProductMessage
  submitted = false


  get f() { return this.productForm.controls; }

  constructor(private httpService: HTTPService, private validation: ProductValidation, private message: ProductMessage,
    private productTestService: ProductTestService) {
    super()
    this.productForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {

    this.httpService.setURL(URLS.URL_BASE + URLS.URL_PRODUCTS)
  }

  reset() {
    this.productForm.reset()
  }


  add() {
    this.submitted = true;
    if (this.validation.checkValidation()) {

      this.addMock()
      super.show('Confirmation', this.msg.confirmationMessages.add, 'success')
    }
  }

  addMock() {
    this.productTestService.create(this.productForm.value)
  }

  addProduct() {
    this.httpService.create(this.productForm.value).then((res) => {
      super.show('Confirmation', this.msg.confirmationMessages.add, 'success')
    }).catch((e) => {
      super.show('Error', e.message, 'warning')
    })
  }
}


