import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'token-auth',
  templateUrl: 'tokenAuth.component.html'
})
export class TokenAuthComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
}