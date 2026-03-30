// взяти до текст з відео для Notion

// type CoursesType = {
//     title: string;
//     monthDuration: number;
// }
// class Course {
//     title: string;
//     monthDuration: number;
//
//
//     constructor(title: string, monthDuration: number) {
//         this.title = title;
//         this.monthDuration = monthDuration;
//     }
// }
//
// class Course2 extends Course {
//     id: number;
//
//
//     constructor(title: string, monthDuration: number, id: number) {
//         super(title, monthDuration);
//         this.id = id;
//     }
// }

//інший підхід
// interface Course{
//     title: string;
//     monthDuration: number;
// }
// interface Course2 extends ICourse {
//     id: number
// }

// 3 варіант (швидше цей варік)
// type Course = {
//     title: string;
//     monthDuration: number
// }
// type Course2 = Course & { id: number }

// 4 варіант - не дуже добре бо може бути і не може бути треба жорстку типізацію
interface Course12 {
    id?: number;
    title: string;
    monthDuration: number;
}

let coursesAndDurationArray: Course12[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let newCoursesArray = coursesAndDurationArray.map<Course12>((course: Course12, index: number) => ({id: index + 1, ...course}))
console.log(newCoursesArray);

