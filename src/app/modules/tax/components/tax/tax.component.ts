import { Component, OnInit } from '@angular/core';
import Constant from 'src/app/main/configs/const';
import { URLLoader } from 'src/app/main/configs/loader';
import TaxMessage from 'src/app/main/messages/TaxMessage';
import TaxTestService from 'src/app/main/mocks/TaxTestService';
import { HTTPService } from 'src/app/main/services/http.service';
import { JsonService } from 'src/app/main/services/json.service';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent extends URLLoader implements OnInit {

  showsummary: boolean = false
  showgraphic: boolean = false

  taxs$
  id = 0


  constructor(private taxTestService: TaxTestService,
    private messageService: TaxMessage,
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
    this.viewPrivilege = this.getUserRole().tax_view
    this.editPrivilege = this.getUserRole().tax_edit
    this.removePrivilege = this.getUserRole().tax_delete
    this.createPrivilege = this.getUserRole().tax_create
  }

  getFields(language) {
    switch (language) {
      case 'fr':
        this.getFieldsJSON(URLS.FIELDS_TAXES_TABLE_FR)
        break;

      case 'en':
        this.getFieldsJSON(URLS.FIELDS_TAXES_TABLE_EN)

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
    this.taxTestService.ID.next(id)
  }

  view(id) {
    this.setId(id)
    this.taxTestService.ID.next(id)
  }

  delete(id) {
    var r = confirm("Voulez-vous supprimer cet enregistrement ?");
    if (r) {
      this.setId(id)
      this.taxTestService.remove(this.taxTestService.get(id))
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
    this.taxs$ = this.taxTestService.getAll()
  }

  getAll() {


    this.httpService.getAll().subscribe(
      data => {
        this.taxs$ = data;
      },
      error => {
        super.show('Error', error.message, 'warning')
      }
    )
  }
}
