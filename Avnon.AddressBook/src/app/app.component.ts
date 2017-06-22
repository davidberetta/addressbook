import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserManager } from 'oidc-client';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})

export class AppComponent {

  constructor(private router: Router) {

  }
}
