import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductDataService } from '../product-data.service';

export interface PeriodicElement {
  productName: string;
  productCode: string;
  productStock: number;
  productDescription: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productDataService: ProductDataService) { }
  productData: any[] = [];
  ELEMENT_DATA: PeriodicElement[] = [];
  dataSource:any;
  displayedColumns: string[] = ['id', 'name', 'stock', 'description'];
  ngOnInit(): void {
    this.fetchProductData();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  fetchProductData(): void {
    this.productDataService.getProductData().subscribe(
      (data) => {
        this.productData = data;
        this.ELEMENT_DATA = data;
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      },
      (error) => {
        console.error('Error fetching product data', error);
      }
    );
  }

}
