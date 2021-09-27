import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CommentsComponent } from './components/comments/comments.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'addemployee', component: EmployeeDashboardComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'Comments', component: CommentsComponent },
  
  { path: 'product', component: ProductComponent },
  { path: 'login', component: LoginComponent  },


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
