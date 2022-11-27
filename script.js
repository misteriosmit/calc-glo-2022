// 'use strict';

let money = 90000;
let income = 'фриланс';
let addExpenses = 'Хобби, Коммуналка, Интернет, Авто'; 
let deposit = false;
let mission = 150000;
let period = 6;
let budgetDay = money / 30;


console.log('я умею писать на javascript');
 
console.log(typeof money, income, deposit);
console.log(addExpenses.length);
console.log("Период равен " + period + " месяцев \nЦель заработать "+ mission +" рублей");
console.log(addExpenses.toLocaleLowerCase().split(', '));
console.log( budgetDay);

let num  = 266219;
let str = String(num);
let i;

let sum = 1;

for  (let digit  of str) {
  sum *= Number (digit);

}
console.log(sum);