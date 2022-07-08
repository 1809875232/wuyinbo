import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistContentComponent } from './dist-content.component';

describe('DistContentComponent', () => {
  let component: DistContentComponent;
  let fixture: ComponentFixture<DistContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
