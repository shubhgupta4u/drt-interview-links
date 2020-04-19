import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseService } from './course.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';


describe('CourseService', () => {
  let service: CourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, AppRoutingModule],
      providers: [CourseService]
    });
    service = TestBed.inject(CourseService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return course data', () => {
    service.getAll().subscribe((data) => {
      expect(data).toBeInstanceOf(Array);
    })
  });
});