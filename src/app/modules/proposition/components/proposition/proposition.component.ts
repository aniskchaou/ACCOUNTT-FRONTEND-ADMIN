import { Component, OnInit } from '@angular/core';
import PropositionMessage from 'src/app/main/messages/PropositionMessage';
import PropositionTestService from 'src/app/main/mocks/PropositionTestService';
import { URLLoader } from './../../../../configs/URLLoader';

@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrls: ['./proposition.component.css']
})
export class PropositionComponent extends URLLoader implements OnInit {

  showsummary: boolean = false
  showgraphic: boolean = false

  propositions$
  id = 0


  constructor(private propositionTestService: PropositionTestService,
    private messageService: PropositionMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.propositionTestService.ID.next(id.toString())
  }

  delete(id) {
    var r = confirm("Voulez-vous supprimer cet enregistrement ?");
    if (r) {
      this.setId(id)
      this.propositionTestService.remove(parseInt(id))
      super.show('Confirmation', this.messageService.confirmationMessages.delete, 'success')
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
    this.propositions$ = this.propositionTestService.getAll()

  }

}
