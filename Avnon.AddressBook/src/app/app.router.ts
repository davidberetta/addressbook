import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactDetailsComponent } from './components/contactDetails.component';

const appRoutes: Routes = [
  {
    path: 'contact/:id',
    component: ContactDetailsComponent
  },
  {
    path: '',
    component: ContactDetailsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);