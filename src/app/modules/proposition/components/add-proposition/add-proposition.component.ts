import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { URLLoader } from 'src/app/main/configs/loader';
import PropositionMessage from 'src/app/main/messages/PropositionMessage';
import PropositionTestService from 'src/app/main/mocks/PropositionTestService';
import { HTTPService } from 'src/app/main/services/http.service';


import PropositionValidation from 'src/app/main/validations/PropositionValidation';

@Component({
  selector: 'app-add-proposition',
  templateUrl: './add-proposition.component.html',
  styleUrls: ['./add-proposition.component.css']
})
export class AddPropositionComponent extends URLLoader implements OnInit {

  propositionForm: FormGroup
  msg: PropositionMessage
  submitted = false


  get f() { return this.propositionForm.controls; }

  constructor(private httpService: HTTPService,
    private validation: PropositionValidation,
    private message: PropositionMessage,
    private propositionTestService: PropositionTestService) {
    super()
    this.propositionForm = this.validation.formGroupInstance
    this.msg = this.message

  }

  ngOnInit(): void {
  }

  reset() {
    this.propositionForm.reset()
  }

  add() {
    this.submitted = true;

    if (this.validation.checkValidation()) {
      this.httpService.create(this.propositionForm.value)
      super.show('Confirmation', this.msg.confirmationMessages.add, 'success')
    }
  }

  addMockTest() {
    this.propositionTestService.create(this.propositionForm.value)
  }

}
