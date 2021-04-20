import { Component, OnInit } from '@angular/core';
import Constant from 'src/app/main/configs/const';
import { URLLoader } from 'src/app/main/configs/loader';
import RevenueMessage from 'src/app/main/messages/RevenueMessage';
import RevenueTestService from 'src/app/main/mocks/RevenueTestService';
import { HTTPService } from 'src/app/main/services/http.service';
import { JsonService } from 'src/app/main/services/json.service';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent extends URLLoader implements OnInit {


  revenues$
  id = 0


  constructor(private revenueTestService: RevenueTestService,
    private messageService: RevenueMessage,
    private httpService: HTTPService,
    private jsonService: JsonService) {
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
    this.viewPrivilege = this.getUserRole().revenue_view
    this.editPrivilege = this.getUserRole().revenue_edit
    this.removePrivilege = this.getUserRole().revenue_delete
    this.createPrivilege = this.getUserRole().revenue_create
  }

  getFields(language) {
    switch (language) {
      case 'fr':
        this.getFieldsJSON(URLS.FIELDS_REVENUES_TABLE_FR)
        break;

      case 'en':
        this.getFieldsJSON(URLS.FIELDS_REVENUES_TABLE_EN)

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
    this.revenueTestService.ID.next(id)
  }

  view(id) {
    this.setId(id)
    this.revenueTestService.ID.next(id)
  }

  delete(id) {
    var r = confirm("Voulez-vous supprimer cet enregistrement ?");
    if (r) {
      this.setId(id)
      this.revenueTestService.remove(this.revenueTestService.get(id))
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
    this.revenues$ = this.revenueTestService.getAll()
  }

  getAll() {


    this.httpService.getAll().subscribe(
      data => {
        this.revenues$ = data;
      },
      error => {
        super.show('Error', error.message, 'warning')
      }
    )
  }
}
