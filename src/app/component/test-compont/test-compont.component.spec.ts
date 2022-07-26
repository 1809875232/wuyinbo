import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCompontComponent } from './test-compont.component';

describe('TestCompontComponent', () => {
  let component: TestCompontComponent;
  let fixture: ComponentFixture<TestCompontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCompontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCompontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
