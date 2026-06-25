function add(num1,num2){
    return num1 + num2
}
function sub(num1,num2){
    return num1 - num2
}
function pro(num1,num2){
    return num1 * num2
}
function divi(num1,num2){
    return num1 / num2
}

function operate(num1,num2,operations){
    switch(operations){
        case "+" :
            return add(num1,num2);
        
        case "-" :
            return sub(num1,num2);
        
        case "*" :
            return pro(num1,num2);
        
        case "/" :
            return divi(num1,num2);
        default : console.log("Invalid")
    }
}

let num1 = "";
let num2 = "";
let op = "";

const display = document.querySelector("#display");

function updateDisplay() {
    display.textContent = num1 + op + num2;
}

Array.from(document.querySelectorAll(".btn")).slice(0, 10).forEach((button) => {
    button.addEventListener("click", () => {
        const val = button.textContent;
        console.log("Clicked:", val);

        if (op === "") {
            if (num1.length < 10) num1 += val;
        } else {
            if (num2.length < 10) num2 += val;
        }

        updateDisplay();
    });
});