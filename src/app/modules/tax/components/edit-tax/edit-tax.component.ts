import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/loader';
import TaxMessage from 'src/app/main/messages/TaxMessage';
import TaxTestService from 'src/app/main/mocks/TaxTestService';
import Tax from 'src/app/main/models/Tax';

@Component({
  selector: 'app-edit-tax',
  templateUrl: './edit-tax.component.html',
  styleUrls: ['./edit-tax.component.css']
})
export class EditTaxComponent extends URLLoader implements OnInit {

  model: Tax


  constructor(private taxTestService: TaxTestService,
    private message: TaxMessage) {
    super()
    this.model = this.create()
  }


  create() {
    return new Tax(0, '', '')
  }

  ngOnInit(): void {

    this.taxTestService.ID.subscribe(idd => {

      this.model = this.taxTestService.get(parseInt(idd))
      if (this.model == undefined) {
        this.model = this.model = this.create()
      }
    })
  }

  edit() {
    this.taxTestService.update(this.model)
    super.show('Confirmation', this.message.confirmationMessages.edit, 'success')
  }



}
