import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AuthGuard } from './auth.guard'; // Import the AuthGuard

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // Add more routes as needed
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, // Add this line
  { path: 'product/view', component: ProductComponent, canActivate: [AuthGuard] }, // Add this line
  { path: 'product/add', component: AddProductComponent, canActivate: [AuthGuard] }, // Add this line
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }