import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesFeaturedComponent } from './courses-featured.component';

describe('CoursesFeaturedComponent', () => {
  let component: CoursesFeaturedComponent;
  let fixture: ComponentFixture<CoursesFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesFeaturedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
