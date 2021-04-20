import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/loader';
import BillMessage from 'src/app/main/messages/BillMessage';
import { BillTestService } from 'src/app/main/mocks/BillTestService';

import Bill from 'src/app/main/models/Bill';

@Component({
  selector: 'app-edit-bill',
  templateUrl: './edit-bill.component.html',
  styleUrls: ['./edit-bill.component.css']
})
export class EditBillComponent extends URLLoader implements OnInit {

  model: Bill


  constructor(private billTestService: BillTestService,
    private message: BillMessage) {
    super()
    this.model = this.create()
  }


  create() {
    return new Bill(0, '', '', '', '', '', '')
  }

  ngOnInit(): void {

    this.billTestService.ID.subscribe(idd => {

      /* this.model = this.billTestService.get(parseInt(idd))
       if (this.model == undefined) {
         this.model = this.model = this.create()
       }*/
    })
  }

  edit() {
    this.billTestService.update(this.model)
    super.show('Confirmation', this.message.confirmationMessages.edit, 'success')
  }

}
