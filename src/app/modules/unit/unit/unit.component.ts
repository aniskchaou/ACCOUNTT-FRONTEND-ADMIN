import { Component, OnInit } from '@angular/core';
import Constant from 'src/app/main/configs/const';
import { URLLoader } from 'src/app/main/configs/loader';
import UnitMessage from 'src/app/main/messages/UnitMessage';
import { UnitTestService } from 'src/app/main/mocks/UnitTestService';
import { HTTPService } from 'src/app/main/services/http.service';
import { JsonService } from 'src/app/main/services/json.service';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent extends URLLoader implements OnInit {

  id = 0
  units$
  fields
  viewPrivilege: boolean
  editPrivilege: boolean
  removePrivilege: boolean
  createPrivilege: boolean

  constructor(private httpService: HTTPService,
    private jsonService: JsonService,
    private unitTestService: UnitTestService,
    private msg: UnitMessage) { super() }


  setId(id) {
    this.id = id
  }

  getPrivileges() {
    this.viewPrivilege = this.getUserRole().unit_view
    this.editPrivilege = this.getUserRole().unit_edit
    this.removePrivilege = this.getUserRole().unit_delete
    this.createPrivilege = this.getUserRole().unit_create
  }

  getFields(language) {
    switch (language) {
      case 'fr':
        this.getFieldsJSON(URLS.FIELDS_UNITS_TABLE_FR)
        break;

      case 'en':
        this.getFieldsJSON(URLS.FIELDS_UNITS_TABLE_EN)

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
    this.unitTestService.ID.next(id)
  }

  view(id) {
    this.setId(id)
    this.unitTestService.ID.next(id)
  }

  delete(id) {
    var r = confirm("Voulez-vous supprimer cet enregistrement ?");
    if (r) {
      this.setId(id)
      this.unitTestService.remove(this.unitTestService.get(id))
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
    this.units$ = this.unitTestService.getAll()
  }

  getAll() {


    this.httpService.getAll().subscribe(
      data => {
        this.units$ = data;
      },
      error => {
        super.show('Error', error.message, 'warning')
      }
    )
  }
}
