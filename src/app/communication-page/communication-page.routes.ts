import { Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { CommunicationPageComponent } from "./communication-page.component";
import { ContactComponent } from "./contact/contact.component";


export const COMMUNICATION_ROUTES: Routes = [
  {
    // path: 'communication', // if we are going to copy paths ... then it is ok
    path: '',
    component: CommunicationPageComponent,
    children: [
      { path: 'contact', component: ContactComponent },
      { path: 'about', component: AboutComponent }
    ]
  }
];
