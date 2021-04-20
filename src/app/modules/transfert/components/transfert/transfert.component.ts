import { Component, OnInit } from '@angular/core';
import Constant from 'src/app/main/configs/const';
import { URLLoader } from 'src/app/main/configs/loader';
import TransfertMessage from 'src/app/main/messages/TransfertMessage';
import { TransfertTestService } from 'src/app/main/mocks/TransfertTestService';
import { HTTPService } from 'src/app/main/services/http.service';
import { JsonService } from 'src/app/main/services/json.service';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-transfert',
  templateUrl: './transfert.component.html',
  styleUrls: ['./transfert.component.css']
})
export class TransfertComponent extends URLLoader implements OnInit {

  id = 0
  fields
  transferts$
  viewPrivilege: boolean
  editPrivilege: boolean
  removePrivilege: boolean
  createPrivilege: boolean

  constructor(private jsonService: JsonService,
    private transfertTestService: TransfertTestService,
    private httpService: HTTPService,
    private msg: TransfertMessage) {
    super()
  }
  setId(id) {
    this.id = id
  }

  getPrivileges() {
    this.viewPrivilege = this.getUserRole().transfert_view
    this.editPrivilege = this.getUserRole().transfert_edit
    this.removePrivilege = this.getUserRole().transfert_delete
    this.createPrivilege = this.getUserRole().transfert_create
  }

  getFields(language) {
    switch (language) {
      case 'fr':
        this.getFieldsJSON(URLS.FIELDS_TRANSFERTS_TABLE_FR)
        break;

      case 'en':
        this.getFieldsJSON(URLS.FIELDS_TRANSFERTS_TABLE_EN)

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
    this.transfertTestService.ID.next(id)
  }

  view(id) {
    this.setId(id)
    this.transfertTestService.ID.next(id)
  }

  delete(id) {
    var r = confirm("Voulez-vous supprimer cet enregistrement ?");
    if (r) {
      this.setId(id)
      this.transfertTestService.remove(this.transfertTestService.get(id))
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
    this.transferts$ = this.transfertTestService.getAll()
  }

  getAll() {


    this.httpService.getAll().subscribe(
      data => {
        this.transferts$ = data;
      },
      error => {
        super.show('Error', error.message, 'warning')
      }
    )
  }

}
