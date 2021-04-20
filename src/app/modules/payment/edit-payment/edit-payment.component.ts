import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/loader';
import PaymentMessage from 'src/app/main/messages/TaxMessage';
import { PaymentTestService } from 'src/app/main/mocks/PaymentTestService';
import Payment from 'src/app/main/models/Payment';

@Component({
  selector: 'app-edit-payment',
  templateUrl: './edit-payment.component.html',
  styleUrls: ['./edit-payment.component.css']
})
export class EditPaymentComponent extends URLLoader implements OnInit {

  model: Payment


  constructor(private paymentTestService: PaymentTestService,
    private message: PaymentMessage) {
    super()
    this.model = this.create()
  }


  create() {
    return new Payment(0, '', '', '', '', '', '', '')
  }

  ngOnInit(): void {

    this.paymentTestService.ID.subscribe(idd => {
      /* this.model = this.paymentTestService.get(parseInt(idd))
       if (this.model == undefined) {
         this.model = this.model = this.create()
       }*/
    })
  }

  edit() {
    this.paymentTestService.update(this.model)
    super.show('Confirmation', this.message.confirmationMessages.edit, 'success')
  }



}
