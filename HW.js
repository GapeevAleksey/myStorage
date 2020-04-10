'use strict'

let money, time;

// function start() {
//     money = +prompt("Ваш бюджет на месяц?", 100000);
//     time = prompt("Введите дату в формате YYYY-MM-DD", "2020-04-09");

//     while (isNaN(money) || money == '' || money == null) {
//         money = +prompt("Ваш бюджет на месяц?", 100000);
//     }
// }
// start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optExp: {},
    income: [],
    savings: false
};

function chooseExp() {
    for (let i = 1; i <= 3; i++) {
        let ans1 = prompt("Расходы", "Хлеб" + i),
            ans2 = +prompt("Цена", 50);

        if ((typeof (ans1)) === 'string' && (typeof (ans1)) != null
            && (typeof (ans2)) != null && ans1 != '' && ans2 != ''
            && ans1.length < 15) {
            //console.log("Ok");
            appData.expenses[ans1] = ans2;
            console.log(appData.expenses[ans1]);
        } else {
            i = i - 1;
        }
    }
}


chooseExp();

// appData.moneyPerDay = (appData.budget / 30).toFixed();

// alert("Бюджет на день: " + appData.moneyPerDay);

// appData.savings = confirm("Есть накопления?");

// function checkSavings() {
//     if(appData.savings == true) {
//         let save = +prompt("Сколько накопил?", 1650000),
//             percent = +prompt("Какой процент?", 5);

//         appData.monthIncome = (save*(percent/100))/12;
//         alert("Доход со вклада в месяц: " + appData.monthIncome);
//     }
// }
// checkSavings();
