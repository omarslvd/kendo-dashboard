import {Component, OnInit} from '@angular/core';
import {Socket} from 'ngx-socket-io';

@Component({
  selector: 'app-population-grid',
  templateUrl: './population-grid.component.html',
  styleUrls: ['./population-grid.component.scss']
})
export class PopulationGridComponent implements OnInit {

  constructor(private socket: Socket) {
  }

  populationDataSub = this.socket.fromEvent('countries population data');
  populationData;
  years = [2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009];
  ages = [5, 12, 22, 30, 33, 40, 44, 55, 66, 70, 80];
  currentYear = 2019;
  currentAge = 23;

  onAgeChange(age) {
    this.currentAge = age;
    this.socket.emit('fetch population data', {age: this.currentAge, year: this.currentYear});
  }

  onYearChange(year) {
    this.currentYear = year;
    this.socket.emit('fetch population data', {age: this.currentAge, year: this.currentYear});
  }

  ngOnInit() {
    this.populationDataSub.subscribe((data) => {
      this.populationData = data;
    });
  }
}
