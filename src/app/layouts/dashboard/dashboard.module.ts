import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { UsersModule } from './pages/users/users.module';
import { ProductsModule } from './pages/products/products.module';
import { BuyersModule } from './pages/buyers/buyers.module';
import { CategoriesModule } from './pages/categories/categories.module';
import { PipesModule } from './pages/pipes/pipes.module';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    UsersModule,
    ProductsModule,
    BuyersModule,
    CategoriesModule,
    PipesModule,
    MatDialogModule
  ],
  exports:[DashboardComponent]
})
export class DashboardModule {

 }
