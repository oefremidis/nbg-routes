import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  // { path: 'favour', redirectTo: 'products', pathMatch: 'full'},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: FileNotFoundComponent }
];
