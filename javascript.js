

// we want our website to take inputs on incoms and expenses to give us the result of a budget 

//array to the three different 
var listIncome = [];
var listExpense = [];
var listTotal = [];

var list;

function add() {

    var operator = document.getElementById("operator").value; // choose between plus(+) or minus(-)
    var number = document.getElementById("value").value * 1; // value of what you put inside the description
    var txt = document.getElementById("description").value; // describing if it's an income or expense
    var totalBudget = document.getElementById("totalBudget"); // total of the amount input



    var div; // variabels list and div 



    if (operator === "+") { // === to make sure it does + 
        list = listIncome; // we make a list for everytime we press add (when it's and income)
        div = document.getElementById("income-h1"); // the list's name is "income-h1"

        listTotal.push(Number(number)); //converting it to Number(number)
    }

    else {
        list = listExpense; // we make a list for everytime we press add (and it's an expense)
        div = document.getElementById("expenses-h1"); // the list's name is "expenses-h1"

        listTotal.push(Number(-number)); //converting it to Number(numer)

    } // if not take it as an expense 
    //totalBudget(listIncome, listExpense)

    var total = 0;  // total needs to be 0, so it can count what want in input 

    for (var i = 0; i < listTotal.length; i++) {
        total += listTotal[i]; //total is 0 + 0 = the amount that we put in
    }

    console.log(listTotal)
    totalBudget.innerText = total //the total will show in html at "totalbudget"

    //the list to see both income and expense 
    list.push({ num: number, text: txt });
    div.innerHTML = "";
    for (var i = 0; i < list.length; i++) {
        div.innerHTML += list[i].text + " ";
        div.innerHTML += list[i].num + "<br>";
    }
    console.log(list.length)



    // this function is to create a clear button to clear the whole site
    function clear() {

        location.reload()

        /*  console.log("hej")
         list = [] */
    }

    var clearButton = document.querySelector("#clear")
    console.log(clearButton)

    clearButton.addEventListener("click", clear);
}