import { Component, OnInit } from '@angular/core';
import SupplierTestService from 'src/app/main/mocks/SupplierTestService';
import OrderProduct from 'src/app/main/models/OrderProduct';
import { InvoicesService } from 'src/app/modules/client/services/invoices.service';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.css']
})
export class AddBillComponent implements OnInit {

  productList = ["product 1", "product 2"]
  total = 0
  totalTax = 0.0
  productArray: Array<OrderProduct> = [];
  newProduct: any = { Id: "0", qte: " ", price: " " };
  model
  constructor(private invoicesService: InvoicesService, private supplierTestService: SupplierTestService) { }
  ngOnInit(): void {
    this.newProduct = { Id: "0", qte: "0", price: "0" };
    this.productArray.push(this.newProduct);

    this.supplierTestService.ID.subscribe(idd => {

      this.model = this.supplierTestService.get(parseInt(idd))
    })

  }






  addProduct() {

    this.newProduct = { Id: "0", qte: " ", price: " " };

    this.productArray.push(this.newProduct);

    this.productArray.forEach(element => {


      if (element.qte != " " && element.price != " ") {
        let qte = parseInt(element.qte)
        let price = parseInt(element.price)

        this.invoicesService.total.next(qte * price + this.total)
        this.totalTax = this.total * 0.20
        console.log(this.totalTax)
      }

      // I can see all entered data in console
      this.invoicesService.total.subscribe(data => {
        // console.log(data)
        this.total = data
      })
    });
    return true;
  }

  deleteProduct(index) {
    if (this.productArray.length == 1) {
      alert("At least one Notification Required for an Inspection");
      return false;
    } else {
      this.productArray.splice(index, 1);
      return true;
    }
  }




}
