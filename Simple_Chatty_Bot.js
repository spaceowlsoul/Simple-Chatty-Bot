const input = require('sync-input');

function greet(botName, birthYear) {
	console.log(`Hello! My name is ${botName}. \n I was created in ${birthYear}.`);
}

function remindName() {
	let name = String(input());
	console.log(`Please, remind me your name.\n What a great name you have ${name}!`);
}

function guessAge() {
	console.log(`Let me guess your age.
	Enter remainders of dividing your age by 3, 5 and 7.`);
	let rem3 = Number(input());
	let rem5 = Number(input());
	let rem7 = Number(input());

	let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;

	console.log(`Your age is ${age}; that's a good time to start programming!`);
}

function count() {
	console.log(`Now I will prove to you that I can count to any number you want.`);

	let number = Number(input());
	let i = 0;

	while (i <= number) {
		console.log(`${i++}!`);
	}
}

function test() {
	
	console.log(`Let's test your programming knowledge.
	Why do we use methods?
	1. To repeat a statement multiple times.
	2. To decompose a program into several small subroutines.
    3. To determine the execution time of a program.
	4. To interrupt the execution of a program.`);

	let rightAnswer = 2;
	let answer = Number(input());
	while (answer !== rightAnswer) {
		console.log(`Please, try again.`);
		answer = Number(input());
	}
}

function end() {
	console.log(`Congratulations, have a nice day!`);
}

greet('Aid', '2020');
remindName();
guessAge();
count();
test();
end();