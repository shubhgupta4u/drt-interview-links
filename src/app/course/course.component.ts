import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { CourseService } from '../services/courses/course.service';
import { SgGridColumn, SgGridColumnType } from '../controls/sg-grid/sg-grid.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courseList: Array<Course> = [];
  columns: SgGridColumn[];
  addNew = true;
  constructor(private courseService: CourseService) {
    this.createColumns();
    this.courseList = new Array<Course>();
  }

  ngOnInit(): void {
  }
  createColumns() {
    this.columns = new Array<SgGridColumn>();
    let dummyCourse = { id: "Id", title: 'Title', duration: "Duration", durationUnit: "Duration Unit", description: "Description" };
    Object.keys(dummyCourse).forEach(key => {
      let col: SgGridColumn = new SgGridColumn();
      col.field = key
      col.headerName = dummyCourse[key]
      if (key == "id") {
        col.dataType = SgGridColumnType.hyperlink;
        col.maxWidth = 75;
        col.hyperlinkClickCallback = this.viewCourseDetail;;
      }
      else if (key == "duration") {
        col.maxWidth = 75;
        col.dataType = SgGridColumnType.number;
      }
      else {
        //col.minWidth = 200;
        col.dataType = SgGridColumnType.string;
      }
      if (key == "durationUnit") {
        col.maxWidth = 75;
      }
      this.columns.push(col);
    })
  }
  viewCourseDetail(router: Router, data: any) {
    //To-Do
    console.log(data);
    //router.navigate(['<CourseDetailURL>',data.id]);
  }
  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.courseService.getAll().subscribe((data: any) => {
        if (data && data.length > 0) {
          data.forEach((d) => {
            this.courseList.push(new Course(d));
          });
        }
        resolve(this.courseList)
      }, error => {
        reject(error);
      })
    });

  }
  onGridReady(gridApi) {
    this.getData().then((data) => {
      gridApi.setRowData(data);
    }, err => {
      console.error(err);
    })

  }
  addNewCourse() {
    //To-Do
    //router.navigate(['<NewCourseURL>']);
  }

}
