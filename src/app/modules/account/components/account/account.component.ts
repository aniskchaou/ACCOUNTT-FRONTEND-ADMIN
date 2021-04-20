import { Component, OnInit } from '@angular/core';
import Constant from 'src/app/main/configs/const';
import { URLLoader } from 'src/app/main/configs/loader';
import AccountMessage from 'src/app/main/messages/AccountMessage';
import AccountTestService from 'src/app/main/mocks/AccountTestService';
import { HTTPService } from 'src/app/main/services/http.service';
import { JsonService } from 'src/app/main/services/json.service';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent extends URLLoader implements OnInit {


  accounts$
  id = 0


  constructor(private accountTestService: AccountTestService,
    private messageService: AccountMessage,
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
    this.viewPrivilege = this.getUserRole().account_view
    this.editPrivilege = this.getUserRole().account_edit
    this.removePrivilege = this.getUserRole().account_delete
    this.createPrivilege = this.getUserRole().account_create
  }

  getFields(language) {
    switch (language) {
      case 'fr':
        this.getFieldsJSON(URLS.FIELDS_ACCOUNTS_TABLE_FR)
        break;

      case 'en':
        this.getFieldsJSON(URLS.FIELDS_ACCOUNTS_TABLE_EN)

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
    this.accountTestService.ID.next(id)
  }

  view(id) {
    this.setId(id)
    this.accountTestService.ID.next(id)
  }

  delete(id) {
    var r = confirm("Voulez-vous supprimer cet enregistrement ?");
    if (r) {
      this.setId(id)
      this.accountTestService.remove(this.accountTestService.get(id))
      this.getAllAccountMock()
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
    this.getAllAccountMock()
    this.getPrivileges()
  }

  getAllAccountMock() {
    this.accounts$ = this.accountTestService.getAll()
  }

  getAllAccounts() {
    this.httpService.getAll().subscribe(
      data => {
        this.accounts$ = data;
      },
      error => {
        super.show('Error', error.message, 'warning')
      }
    )
  }
}
