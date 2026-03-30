const convertValue = document.getElementById('convertValue') as HTMLInputElement;
const input = document.getElementById('input') as HTMLInputElement;

if (!convertValue || !input) {
    throw new Error('Щось не так :(');
}

convertValue.oninput = (): void => {
    input.value = '';
    const kg: number = +convertValue.value;
    const result: number = kg * 2.2046;
    input.placeholder = result.toFixed(2);
};