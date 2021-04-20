import { Component, OnInit } from '@angular/core';
import Constant from 'src/app/main/configs/const';
import { URLLoader } from 'src/app/main/configs/loader';
import UserMessage from 'src/app/main/messages/UserMessage';
import { UserTestService } from 'src/app/main/mocks/UserTestService';
import { JsonService } from 'src/app/main/services/json.service';

import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent extends URLLoader implements OnInit {



  fields
  id = 0
  users$
  viewPrivilege: boolean
  editPrivilege: boolean
  removePrivilege: boolean
  createPrivilege: boolean

  constructor(private jsonService: JsonService,
    private userTestService: UserTestService,
    private msg: UserMessage) {
    super()
  }
  setId(id) {
    this.id = id
  }

  getPrivileges() {
    this.viewPrivilege = this.getUserRole().user_view
    this.editPrivilege = this.getUserRole().user_edit
    this.removePrivilege = this.getUserRole().user_delete
    this.createPrivilege = this.getUserRole().user_create
  }

  getFields(language) {
    switch (language) {
      case 'fr':
        this.getFieldsJSON(URLS.FIELDS_USERS_TABLE_FR)
        break;

      case 'en':
        this.getFieldsJSON(URLS.FIELDS_USERS_TABLE_EN)

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
    this.userTestService.ID.next(id)
  }

  view(id) {
    this.setId(id)
    this.userTestService.ID.next(id)
  }

  delete(id) {
    var r = confirm("Voulez-vous supprimer cet enregistrement ?");
    if (r) {
      this.setId(id)
      this.userTestService.remove(this.userTestService.get(id))
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
    //this.httpService.setURL(URLS.URL_BASE + URLS.URL_PRODUCTS)
    //this.getAll()
    this.getAllMock()
    this.getPrivileges()
  }

  getAllMock() {
    this.users$ = this.userTestService.getAll()
  }

  getAll() {


    /*  this.httpService.getAll().subscribe(
        data => {
          this.users$ = data;
        },
        error => {
          super.show('Error', error.message, 'warning')
        }
      )
     */
  }

}
