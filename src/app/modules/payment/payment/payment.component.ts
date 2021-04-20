import { Component, OnInit } from '@angular/core';
import Constant from 'src/app/main/configs/const';
import { URLLoader } from 'src/app/main/configs/loader';
import PaymentMessage from 'src/app/main/messages/PaymentMessage';
import { PaymentTestService } from 'src/app/main/mocks/PaymentTestService';
import { HTTPService } from 'src/app/main/services/http.service';
import { JsonService } from 'src/app/main/services/json.service';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent extends URLLoader implements OnInit {

  id = 0
  fields
  viewPrivilege: boolean
  editPrivilege: boolean
  removePrivilege: boolean
  createPrivilege: boolean
  payments$

  constructor(private jsonService: JsonService,
    private paymentTestService: PaymentTestService,
    private msg: PaymentMessage,
    private httpService: HTTPService) {
    super()
  }
  setId(id) {
    this.id = id
  }

  getPrivileges() {
    this.viewPrivilege = this.getUserRole().payment_view
    this.editPrivilege = this.getUserRole().payment_edit
    this.removePrivilege = this.getUserRole().payment_delete
    this.createPrivilege = this.getUserRole().payment_create
  }

  getFields(language) {
    switch (language) {
      case 'fr':
        this.getFieldsJSON(URLS.FIELDS_PAYMENTS_TABLE_FR)
        break;

      case 'en':
        this.getFieldsJSON(URLS.FIELDS_PAYMENTS_TABLE_EN)

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
    this.paymentTestService.ID.next(id)
  }

  view(id) {
    this.setId(id)
    this.paymentTestService.ID.next(id)
  }

  delete(id) {
    var r = confirm("Voulez-vous supprimer cet enregistrement ?");
    if (r) {
      this.setId(id)
      this.paymentTestService.remove(this.paymentTestService.get(id))
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
    this.payments$ = this.paymentTestService.getAll()
  }

  getAll() {


    this.httpService.getAll().subscribe(
      data => {
        this.payments$ = data;
      },
      error => {
        super.show('Error', error.message, 'warning')
      }
    )
  }

}
