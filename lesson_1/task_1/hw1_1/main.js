let h1 = document.querySelector("h1");
if (h1) {
    h1.innerText = "okten";
}
let msg = "lorem ipsum";
let p = document.createElement("p");
p.innerText = msg;
document.body.append(p);
let users = [
    { name: 'vasya', age: 31, status: false },
    { name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true }
];
let menu = document.querySelector('.menu');
if (menu) {
    for (const user of users) {
        let li = document.createElement("li");
        li.innerText = user.name;
        menu.append(li);
    }
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then((users) => {
        for (const user of users) {
            let li = document.createElement("li");
            li.innerText = user.name;
            menu.append(li);
        }
    })
        .catch(error => console.error(error));
}
navigator.geolocation.getCurrentPosition((position) => console.log(position), (error) => console.error(error));
navigator.mediaDevices.getUserMedia({ video: true })
    .then((stream) => {
    const videoplayer = document.getElementById('videoplayer');
    if (videoplayer instanceof HTMLVideoElement) {
        videoplayer.srcObject = stream;
        videoplayer.play();
    }
})
    .catch((error) => console.error(error));
export {};
//# sourceMappingURL=main.js.map