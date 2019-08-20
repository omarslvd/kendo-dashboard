import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.scss']
})
export class DataCardComponent implements OnInit {

  constructor() { }

  @Input() heading = '';
  @Input() subHeading = '';
  @Input() body = '';
  @Input() footer = '';
  @Input() footerHeading = '';

  ngOnInit() {
  }
}
