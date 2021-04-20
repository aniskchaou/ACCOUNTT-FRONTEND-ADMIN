import { Routes } from "@angular/router";
import { AccountComponent } from "src/app/modules/account/components/account/account.component";
import { AddClientComponent } from "src/app/modules/client/components/add-client/add-client.component";
import { ClientGridComponent } from "src/app/modules/client/components/client-grid/client-grid.component";
import { ClientComponent } from "src/app/modules/client/components/client/client.component";
import { ViewClientComponent } from "src/app/modules/client/components/view-client/view-client.component";
import { ConfigurationComponent } from "src/app/modules/general/configuration/configuration.component";
import { DashboardComponent } from "src/app/modules/general/dashboard/dashboard.component";
import { EmailConfigurationComponent } from "src/app/modules/general/email-configuration/email-configuration.component";
import { EntrepriseConfigurationComponent } from "src/app/modules/general/entreprise-configuration/entreprise-configuration.component";
import { SystemConfigurationComponent } from "src/app/modules/general/system-configuration/system-configuration.component";
import { InvoiceComponent } from "src/app/modules/invoice/components/invoice/invoice.component";
import { BillComponent } from "src/app/modules/bill/components/bill/bill.component";
import { CategoryExpenseComponent } from "src/app/modules/misc/category-expense/category-expense.component";
import { CategoryIncomeComponent } from "src/app/modules/misc/category-income/category-income.component";
import { CategoryProductComponent } from "src/app/modules/misc/category-product/category-product.component";
import { PaymentComponent } from "src/app/modules/payment/payment/payment.component";
import { AddProductComponent } from "src/app/modules/product/components/add-product/add-product.component";
import { ProductComponent } from "src/app/modules/product/components/product/product.component";
import { AddPropositionComponent } from "src/app/modules/proposition/components/add-proposition/add-proposition.component";
import { PropositionComponent } from "src/app/modules/proposition/components/proposition/proposition.component";
import { ExpenseReportComponent } from "src/app/modules/report/expense-report/expense-report.component";
import { RevenueReportComponent } from "src/app/modules/report/revenue-report/revenue-report.component";
import { RevenueComponent } from "src/app/modules/revenue/components/revenue/revenue.component";
import { RoleComponent } from "src/app/modules/role/components/role/role.component";
import { AddSupplierComponent } from "src/app/modules/supplier/components/add-supplier/add-supplier.component";
import { SupplierComponent } from "src/app/modules/supplier/components/supplier/supplier.component";
import { TaxComponent } from "src/app/modules/tax/components/tax/tax.component";

import { TransfertComponent } from "src/app/modules/transfert/components/transfert/transfert.component";
import { UnitComponent } from "src/app/modules/unit/unit/unit.component";
import { UserComponent } from "src/app/modules/user/components/user/user.component";
import { LoginComponent } from "src/app/template/login/login.component";
import { AddInvoiceComponent } from "src/app/modules/client/components/add-invoice/add-invoice.component";



export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
    { path: 'accounts', component: AccountComponent, pathMatch: 'full' },
    { path: 'clients', component: ClientComponent, pathMatch: 'full' },
    { path: 'invoices', component: InvoiceComponent, pathMatch: 'full' },
    { path: 'bill', component: BillComponent, pathMatch: 'full' },
    { path: 'products', component: ProductComponent, pathMatch: 'full' },
    { path: 'propositions', component: PropositionComponent, pathMatch: 'full' },
    { path: 'revenues', component: RevenueComponent, pathMatch: 'full' },
    { path: 'suppliers', component: SupplierComponent, pathMatch: 'full' },
    { path: 'tax', component: TaxComponent, pathMatch: 'full' },
    { path: 'transferts', component: TransfertComponent, pathMatch: 'full' },
    { path: 'users', component: UserComponent, pathMatch: 'full' },
    { path: 'roles', component: RoleComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'client-grid', component: ClientGridComponent, pathMatch: 'full' },
    { path: 'view-client', component: ViewClientComponent, pathMatch: 'full' },
    { path: 'add-invoice', component: AddInvoiceComponent, pathMatch: 'full' },
    { path: 'add-client', component: AddClientComponent, pathMatch: 'full' },
    { path: 'view-proposition', component: AddPropositionComponent, pathMatch: 'full' },
    { path: 'payments', component: PaymentComponent, pathMatch: 'full' },
    { path: 'product-categories', component: CategoryProductComponent, pathMatch: 'full' },
    { path: 'expense-categories', component: CategoryExpenseComponent, pathMatch: 'full' },
    { path: 'revenue-categories', component: CategoryIncomeComponent, pathMatch: 'full' },
    { path: 'units', component: UnitComponent, pathMatch: 'full' },
    { path: 'global-config', component: ConfigurationComponent, pathMatch: 'full' },
    { path: 'system-config', component: SystemConfigurationComponent, pathMatch: 'full' },
    { path: 'email-config', component: EmailConfigurationComponent, pathMatch: 'full' },
    { path: 'entreprise-config', component: EntrepriseConfigurationComponent, pathMatch: 'full' },
    { path: 'expense-report', component: ExpenseReportComponent, pathMatch: 'full' },
    { path: 'revenue-report', component: RevenueReportComponent, pathMatch: 'full' },
    { path: 'add-supplier', component: AddSupplierComponent, pathMatch: 'full' },
    { path: 'add-product', component: AddProductComponent, pathMatch: 'full' },
    { path: 'add-proposition', component: AddPropositionComponent, pathMatch: 'full' },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }]