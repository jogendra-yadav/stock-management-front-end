import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { }
  hideHeaderAndFooter: boolean = true;

  ngOnInit(): void {
  }

  logout(): void {
    // Remove token from session storage
    sessionStorage.removeItem('apiToken');

    // Redirect to login page
    this.router.navigate(['/login']);
  }
}
