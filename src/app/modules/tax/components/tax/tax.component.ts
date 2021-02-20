import { Component, OnInit } from '@angular/core';
import TaxMessage from 'src/app/main/messages/TaxMessage';
import TaxTestService from 'src/app/main/mocks/TaxTestService';
import { URLLoader } from './../../../../configs/URLLoader';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent extends URLLoader implements OnInit {

  showsummary: boolean = false
  showgraphic: boolean = false

  taxs$
  id = 0


  constructor(private taxTestService: TaxTestService, private messageService: TaxMessage) {
    super()

  }

  setId(id) {
    this.id = id
  }

  edit(id) {
    this.setId(id)
    this.taxTestService.ID.next(id.toString())
  }

  delete(id) {
    var r = confirm("Voulez-vous supprimer cet enregistrement ?");
    if (r) {
      this.setId(id)
      this.taxTestService.remove(parseInt(id))
      super.show('Confirmation', this.messageService.confirmationMessages.delete, 'success')
    }

  }

  ngOnInit() {
    super.loadScripts();
    this.getAll()
  }

  getAll() {
    this.taxs$ = this.taxTestService.getAll()

  }
}
