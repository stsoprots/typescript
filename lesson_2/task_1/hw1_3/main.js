const coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
for (const course of coursesAndDurationArray) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.innerText = `Курс: ${course.title} 
    Тривалість: ${course.monthDuration} місяців`;
    div.append(h2);
    document.body.appendChild(div);
}
export {};
//# sourceMappingURL=main.js.map