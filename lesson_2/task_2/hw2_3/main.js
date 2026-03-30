const div = document.createElement('div');
const form = document.forms.namedItem("myForm");
if (!form)
    throw new Error("Форма не знайдена");
form.onsubmit = function (ev) {
    ev.preventDefault();
    const name = form.elements.namedItem("name").value;
    const surname = form.elements.namedItem("surname").value;
    const age = Number(form.elements.namedItem("age").value);
    const h21 = document.createElement('h2');
    h21.innerText = name;
    const h22 = document.createElement('h2');
    h22.innerText = surname;
    const h3 = document.createElement('h3');
    h3.innerText = age.toString();
    const user = {
        name: name,
        surname: surname,
        age: age,
    };
    const h4 = document.createElement('h4');
    h4.innerText = JSON.stringify(user);
    const obj = { name, surname, age };
    console.log(obj);
    div.append(h21, h22, h3, h4);
};
document.body.appendChild(div);
export {};
//# sourceMappingURL=main.js.map