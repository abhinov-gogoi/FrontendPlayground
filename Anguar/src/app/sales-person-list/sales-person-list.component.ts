import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './SalesPerson';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Abhinov", "Gogoi", "abhi@gmail.com", 50000),
    new SalesPerson("Anup", "Kumar", "anup@gmail.com", 60000),
    new SalesPerson("Satyam", "Mishra", "satyam@gmail.com", 70000),
    new SalesPerson("MVDZO", "", "mvdzo@gmail.com", 80000),
  ];

}
