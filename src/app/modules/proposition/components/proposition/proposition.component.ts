import { Component, OnInit } from '@angular/core';
import Constant from 'src/app/main/configs/const';
import { URLLoader } from 'src/app/main/configs/loader';
import PropositionMessage from 'src/app/main/messages/PropositionMessage';
import PropositionTestService from 'src/app/main/mocks/PropositionTestService';
import { HTTPService } from 'src/app/main/services/http.service';
import { JsonService } from 'src/app/main/services/json.service';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrls: ['./proposition.component.css']
})
export class PropositionComponent extends URLLoader implements OnInit {

  propositions$
  id = 0


  constructor(private propositionTestService: PropositionTestService,
    private messageService: PropositionMessage,
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
    this.viewPrivilege = this.getUserRole().proposition_view
    this.editPrivilege = this.getUserRole().proposition_edit
    this.removePrivilege = this.getUserRole().proposition_delete
    this.createPrivilege = this.getUserRole().proposition_create
  }

  getFields(language) {
    switch (language) {
      case 'fr':
        this.getFieldsJSON(URLS.FIELDS_PROPOSITIONS_TABLE_FR)
        break;

      case 'en':
        this.getFieldsJSON(URLS.FIELDS_PROPOSITIONS_TABLE_EN)

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
    this.propositionTestService.ID.next(id)
  }

  view(id) {
    this.setId(id)
    this.propositionTestService.ID.next(id)
  }

  delete(id) {
    var r = confirm("Voulez-vous supprimer cet enregistrement ?");
    if (r) {
      this.setId(id)
      this.propositionTestService.remove(this.propositionTestService.get(id))
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
    this.propositions$ = this.propositionTestService.getAll()
  }

  getAll() {


    this.httpService.getAll().subscribe(
      data => {
        this.propositions$ = data;
      },
      error => {
        super.show('Error', error.message, 'warning')
      }
    )
  }



}
