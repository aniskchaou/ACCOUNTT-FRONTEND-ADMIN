import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/loader';
import InvoiceMessage from 'src/app/main/messages/BillMessage';
import { InvoiceTestService } from 'src/app/main/mocks/InvoiceTestService';
import Invoice from 'src/app/main/models/Invoice';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.css']
})
export class EditInvoiceComponent extends URLLoader implements OnInit {

  model: Invoice


  constructor(private invoiceTestService: InvoiceTestService,
    private message: InvoiceMessage) {
    super()
    this.model = this.create()
  }


  create() {
    return new Invoice(0, '', '', '', '', '', '', '')
  }

  ngOnInit(): void {

    this.invoiceTestService.ID.subscribe(idd => {

      /*  this.model = this.invoiceTestService.get(parseInt(idd))
        if (this.model == undefined) {
          this.model = this.model = this.create()
        }*/
    })
  }

  edit() {
    this.invoiceTestService.update(this.model)
    super.show('Confirmation', this.message.confirmationMessages.edit, 'success')
  }



}
