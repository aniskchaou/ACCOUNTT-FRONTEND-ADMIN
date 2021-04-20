import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './template/navigation/navigation.component';

import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { UserComponent } from './modules/user/components/user/user.component';
import { DashboardComponent } from './modules/general/dashboard/dashboard.component';
import { ConfigurationComponent } from './modules/general/configuration/configuration.component';
import { ProductComponent } from './modules/product/components/product/product.component';
import { ClientComponent } from './modules/client/components/client/client.component';
import { SupplierComponent } from './modules/supplier/components/supplier/supplier.component';

import { AccountComponent } from './modules/account/components/account/account.component';
import { TransfertComponent } from './modules/transfert/components/transfert/transfert.component';
import { InvoiceComponent } from './modules/invoice/components/invoice/invoice.component';
import { RevenueComponent } from './modules/revenue/components/revenue/revenue.component';
import { TaxComponent } from './modules/tax/components/tax/tax.component';
import { LoginComponent } from './modules/general/login/login.component';
import { AddClientComponent } from './modules/client/components/add-client/add-client.component';
import { AddAccountComponent } from './modules/account/components/add-account/add-account.component';
import { ViewUserComponent } from './modules/user/components/view-user/view-user.component';
import { ViewTransfertComponent } from './modules/transfert/components/view-transfert/view-transfert.component';

import { ViewTaxComponent } from './modules/tax/components/view-tax/view-tax.component';
import { ViewAccountComponent } from './modules/account/components/view-account/view-account.component';
import { EditAccountComponent } from './modules/account/components/edit-account/edit-account.component';
import { EditClientComponent } from './modules/client/components/edit-client/edit-client.component';
import { ViewClientComponent } from './modules/client/components/view-client/view-client.component';

import { EditInvoiceComponent } from './modules/invoice/components/edit-invoice/edit-invoice.component';
import { ViewInvoiceComponent } from './modules/invoice/components/view-invoice/view-invoice.component';

import { AddProductComponent } from './modules/product/components/add-product/add-product.component';
import { EditProductComponent } from './modules/product/components/edit-product/edit-product.component';
import { ViewProductComponent } from './modules/product/components/view-product/view-product.component';
import { AddPropositionComponent } from './modules/proposition/components/add-proposition/add-proposition.component';
import { EditPropositionComponent } from './modules/proposition/components/edit-proposition/edit-proposition.component';
import { ViewPropositionComponent } from './modules/proposition/components/view-proposition/view-proposition.component';
import { AddRevenueComponent } from './modules/revenue/components/add-revenue/add-revenue.component';
import { EditRevenueComponent } from './modules/revenue/components/edit-revenue/edit-revenue.component';
import { ViewRevenueComponent } from './modules/revenue/components/view-revenue/view-revenue.component';
import { AddSupplierComponent } from './modules/supplier/components/add-supplier/add-supplier.component';
import { EditSupplierComponent } from './modules/supplier/components/edit-supplier/edit-supplier.component';
import { ViewSupplierComponent } from './modules/supplier/components/view-supplier/view-supplier.component';
import { AddTaxComponent } from './modules/tax/components/add-tax/add-tax.component';
import { EditTaxComponent } from './modules/tax/components/edit-tax/edit-tax.component';
import { AddTransfertComponent } from './modules/transfert/components/add-transfert/add-transfert.component';
import { EditTransfertComponent } from './modules/transfert/components/edit-transfert/edit-transfert.component';
import { AddUserComponent } from './modules/user/components/add-user/add-user.component';
import { EditUserComponent } from './modules/user/components/edit-user/edit-user.component';
import { PropositionComponent } from './modules/proposition/components/proposition/proposition.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './template/footer/footer.component';
import { UserInfoComponent } from './template/user-info/user-info.component';
import { SearchBarComponent } from './template/search-bar/search-bar.component';
import { NotificationComponent } from './template/notification/notification.component';
import { TopSearchBarComponent } from './template/top-search-bar/top-search-bar.component';
import { routes } from './main/routes/routes';
import { ClientGridComponent } from './modules/client/components/client-grid/client-grid.component';

