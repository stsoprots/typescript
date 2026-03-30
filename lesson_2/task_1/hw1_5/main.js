const coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
const div = document.createElement('div');
for (const course of coursesArray) {
    const divCourse = document.createElement('div');
    divCourse.classList.add('course');
    const h1Title = document.createElement('h1');
    h1Title.classList.add('title');
    h1Title.innerText = course.title;
    const divMounthHour = document.createElement('div');
    divMounthHour.classList.add('MounthHour');
    const h3MounthDuration = document.createElement('h3');
    h3MounthDuration.classList.add('mounthDuration');
    h3MounthDuration.innerText = `${course.monthDuration} mounth`;
    const h3HourDuration = document.createElement('h3');
    h3HourDuration.classList.add('hourDuration');
    h3HourDuration.innerText = `${course.hourDuration} hour`;
    const listModules = document.createElement('ul');
    listModules.classList.add('modules');
    for (const module of course.modules) {
        const li = document.createElement('li');
        li.innerText = module;
        listModules.appendChild(li);
    }
    divMounthHour.append(h3MounthDuration, h3HourDuration);
    divCourse.append(h1Title, divMounthHour, listModules);
    div.appendChild(divCourse);
    //     for (let user of users) {
    //     let li = document.createElement('li');
    //     li.classList.add('user');
    //     li.innerText = user.name;
    //     allUsersDiv.appendChild(li)
    // //
    // // }
}
document.body.appendChild(div);
export {};
//# sourceMappingURL=main.js.map