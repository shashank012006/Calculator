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
    num1 = Number(num1)
    num2 = Number(num2)
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
const equal = document.querySelector(".btn.equal");

function updateDisplay() {
    display.textContent = num1 + op + num2;
}

function equalCall(){
    if(num1 == "" || num2 == "" || op == ""){
        return
    }

    num1 = String(operate(num1,num2,op))
    num2 = ""
    op = ""
}

equal.addEventListener("click",equalCall);

document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("operator") || button.classList.contains("equal")) {
            return; 
        }
        
        if(op == ""){
            num1 += button.textContent.trim();
        }
        else{
            num2 += button.textContent.trim();
        }
    })
});

document.querySelectorAll(".btn.operator").forEach((button) => {
    button.addEventListener("click", () => {
        if (op != "") {
            equalCall();
        }
        op = button.textContent.trim();
    });
});

document.querySelectorAll("button").forEach((button)=> {
    button.addEventListener("click",() => {
        updateDisplay()
    })
});
