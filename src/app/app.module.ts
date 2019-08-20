import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { GridModule } from '@progress/kendo-angular-grid';
import { DataCardComponent } from './data-card/data-card.component';

import {SocketIoModule, SocketIoConfig} from 'ngx-socket-io';
import { HeaderComponent } from './header/header.component';
import { PopulationChartComponent } from './population-chart/population-chart.component';
import { PopulationGridComponent } from './population-grid/population-grid.component';

const socketConfig: SocketIoConfig = {
  url: 'http://localhost:4000',
};

@NgModule({
  declarations: [
    AppComponent,
    DataCardComponent,
    HeaderComponent,
    PopulationChartComponent,
    PopulationGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropDownsModule,
    BrowserAnimationsModule,
    ChartsModule,
    GridModule,
    SocketIoModule.forRoot(socketConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
