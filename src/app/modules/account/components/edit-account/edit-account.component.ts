import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/loader';
import AccountMessage from 'src/app/main/messages/AccountMessage';
import AccountTestService from 'src/app/main/mocks/AccountTestService';
import Account from 'src/app/main/models/Account';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent extends URLLoader implements OnInit {

  model: Account


  constructor(private productTestService: AccountTestService,
    private message: AccountMessage) {
    super()
    this.model = this.create()
  }


  create() {
    return new Account(0, '', '', '', '', '')
  }

  ngOnInit(): void {

    this.productTestService.ID.subscribe(idd => {

      this.model = this.productTestService.get(parseInt(idd))
      if (this.model == undefined) {
        this.model = this.model = this.create()
      }
    })
  }

  edit() {
    this.productTestService.update(this.model)
    super.show('Confirmation', this.message.confirmationMessages.edit, 'success')
  }



}
