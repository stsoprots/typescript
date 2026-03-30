let listOfItems: string[] = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

// Також можна було і так типізувати et listOfItems: Array<string> = ...
// (Array<string>) - якийсь дженерік

document.write(`<ul>`);
for (let item of listOfItems) { // коли ітеруємо не треба для item зазначати що це наприклад string бо воно бере значення із масиву який ми вже типізували і воно автоматично буде розуміти який це тип
    document.write(`<li>${item}</li>`);
}
document.write(`</ul>`);
