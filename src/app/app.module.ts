import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './template/navigation/navigation.component';

import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { UserComponent } from './modules/user/components/user/user.component';
import { RoleComponent } from './modules/revenue/components/role/components/role/role.component';
import { DashboardComponent } from './modules/general/dashboard/dashboard.component';
import { ConfigurationComponent } from './modules/general/configuration/configuration.component';
import { ProductComponent } from './modules/product/components/product/product.component';
import { ClientComponent } from './modules/client/components/client/client.component';
import { SupplierComponent } from './modules/supplier/components/supplier/supplier.component';

import { AccountComponent } from './modules/account/components/account/account.component';
import { TransfertComponent } from './modules/transfert/components/transfert/transfert.component';
import { InvoiceComponent } from './modules/invoice/components/invoice/invoice.component';
import { RevenueComponent } from './modules/revenue/components/revenue/revenue.component';
import { InvoiceeComponent } from './modules/invoicee/components/invoicee/invoicee.component';
import { ObjectiveComponent } from './modules/objective/components/objective/objective.component';
import { TransactionComponent } from './modules/transaction/components/transaction/transaction.component';
import { InstructionComponent } from './modules/instruction/components/instruction/instruction.component';
import { TaxComponent } from './modules/tax/components/tax/tax.component';
import { LoginComponent } from './modules/general/login/login.component';
import { AddClientComponent } from './modules/client/components/add-client/add-client.component';
import { AddAccountComponent } from './modules/account/components/add-account/add-account.component';
import { ViewUserComponent } from './modules/user/components/view-user/view-user.component';
import { ViewTransfertComponent } from './modules/transfert/components/view-transfert/view-transfert.component';
import { ViewTransactionComponent } from './modules/transaction/components/view-transaction/view-transaction.component';
import { ViewTaxComponent } from './modules/tax/components/view-tax/view-tax.component';
import { ViewAccountComponent } from './modules/account/components/view-account/view-account.component';
import { EditAccountComponent } from './modules/account/components/edit-account/edit-account.component';
import { EditClientComponent } from './modules/client/components/edit-client/edit-client.component';
import { ViewClientComponent } from './modules/client/components/view-client/view-client.component';
import { AddInstructionComponent } from './modules/instruction/components/add-instruction/add-instruction.component';
import { EditInstructionComponent } from './modules/instruction/components/edit-instruction/edit-instruction.component';
import { ViewInstructionComponent } from './modules/instruction/components/view-instruction/view-instruction.component';
import { AddInvoiceComponent } from './modules/invoice/components/add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './modules/invoice/components/edit-invoice/edit-invoice.component';
import { ViewInvoiceComponent } from './modules/invoice/components/view-invoice/view-invoice.component';
import { AddInvoiceeComponent } from './modules/invoicee/components/add-invoicee/add-invoicee.component';
import { EditInvoiceeComponent } from './modules/invoicee/components/edit-invoicee/edit-invoicee.component';
import { ViewInvoiceeComponent } from './modules/invoicee/components/view-invoicee/view-invoicee.component';
import { AddObjectiveComponent } from './modules/objective/components/add-objective/add-objective.component';
import { EditObjectiveComponent } from './modules/objective/components/edit-objective/edit-objective.component';
import { ViewObjectiveComponent } from './modules/objective/components/view-objective/view-objective.component';
import { AddProductComponent } from './modules/product/components/add-product/add-product.component';
import { EditProductComponent } from './modules/product/components/edit-product/edit-product.component';
import { ViewProductComponent } from './modules/product/components/view-product/view-product.component';
import { AddPropositionComponent } from './modules/proposition/components/add-proposition/add-proposition.component';
import { EditPropositionComponent } from './modules/proposition/components/edit-proposition/edit-proposition.component';
import { ViewPropositionComponent } from './modules/proposition/components/view-proposition/view-proposition.component';
import { AddRevenueComponent } from './modules/revenue/components/add-revenue/add-revenue.component';
import { EditRevenueComponent } from './modules/revenue/components/edit-revenue/edit-revenue.component';
import { AddRoleComponent } from './modules/revenue/components/role/components/add-role/add-role.component';
import { EditRoleComponent } from './modules/revenue/components/role/components/edit-role/edit-role.component';
import { ViewRoleComponent } from './modules/revenue/components/role/components/view-role/view-role.component';
import { ViewRevenueComponent } from './modules/revenue/components/view-revenue/view-revenue.component';
import { AddSupplierComponent } from './modules/supplier/components/add-supplier/add-supplier.component';
import { EditSupplierComponent } from './modules/supplier/components/edit-supplier/edit-supplier.component';
import { ViewSupplierComponent } from './modules/supplier/components/view-supplier/view-supplier.component';
import { AddTaxComponent } from './modules/tax/components/add-tax/add-tax.component';
import { EditTaxComponent } from './modules/tax/components/edit-tax/edit-tax.component';
import { AddTransactionComponent } from './modules/transaction/components/add-transaction/add-transaction.component';
import { EditTransactionComponent } from './modules/transaction/components/edit-transaction/edit-transaction.component';
import { AddTransfertComponent } from './modules/transfert/components/add-transfert/add-transfert.component';
import { EditTransfertComponent } from './modules/transfert/components/edit-transfert/edit-transfert.component';
import { AddUserComponent } from './modules/user/components/add-user/add-user.component';
import { EditUserComponent } from './modules/user/components/edit-user/edit-user.component';
import { PropositionComponent } from './modules/proposition/components/proposition/proposition.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: 'account', component: AccountComponent, pathMatch: 'full' },
  { path: 'client', component: ClientComponent, pathMatch: 'full' },
  { path: 'configuration', component: ConfigurationComponent, pathMatch: 'full' },
  { path: 'instruction', component: InstructionComponent, pathMatch: 'full' },
  { path: 'invoice', component: InvoiceComponent, pathMatch: 'full' },
  { path: 'invoicee', component: InvoiceeComponent, pathMatch: 'full' },
  { path: 'objective', component: ObjectiveComponent, pathMatch: 'full' },
  { path: 'product', component: ProductComponent, pathMatch: 'full' },
  { path: 'proposition', component: PropositionComponent, pathMatch: 'full' },
  { path: 'revenue', component: RevenueComponent, pathMatch: 'full' },
  { path: 'supplier', component: SupplierComponent, pathMatch: 'full' },
  { path: 'tax', component: TaxComponent, pathMatch: 'full' },
  { path: 'transaction', component: TransactionComponent, pathMatch: 'full' },
  { path: 'transfert', component: TransfertComponent, pathMatch: 'full' },
  { path: 'user', component: UserComponent, pathMatch: 'full' },
  { path: 'role', component: RoleComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }]


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,

    UserComponent,
    RoleComponent,
    DashboardComponent,
    ConfigurationComponent,
    ProductComponent,
    ClientComponent,
    SupplierComponent,
    PropositionComponent,
    AccountComponent,
    TransfertComponent,
    InvoiceComponent,
    RevenueComponent,
    InvoiceeComponent,
    ObjectiveComponent,
    TransactionComponent,
    InstructionComponent,
    TaxComponent,
    AddAccountComponent,
    AddClientComponent,
    AddInstructionComponent,
    AddInvoiceComponent,
    AddInvoiceeComponent,
    AddObjectiveComponent,
    AddProductComponent,
    AddPropositionComponent,
    AddRevenueComponent,
    AddRoleComponent,
    AddSupplierComponent,
    AddTaxComponent,
    AddTransactionComponent,
    AddTransfertComponent,
    AddUserComponent,
    EditAccountComponent,
    EditClientComponent,
    EditInstructionComponent,
    EditInvoiceComponent,
    EditInvoiceeComponent,
    EditObjectiveComponent,
    EditProductComponent,
    EditPropositionComponent,
    EditRevenueComponent,
    EditRoleComponent,
    EditSupplierComponent,
    EditTaxComponent,
    EditTransactionComponent,
    EditTransfertComponent,
    EditUserComponent,
    ViewAccountComponent,
    ViewClientComponent,
    ViewInstructionComponent,
    ViewInvoiceComponent,
    ViewInvoiceeComponent,
    ViewObjectiveComponent,
    ViewProductComponent,
    ViewPropositionComponent,
    ViewRevenueComponent,
    ViewRoleComponent,
    ViewSupplierComponent,
    ViewTaxComponent,
    ViewTransactionComponent,
    ViewTransfertComponent,
    ViewUserComponent,

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
