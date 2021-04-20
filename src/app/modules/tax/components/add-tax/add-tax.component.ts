import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/loader';
import TaxMessage from 'src/app/main/messages/TaxMessage';
import TaxTestService from 'src/app/main/mocks/TaxTestService';
import TaxValidation from 'src/app/main/validations/TaxValidation copy';

@Component({
  selector: 'app-add-tax',
  templateUrl: './add-tax.component.html',
  styleUrls: ['./add-tax.component.css']
})
export class AddTaxComponent extends URLLoader implements OnInit {

  taxForm: FormGroup
  msg: TaxMessage
  submitted = false


  get f() { return this.taxForm.controls; }

  constructor(private validation: TaxValidation, private message: TaxMessage,
    private taxTestService: TaxTestService) {
    super()
    this.taxForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
  }

  reset() {
    this.taxForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.taxTestService.create(this.taxForm.value)
      super.show('Confirmation', this.msg.confirmationMessages.add, 'success')

    }



  }

}
