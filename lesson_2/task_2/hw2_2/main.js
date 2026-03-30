const f1 = document.forms.namedItem("f1");
if (!f1)
    throw new Error("Форма не знайдена");
f1.onsubmit = function () {
    const age = Number(f1.elements.namedItem("age").value);
    if (age >= 18) {
        alert(`Друже твій вік - ${age}, ти вже повнолітній`);
    }
    else if (age > 0 && age <= 18) {
        alert(`Друже твій вік - ${age}, як казав Каю: "Я поки що малюк вивчати світ люблю..."`);
    }
    else {
        alert('Щось не те ти вів друже');
    }
};
export {};
//# sourceMappingURL=main.js.map