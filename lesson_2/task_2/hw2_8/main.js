let table = document.getElementById('table');
if (!table)
    throw new Error('Щось не так :(');
let tableGeneratorForm = document.forms.namedItem("tableGeneratorForm");
if (!tableGeneratorForm)
    throw new Error('Хибні значення');
tableGeneratorForm.onsubmit = function (e) {
    table.innerText = '';
    e.preventDefault();
    let linesValue = +tableGeneratorForm.lines.value;
    let cellsValue = +tableGeneratorForm.cells.value;
    let dataValue = tableGeneratorForm.data.value;
    console.log(linesValue, cellsValue, dataValue);
    for (let i = 0; i < linesValue; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cellsValue; j++) {
            let td = document.createElement('td');
            td.innerText = dataValue;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
};
export {};
//# sourceMappingURL=main.js.map