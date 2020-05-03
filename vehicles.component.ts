import {Component, OnInit, ViewChild} from '@angular/core';
import {VehiclesearchserviceService} from '../service/vehiclesearchservice.service';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {Vehiclebean} from './vehiclebean';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})

export class VehiclesComponent implements OnInit {
  displayedColumns = ['id'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private vehicleservice: VehiclesearchserviceService) {

  }

  ngOnInit() {

    const users: Vehiclebean[] = [];

    this.vehicleservice.listUserA().subscribe(
      data => {
        for (let vehicle of data) {
          users.push(vehicle);
        }
      },
      err => console.error(err)
    );

    this.dataSource = new MatTableDataSource(users);

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}

