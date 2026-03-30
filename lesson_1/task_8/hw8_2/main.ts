type FunctionCloneObject = { functionClone: Function, key: string };

function cloner <T>(obj: T): T{
    if (obj) {
        const functions:Array<FunctionCloneObject> = [];
        for (let key in obj) {
            if (typeof obj[key] === 'function') {
                // const functionClone = obj[key].bind({});
                const functionClone = (obj[key] as Function).bind({});
                functions.push({functionClone, key});
            }
        }
        console.log(functions);

        const cloneObj:T = JSON.parse(JSON.stringify(obj));
        for (let func of functions) {
            (cloneObj as any)[func.key] = func.functionClone;
        }

        console.log(cloneObj);
        return cloneObj;
    }
    throw new Error('!!!!!')
}

cloner({id: 123, name: 'ekd', greeting(){console.log('hello')}, foo(){console.log('bar')}});