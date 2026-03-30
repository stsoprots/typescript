function cloner(obj) {
    if (obj) {
        const functions = [];
        for (let key in obj) {
            if (typeof obj[key] === 'function') {
                // const functionClone = obj[key].bind({});
                const functionClone = obj[key].bind({});
                functions.push({ functionClone, key });
            }
        }
        console.log(functions);
        const cloneObj = JSON.parse(JSON.stringify(obj));
        for (let func of functions) {
            cloneObj[func.key] = func.functionClone;
        }
        console.log(cloneObj);
        return cloneObj;
    }
    throw new Error('!!!!!');
}
cloner({ id: 123, name: 'ekd', greeting() { console.log('hello'); }, foo() { console.log('bar'); } });
export {};
//# sourceMappingURL=main.js.map