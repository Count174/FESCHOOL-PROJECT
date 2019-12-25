homework5questionmark

А) Создайте класс Human в котором есть свойства: 
name;
lastName;
геттер , возвращающий фразу “Hello Name LastName”;
Сеттер, устанавливающий префикс для геттера выше, например: “Hello”;
Б) Создайте класс расширяющий класс выше и добавляющий свойство age и метод isAdult возвращающий true если возраст указан 18 и больше.
В) Создайте массив из объектов второго класса, но с различным значениям свойств. Создайте от него несколько массивов:
Только четные
Только совершеннолетние
Только имена несовершеннолетних

П.С. Проявите творческий подход, примените все возможности языка из урока. 
П.П.С. Попробуйте пофантазировать и доработать классы через новые расширения, добавить свойства и методы, геттеры, сеттеры.


A)

class Human {
	constructor(name, lastName) {
		this.name = name;
		this.lastName = lastName;
	}
	get.name() {
		if(this.name) {
			return 'Hello' + this.name.toUpperCase() + this.lastName.toUpperCase();
		} else {
			return undefined;
		}
	}
	set name(Oleg) {
		if (Oleg == this.name) {
			return ('Hello, the GOAT' + 'this.name');
		} else {
			return 'Hello' + this.name.toUpperCase() + this.lastName.toUpperCase();
		}
	}
}

Б)

class Human {
	constructor(name, lastName, age) {
		this.name = name;
		this.lastName = lastName;
		this.age = age;
	}
isAdult() {
	if (this.age >= 18) {
		return ('true');
	} else {
		return ('false');
	}
}
}

B) 

function abc(a, b, c) {
	console.log(a, b, c)
}
let human = [
{name: 'Petro' } ,  
{lastName: 'Keroff' }, 
{age: '19' }
];
abc(...human); // Petro Keroff 19

-----

var mySet = new Set();

var age = {Oleg: 22, Olga: 23, Petro: 24, Filipp: 37, John: 32}
mySet.add(age)

var myArr = Array.from(mySet);

isChetniyAge() {
	if (age % 2 == 0) {
		return (age);
	} else {
		return ('His/Her age is not Chetniy, sorry')
	}
}

-------
studentsAge = new Array(
{"name":'Kristine', "age":'18'},
{"name":'Lera', "age":'17'},
{"name":'Kolya', "age":'19'},
{"name":'Petro', "age":'25'},
{"name":'Ivan', "age":'15'}
	);

function isAdult() {
	if (age >= 18) {
		console.log(name + age);
	} else {
		return ('They are not adults');
	}
}
