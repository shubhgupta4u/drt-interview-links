import { Injectable } from "@angular/core";
import { ApiManagerService } from '../common/api-manager.service';

@Injectable()
export class CourseService {
    endPoint: string = "courses";

    constructor(private apiManagerService: ApiManagerService) {
    }

    getAll() {
        return this.apiManagerService.genericGetRequestNoParam(this.endPoint);
    }
}
