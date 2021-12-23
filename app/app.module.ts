import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListExpensesComponent } from './components/list-expenses/list-expenses.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import {RouterModule, Routes} from "@angular/router"
import { FormsModule} from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';


const routers:Routes=[ 
  {path:'expenses',component:ListExpensesComponent},
  {path:'addexpense',component:AddExpenseComponent},
  {path:'editexpense/:id',component:AddExpenseComponent},
  {path:'menu',component:MenuComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},

  {path:'',redirectTo:'/expenses',pathMatch:'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    ListExpensesComponent,
    AddExpenseComponent,
    MenuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routers),
    FormsModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
