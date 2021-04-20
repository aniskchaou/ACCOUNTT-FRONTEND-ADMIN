import { Component, OnInit } from '@angular/core';
import Constant from 'src/app/main/configs/const';
import { URLLoader } from 'src/app/main/configs/loader';
import ClientMessage from 'src/app/main/messages/ClientMessage';
import ClientTestService from 'src/app/main/mocks/ClientTestService';
import { HTTPService } from 'src/app/main/services/http.service';
import { JsonService } from 'src/app/main/services/json.service';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent extends URLLoader implements OnInit {

  clients$
  id = 0


  constructor(private clientTestService: ClientTestService,
    private messageService: ClientMessage,
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
    this.viewPrivilege = this.getUserRole().client_view
    this.editPrivilege = this.getUserRole().client_edit
    this.removePrivilege = this.getUserRole().client_delete
    this.createPrivilege = this.getUserRole().client_create
  }

  getFields(language) {
    switch (language) {
      case 'fr':
        this.getFieldsJSON(URLS.FIELDS_CLIENTS_TABLE_FR)
        break;

      case 'en':
        this.getFieldsJSON(URLS.FIELDS_CLIENTS_TABLE_EN)

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
    this.clientTestService.ID.next(id)
  }

  view(id) {
    this.setId(id)
    this.clientTestService.ID.next(id)
  }

  addProposition(id) {
    this.setId(id)
    this.clientTestService.ID.next(id)
  }

  addInvoice(id) {
    this.setId(id)
    this.clientTestService.ID.next(id)
  }

  delete(id) {
    var r = confirm("Voulez-vous supprimer cet enregistrement ?");
    if (r) {
      this.setId(id)
      this.clientTestService.remove(this.clientTestService.get(id))
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
    this.clients$ = this.clientTestService.getAll()
  }

  getAll() {


    this.httpService.getAll().subscribe(
      data => {
        this.clients$ = data;
      },
      error => {
        super.show('Error', error.message, 'warning')
      }
    )
  }
}