import { CategoryExpenseComponent } from './modules/misc/category-expense/category-expense.component';
import { ShortcutLinksComponent } from './template/shortcut-links/shortcut-links.component';
import { LanguageComponent } from './template/language/language.component';
import { AddUnitComponent } from './modules/unit/add-unit/add-unit.component';
import { EditUnitComponent } from './modules/unit/edit-unit/edit-unit.component';
import { UnitComponent } from './modules/unit/unit/unit.component';
import { UserGridComponent } from './modules/user/components/user-grid/user-grid.component';
import { RoleComponent } from './modules/role/components/role/role.component';
import { AddRoleComponent } from './modules/role/components/add-role/add-role.component';
import { EditRoleComponent } from './modules/role/components/edit-role/edit-role.component';
import { ViewRoleComponent } from './modules/role/components/view-role/view-role.component';
import { AddProposalComponent } from './modules/client/components/add-proposal/add-proposal.component';
import { AddBillComponent } from './modules/supplier/components/add-bill/add-bill.component';
import { AddPaymentComponent } from './modules/payment/add-payment/add-payment.component';
import { PaymentComponent } from './modules/payment/payment/payment.component';
import { CategoryIncomeComponent } from './modules/misc/category-income/category-income.component';
import { NavigationArticleComponent } from './modules/product/components/navigation-article/navigation-article.component';
import { ModalProductComponent } from './modules/product/components/modal-product/modal-product.component';
import { ProductSliderComponent } from './modules/product/components/product-slider/product-slider.component';
import { ClientNavigationComponent } from './modules/client/components/client-navigation/client-navigation.component';
import { ModalClientComponent } from './modules/client/components/modal-client/modal-client.component';
import { ModalSupplierComponent } from './modules/supplier/components/modal-supplier/modal-supplier.component';
import { SystemConfigurationComponent } from './modules/general/system-configuration/system-configuration.component';
import { EmailConfigurationComponent } from './modules/general/email-configuration/email-configuration.component';
import { ModalRevenueComponent } from './modules/revenue/components/modal-revenue/modal-revenue.component';
import { BillComponent } from './modules/bill/components/bill/bill.component';
import { EditBillComponent } from './modules/bill/components/edit-bill/edit-bill.component';
import { ViewBillComponent } from './modules/bill/components/view-bill/view-bill.component';
import { AccountNavigationComponent } from './modules/account/components/account-navigation/account-navigation.component';
import { ModalAccountComponent } from './modules/account/components/modal-account/modal-account.component';
import { BillNavigationComponent } from './modules/bill/components/bill-navigation/bill-navigation.component';
import { ModalBillComponent } from './modules/bill/components/modal-bill/modal-bill.component';
import { InvoiceNavigationComponent } from './modules/invoice/components/invoice-navigation/invoice-navigation.component';
import { ModalInvoiceComponent } from './modules/invoice/components/modal-invoice/modal-invoice.component';
import { ModalPropositionComponent } from './modules/proposition/components/modal-proposition/modal-proposition.component';
import { PropositionNavigationComponent } from './modules/proposition/components/proposition-navigation/proposition-navigation.component';
import { ModalTaxComponent } from './modules/tax/components/modal-tax/modal-tax.component';
import { TaxNavigationComponent } from './modules/tax/components/tax-navigation/tax-navigation.component';
import { ModalTransfertComponent } from './modules/transfert/components/modal-transfert/modal-transfert.component';
import { TransfertNavigationComponent } from './modules/transfert/components/transfert-navigation/transfert-navigation.component';
import { ModalUnitComponent } from './modules/unit/modal-unit/modal-unit.component';
import { UnitNavigationComponent } from './modules/unit/unit-navigation/unit-navigation.component';
import { ModalUserComponent } from './modules/user/components/modal-user/modal-user.component';
import { UserNavigationComponent } from './modules/user/components/user-navigation/user-navigation.component';
import { SupplierNavigationComponent } from './modules/supplier/components/supplier-navigation/supplier-navigation.component';
import { RevenueNavigationComponent } from './modules/revenue/components/revenue-navigation/revenue-navigation.component';
import { AddInvoiceComponent } from './modules/client/components/add-invoice/add-invoice.component';
import { AppearanceConfigComponent } from './modules/general/appearance-config/appearance-config.component';
import { ProfileComponent } from './modules/general/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SupplierNavigationComponent,
    RevenueNavigationComponent,
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
    BillComponent,
    TaxComponent,
    AddAccountComponent,
    AddClientComponent,
    AddInvoiceComponent,
    AddBillComponent,

    AddProductComponent,
    AddPropositionComponent,
    AddRevenueComponent,
    AddRoleComponent,
    AddSupplierComponent,
    AddTaxComponent,

    AddTransfertComponent,
    AddUserComponent,
    EditAccountComponent,
    EditClientComponent,
    EditInvoiceComponent,
    EditBillComponent,

    EditProductComponent,
    EditPropositionComponent,
    EditRevenueComponent,
    EditRoleComponent,
    EditSupplierComponent,
    EditTaxComponent,
    EditTransfertComponent,
    EditUserComponent,
    ViewAccountComponent,
    ViewClientComponent,
    ViewInvoiceComponent,
    ViewBillComponent,

    ViewProductComponent,
    ViewPropositionComponent,
    ViewRevenueComponent,
    ViewRoleComponent,
    ViewSupplierComponent,
    ViewTaxComponent,
    ViewTransfertComponent,
    ViewUserComponent,
    FooterComponent,
    UserInfoComponent,
    SearchBarComponent,
    NotificationComponent,
    TopSearchBarComponent,
    LoginComponent,
    ClientGridComponent,
    CategoryIncomeComponent,
    CategoryExpenseComponent,
    ShortcutLinksComponent,
    LanguageComponent,
    UnitComponent,
    AddUnitComponent,
    EditUnitComponent,
    UserGridComponent,
    AddProposalComponent,
    AddBillComponent,
    AddPaymentComponent,
    PaymentComponent,
    NavigationArticleComponent,
    ModalProductComponent,
    ProductSliderComponent,
    ClientNavigationComponent,
    ModalClientComponent,
    ModalSupplierComponent,
    SystemConfigurationComponent,
    EmailConfigurationComponent,
    ModalRevenueComponent,
    ModalBillComponent,
    BillNavigationComponent,
    AccountNavigationComponent,
    ModalAccountComponent,
    ModalInvoiceComponent,
    InvoiceNavigationComponent,
    ModalPropositionComponent,
    PropositionNavigationComponent,
    TaxNavigationComponent,
    ModalTaxComponent,
    ModalTransfertComponent,
    TransfertNavigationComponent,
    UnitNavigationComponent,
    ModalUnitComponent,
    ModalUserComponent,
    UserNavigationComponent,
    AppearanceConfigComponent,
    ProfileComponent,


  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
