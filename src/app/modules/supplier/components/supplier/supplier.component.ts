import { Component, OnInit } from '@angular/core';
import Constant from 'src/app/main/configs/const';
import { URLLoader } from 'src/app/main/configs/loader';
import SupplierMessage from 'src/app/main/messages/SupplierMessage';
import SupplierTestService from 'src/app/main/mocks/SupplierTestService';
import { HTTPService } from 'src/app/main/services/http.service';
import { JsonService } from 'src/app/main/services/json.service';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent extends URLLoader implements OnInit {

  suppliers$
  id = 0


  constructor(private supplierTestService: SupplierTestService,
    private messageService: SupplierMessage,
    private jsonService: JsonService,
    private httpService: HTTPService) {
    super()

  }

  fields
  viewPrivilege: boolean
  editPrivilege: boolean
  removePrivilege: boolean
  createPrivilege: boolean

  setId(id) {
    this.id = id
  }

  getPrivileges() {
    this.viewPrivilege = this.getUserRole().supplier_view
    this.editPrivilege = this.getUserRole().supplier_edit
    this.removePrivilege = this.getUserRole().supplier_delete
    this.createPrivilege = this.getUserRole().supplier_create
  }

  getFields(language) {
    switch (language) {
      case 'fr':
        this.getFieldsJSON(URLS.FIELDS_SUPPLIERS_TABLE_FR)
        break;

      case 'en':
        this.getFieldsJSON(URLS.FIELDS_SUPPLIERS_TABLE_EN)

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
    this.supplierTestService.ID.next(id)
  }

  view(id) {
    this.setId(id)
    this.supplierTestService.ID.next(id)
  }

  addInvoice(id) {
    this.setId(id)
    this.supplierTestService.ID.next(id)
  }

  delete(id) {
    var r = confirm("Voulez-vous supprimer cet enregistrement ?");
    if (r) {
      this.setId(id)
      this.supplierTestService.remove(this.supplierTestService.get(id))
      // this.httpService.remove(parseInt(id))
      this.getAllMock()
      super.show('Confirmation', this.messageService.confirmationMessages.delete, 'success')
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
    this.suppliers$ = this.supplierTestService.getAll()
  }

  getAll() {


    this.httpService.getAll().subscribe(
      data => {
        this.suppliers$ = data;
      },
      error => {
        super.show('Error', error.message, 'warning')
      }
    )
  }
}
