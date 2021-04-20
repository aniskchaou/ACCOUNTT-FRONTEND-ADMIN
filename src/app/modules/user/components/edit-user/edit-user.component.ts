import { Component, OnInit } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/loader';
import UserMessage from 'src/app/main/messages/UserMessage';
import { UserTestService } from 'src/app/main/mocks/UserTestService';
import User from 'src/app/main/models/User';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent extends URLLoader implements OnInit {

  model: User


  constructor(private userTestService: UserTestService,
    private message: UserMessage) {
    super()
    this.model = this.create()
  }


  create() {
    return new User(0, '', '', '', '')
  }

  ngOnInit(): void {

    this.userTestService.ID.subscribe(idd => {

      /*  this.model = this.userTestService.get(parseInt(idd))
        if (this.model == undefined) {
          this.model = this.model = this.create()
        }*/
    })
  }

  edit() {
    this.userTestService.update(this.model)
    super.show('Confirmation', this.message.confirmationMessages.edit, 'success')
  }



}
