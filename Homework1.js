'use strict'

let money = +prompt("Ваш бюджет на месяц?", "50000");
console.log(money);
let time = +prompt("Введите дату в формате YYYY-MM-DD", "20200117");
console.log(time);

    let appData = {
        budjet: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        saving: false
    }

    let a1 = +prompt("Введите обязательную статью расходов в этом месяце", "Еда"), 
        a2 = +prompt("Во сколько обойдется?", "10000"),
        a3 = +prompt("Введите обязательную статью расходов в этом месяце", "Еда"), 
        a4 = +prompt("Во сколько обойдется?", "10000");
    
    console.log(appData.expenses);