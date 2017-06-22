import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';
import { ContactDetailsComponent } from './components/contactDetails.component';
import { HomeComponent } from './components/home.component';
import { LoginComponent } from './components/login.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
      path: 'contact/:id',
      component: ContactDetailsComponent
      },
      {
        path: '',
        component: ContactDetailsComponent
      }],
  },
  { path: 'token-auth', component: HomeComponent },
  { path: 'login', component: LoginComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);