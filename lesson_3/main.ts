interface IUser {
    id: number;
    name: string;
}

function foobar <SomeType> (url: string): Promise <SomeType> {
    return fetch(url)
        .then(res => res.json())
        .then((result: SomeType) => {
            console.log(result);
            return result

    });
}
foobar<IUser[]>('https://jsonplaceholder.typicode.com/users');