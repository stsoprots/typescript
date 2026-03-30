
class User{

    constructor(private id: number, private name: string, private surname: string, private email: string, private phone: string) {
    }
}
// ^
// |
// Це короткий запис ось цього великого коду
//    private id: number;
//     private name: string;
//     private surname: string;
//     private phone: string;
//
//     constructor(id: number, name: string, surname: string, phone: string) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.phone = phone;
//     }

let usersArray: User[] = [];

usersArray.push(new User(1, 'Олександр', 'Коваленко', 'olexandr.kov@example.com', '+380501234567'));
usersArray.push(new User(2, 'Марія', 'Петренко', 'm.petrenko@example.com', '+380672345678'));
usersArray.push(new User(3, 'Андрій', 'Шевченко', 'a.shevchenko@example.com', '+380633456789'));
usersArray.push(new User(4, 'Олена', 'Бондар', 'bondar.olena@example.com', '+380954567890'));
usersArray.push(new User(5, 'Дмитро', 'Мельник', 'd.melnyk@example.com', '+380995678901'));
usersArray.push(new User(6, 'Тетяна', 'Ткаченко', 'tanya.tka@example.com', '+380736789012'));
usersArray.push(new User(7, 'Ігор', 'Кравченко', 'i.kravchenko@example.com', '+380447890123'));
usersArray.push(new User(8, 'Наталія', 'Олійник', 'n.oliynyk@example.com', '+380688901234'));
usersArray.push(new User(9, 'Сергій', 'Поліщук', 's.polishchuk@example.com', '+380939012345'));
usersArray.push(new User(10, 'Юлія', 'Мороз', 'y.moroz@example.com', '+380500123456'));

console.log(usersArray);

//In video
// function User(id, name, surname, email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

// let users = [
//     new User(1, 'Олександр', 'Коваленко', 'olexandr.kov@example.com', '+380501234567'),
//     new User(2, 'Марія', 'Петренко', 'm.petrenko@example.com', '+380672345678'),
//     new User(3, 'Андрій', 'Шевченко', 'a.shevchenko@example.com', '+380633456789'),
//     new User(4, 'Олена', 'Бондар', 'bondar.olena@example.com', '+380954567890'),
//     new User(5, 'Дмитро', 'Мельник', 'd.melnyk@example.com', '+380995678901'),
//     new User(6, 'Тетяна', 'Ткаченко', 'tanya.tka@example.com', '+380736789012'),
//     new User(6_2, 'Ігор', 'Кравченко', 'i.kravchenko@example.com', '+380447890123'),
//     new User(8, 'Наталія', 'Олійник', 'n.oliynyk@example.com', '+380688901234'),
//     new User(9, 'Сергій', 'Поліщук', 's.polishchuk@example.com', '+380939012345'),
//     new User(10, 'Юлія', 'Мороз', 'y.moroz@example.com', '+380500123456')
// ];
// console.log(users);