import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/loader';
import UnitMessage from 'src/app/main/messages/UnitMessage';
import { UnitTestService } from 'src/app/main/mocks/UnitTestService';
import Unit from 'src/app/main/models/Unit';

@Component({
  selector: 'app-edit-unit',
  templateUrl: './edit-unit.component.html',
  styleUrls: ['./edit-unit.component.css']
})
export class EditUnitComponent extends URLLoader implements OnInit {

  model: Unit


  constructor(private productTestService: UnitTestService,
    private message: UnitMessage) {
    super()
    this.model = this.create()
  }


  create() {
    return new Unit(0, '')
  }

  ngOnInit(): void {

    this.productTestService.ID.subscribe(idd => {

      /* this.model = this.productTestService.get(parseInt(idd))
       if (this.model == undefined) {
         this.model = this.model = this.create()
       }*/
    })
  }

  edit() {
    this.productTestService.update(this.model)
    super.show('Confirmation', this.message.confirmationMessages.edit, 'success')
  }



}
