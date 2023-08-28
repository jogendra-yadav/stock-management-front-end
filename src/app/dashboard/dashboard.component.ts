import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  productData: any[] = [];

  constructor(private router: Router, private productDataService: ProductDataService) { }

  logout(): void {
    // Remove token from session storage
    sessionStorage.removeItem('apiToken');

    // Redirect to login page
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.fetchProductData();
  }

  fetchProductData(): void {
    this.productDataService.getProductData().subscribe(
      (data) => {
        this.productData = data;
      },
      (error) => {
        console.error('Error fetching product data', error);
      }
    );
  }

}
