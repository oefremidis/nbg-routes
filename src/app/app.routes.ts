import { Routes } from '@angular/router';
import { HomeComponent } from './info-page/home/home.component';
import { ProductsComponent } from './info-page/products/products.component';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { CommunicationPageComponent } from './communication-page/communication-page.component';
import { ContactComponent } from './communication-page/contact/contact.component';
import { AboutComponent } from './communication-page/about/about.component';
import { COMMUNICATION_ROUTES } from './communication-page/communication-page.routes';
import { goGuard } from './guards/go.guard';
import { stopGuard } from './guards/stop.guard';

// 1. Simple Routing
// export const routes: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: 'products', component: ProductsComponent },
//   // { path: 'favour', redirectTo: 'products', pathMatch: 'full'},
//   { path: '', redirectTo: 'home', pathMatch: 'full'},
//   { path: '**', component: FileNotFoundComponent }
// ];


// // 2. With Children
// export const routes: Routes = [
//   {
//     path: 'info',
//     component: InfoPageComponent,
//     children: [
//       { path: 'home', component: HomeComponent },
//       { path: 'products', component: ProductsComponent }
//     ]
//   },
//   {
//     path: 'communication',
//     component: CommunicationPageComponent,
//     children: [
//       { path: 'contact', component: ContactComponent },
//       { path: 'about', component: AboutComponent }
//     ]
//   },
//   { path: '', redirectTo: 'info/home', pathMatch: 'full' },
//   { path: '**', component: FileNotFoundComponent }
// ];


// 3. different routing files
// Lazy loading
// guards
export const routes: Routes = [
  {
    path: 'info',
    component: InfoPageComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'products', component: ProductsComponent, 
        // canActivate: [goGuard]
        canDeactivate: [stopGuard] 
    }
    ]
  },
  // just copy here...
  // ...COMMUNICATION_ROUTES,
  // OR 
  // lazy loading
  {
    path: 'communication',
    loadChildren: () => import('./communication-page/communication-page.routes').then(r => r.COMMUNICATION_ROUTES)
  },
  { path: '', redirectTo: 'info/home', pathMatch: 'full' },
  { path: '**', component: FileNotFoundComponent }
];
