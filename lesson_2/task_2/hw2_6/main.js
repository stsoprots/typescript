const convertValue = document.getElementById('convertValue');
const input = document.getElementById('input');
if (!convertValue || !input) {
    throw new Error('Щось не так :(');
}
convertValue.oninput = () => {
    input.value = '';
    const kg = +convertValue.value;
    const result = kg * 2.2046;
    input.placeholder = result.toFixed(2);
};
export {};
//# sourceMappingURL=main.js.map