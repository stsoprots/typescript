let table:HTMLElement | null = document.getElementById('table') as HTMLTableElement;
if (!table) throw new Error('Щось не так :(')

let tableGeneratorForm: HTMLFormElement | null = document.forms.namedItem("tableGeneratorForm");
if (!tableGeneratorForm) throw new Error('Хибні значення')

tableGeneratorForm.onsubmit = function (e:Event):void {
    table.innerText = ''
    e.preventDefault();
    let linesValue: number = +tableGeneratorForm.lines.value;
    let cellsValue: number = +tableGeneratorForm.cells.value;
    let dataValue: string = tableGeneratorForm.data.value;
    console.log(linesValue, cellsValue, dataValue);

    for (let i = 0; i < linesValue; i++) {
        let tr:HTMLTableRowElement = document.createElement('tr');
        for (let j = 0; j < cellsValue; j++) {
            let td:HTMLTableCellElement = document.createElement('td')
            td.innerText = dataValue;
            tr.appendChild(td);
        }

        table.appendChild(tr);

    }
}
