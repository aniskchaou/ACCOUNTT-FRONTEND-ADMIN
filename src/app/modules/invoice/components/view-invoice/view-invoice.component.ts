import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { InvoiceTestService } from 'src/app/main/mocks/InvoiceTestService';

@Component({
  selector: 'app-view-invoice',
  templateUrl: './view-invoice.component.html',
  styleUrls: ['./view-invoice.component.css']
})
export class ViewInvoiceComponent implements OnInit {

  invoice
  constructor(private _router: Router,
    private invoiceTestService: InvoiceTestService) { }

  ngOnInit(): void {

    this.invoiceTestService.ID.subscribe(id => {
      this.invoice = this.invoiceTestService.get(parseInt(id))
    })
  }

  @ViewChild('htmlData') htmlData: ElementRef;


  public openPDF(): void {
    let DATA = document.getElementById('htmlData');

    html2canvas(DATA).then(canvas => {

      let fileWidth = 208;
      let fileHeight = 210;

      const FILEURI = canvas.toDataURL('image/png')
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
      PDF.save('invoice.pdf');
    });
  }


  printComponent(cmpName) {
    const printContent = document.getElementById(cmpName);
    const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    WindowPrt.document.write(printContent.innerHTML);
    WindowPrt.document.close();
    WindowPrt.focus();
    WindowPrt.print();

  }

}
