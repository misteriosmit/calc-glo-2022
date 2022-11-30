// 'use strict';

let money = 90000,
 income = 'фриланс',
 addExpenses = 'Хобби, Коммуналка, Интернет, Авто',
 deposit = false,
 mission = 150000,
 period = 6,
 expenses1, 
 expenses2, 
 amount1,
 amount2,
 budgetMonth,
 budgetDay;

money = prompt ('Ваш месячный доход?', 12000);
addExpenses = prompt (' “Перечислите возможные расходы за рассчитываемый период через запятую”', 'кино, машина, шашлыки');
deposit = confirm ('Есть ли у вас депозит в банке?');
expenses1 = prompt('Введите обязательную статью расходов?', 'еда');
amount1 = prompt ('Во сколько это обойдется?', 5000);
expenses2 = prompt('Введите обязательную статью расходов?', 'одежда');
amount2 = prompt ('Во сколько это обойдется?', 2000);

budgetMonth = money - amount1 - amount2;

period = Math.ceil(mission / budgetMonth);
budgetDay = Math.floor(budgetMonth / 30);



console.log('месячный бюджет равен ', budgetMonth);
console.log('возможные расходы', addExpenses);
console.log('месячный доход', money);
console.log('депозит в банке ', (deposit) ? 'имеется' : 'отсутствует');
console.log('я умею писать на javascript');
 
console.log(typeof money, income, deposit);
//console.log(addExpenses.length);
console.log("Период равен " + period + " месяцев \nЦель заработать "+ mission +" рублей");
console.log(addExpenses.toLocaleLowerCase().split(', '));
console.log( 'дневной бюджет ', budgetDay);

if(budgetDay >= 1200){
  console.log('У вас высокий уровень дохода');
} else if(1200 < budgetDay > 600){
  console.log('У вас средний уровень дохода');
} else if(600 <= budgetDay > 0){
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay <= 0){
console.log('Что то пошло не так');
}

/*
let num  = 266219;
let str = String(num);
let i;

let sum = 1;

for  (let digit  of str) {
  sum *= Number (digit);

}
console.log(sum);*/