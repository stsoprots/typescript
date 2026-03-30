interface CoursesAndDurationType {
    title: string;
    monthDuration: number
}

const coursesAndDurationArray:CoursesAndDurationType[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const course of coursesAndDurationArray) {
    const div:HTMLDivElement = document.createElement('div');
    div.classList.add('item')

    const h1:HTMLHeadingElement = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = `Курс: ${course.title}`;

    const p:HTMLParagraphElement = document.createElement('p');
    p.classList.add('description');
    p.innerText = `Тривалість: ${course.monthDuration} місяців`;

    div.append(h1, p);
    document.body.appendChild(div);
}