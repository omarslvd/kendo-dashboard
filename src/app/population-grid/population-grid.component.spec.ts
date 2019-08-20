import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationGridComponent } from './population-grid.component';

describe('PopulationGridComponent', () => {
  let component: PopulationGridComponent;
  let fixture: ComponentFixture<PopulationGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopulationGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
