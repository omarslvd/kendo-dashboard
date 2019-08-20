import {Component, OnInit} from '@angular/core';
import {Socket} from 'ngx-socket-io';

@Component({
  selector: 'app-population-chart',
  templateUrl: './population-chart.component.html',
  styleUrls: ['./population-chart.component.scss']
})
export class PopulationChartComponent implements OnInit {

  populationDataSub = this.socket.fromEvent('population last 5 years');
  populationData = [];

  constructor(private socket: Socket) {
  }

  public labelContent(e: any): string {
    return e.category;
  }

  ngOnInit() {
    this.populationDataSub.subscribe((data: []) => {
      this.populationData = data;
    });
  }
}
