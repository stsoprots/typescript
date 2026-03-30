let sessionsList: string[] = JSON.parse(localStorage.getItem('sessionsList') || '[]');
console.log(sessionsList);

for (const sessionsListElement of sessionsList) {
    const div: HTMLDivElement = document.createElement('div');
    div.innerText = sessionsListElement;
    document.body.appendChild(div);
}
