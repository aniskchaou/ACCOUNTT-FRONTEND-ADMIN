import { Component, OnInit } from '@angular/core';
import Constant from 'src/app/main/configs/const';
import { URLLoader } from 'src/app/main/configs/loader';
import InvoiceMessage from 'src/app/main/messages/BillMessage';
import { InvoiceTestService } from 'src/app/main/mocks/InvoiceTestService';
import { HTTPService } from 'src/app/main/services/http.service';
import { JsonService } from 'src/app/main/services/json.service';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent extends URLLoader implements OnInit {


  id = 0
  fields
  viewPrivilege: boolean
  editPrivilege: boolean
  removePrivilege: boolean
  createPrivilege: boolean
  invoices$


  constructor(private invoiceTestService: InvoiceTestService,
    private httpService: HTTPService,
    private msg: InvoiceMessage,
    private jsonService: JsonService) {
    super()
  }
  setId(id) {
    this.id = id
  }

  getPrivileges() {
    this.viewPrivilege = this.getUserRole().invoice_view
    this.editPrivilege = this.getUserRole().invoice_edit
    this.removePrivilege = this.getUserRole().invoice_delete
    this.createPrivilege = this.getUserRole().invoice_create
  }

  getFields(language) {
    switch (language) {
      case 'fr':
        this.getFieldsJSON(URLS.FIELDS_INVOICES_TABLE_FR)
        break;

      case 'en':
        this.getFieldsJSON(URLS.FIELDS_INVOICES_TABLE_EN)

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
    this.invoiceTestService.ID.next(id)
  }

  view(id) {
    this.setId(id)
    this.invoiceTestService.ID.next(id)
  }

  delete(id) {
    var r = confirm("Voulez-vous supprimer cet enregistrement ?");
    if (r) {
      this.setId(id)
      this.invoiceTestService.remove(this.invoiceTestService.get(id))
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
    this.invoices$ = this.invoiceTestService.getAll()
  }

  getAll() {


    this.httpService.getAll().subscribe(
      data => {
        this.invoices$ = data;
      },
      error => {
        super.show('Error', error.message, 'warning')
      }
    )
  }

}
