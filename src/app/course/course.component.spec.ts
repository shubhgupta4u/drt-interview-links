import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseComponent } from './course.component';
import { CourseService } from '../services/courses/course.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [CourseService],
      imports: [HttpClientModule, AppRoutingModule],
      declarations: [CourseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should generate grid column', () => {
    component.createColumns()
    expect(component.columns).toBeInstanceOf(Array);
  });
  it('should return course data', () => {
    component.getData().then((data) => {
      expect(data).toBeInstanceOf(Array);
    })
  });
});
