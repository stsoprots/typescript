type UserInfoType = {
    name: string,
    surname: string,
    age: number,
}


const div: HTMLDivElement = document.createElement('div');
const form: HTMLFormElement | null  = document.forms.namedItem("myForm");
if (!form) throw new Error("Форма не знайдена");
form.onsubmit = function(ev:SubmitEvent):void {
    ev.preventDefault();
    const name: string = (form.elements.namedItem("name") as HTMLInputElement).value;
    const surname: string = (form.elements.namedItem("surname") as HTMLInputElement).value;
    const age: number = Number((form.elements.namedItem("age") as HTMLInputElement).value);

    const h21:HTMLHeadingElement = document.createElement('h2');
    h21.innerText = name;

    const h22:HTMLHeadingElement = document.createElement('h2');
    h22.innerText = surname;

    const h3:HTMLHeadingElement = document.createElement('h3');
    h3.innerText = age.toString();


    const user: UserInfoType = {
        name: name,
        surname: surname,
        age: age,
    }
    const h4:HTMLHeadingElement = document.createElement('h4');
    h4.innerText = JSON.stringify(user);

    const obj: UserInfoType = {name, surname, age};
    console.log(obj);

    div.append(h21, h22, h3, h4);
}


document.body.appendChild(div);