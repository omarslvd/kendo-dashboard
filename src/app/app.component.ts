import {Component, OnInit} from '@angular/core';
import {Socket} from 'ngx-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public socket: Socket) {
  }

  populationSub = this.socket.fromEvent('world population');
  youthSub = this.socket.fromEvent('youth population');
  agedPopulationSub = this.socket.fromEvent('aged population');

  population;
  youthPopulation;
  agedPopulation;

  ngOnInit() {
    this.populationSub.subscribe((data: any) => {
      this.population = data;
    });

    this.youthSub.subscribe((data: any) => {
      const [info] = data;
      this.youthPopulation = info;
    });

    this.agedPopulationSub.subscribe((data: any) => {
      const [info] = data;
      this.agedPopulation = info;
    });
  }
}
