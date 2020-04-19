import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from '../services/courses/course.service';
import { SgGridColumn, SgGridColumnType } from '../controls/sg-grid/sg-grid.component';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
