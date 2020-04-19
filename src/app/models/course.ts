export class Course {
    id: number;
    title: string;
    duration: number;
    durationUnit: string;
    description: string;

    constructor(data) {
        if (data) {
            this.id = data["id"];
            this.title = data["title"];
            this.duration = data["duration"];
            this.durationUnit = data["duration-unit"];
            this.description = data["description"];
        }
    }
}