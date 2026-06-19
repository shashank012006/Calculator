
const num1 = Number(prompt("Enter a : "));
const num2 = Number(prompt("Enter b : ")); 
const operations = prompt("Enter operation");

operate(num1,num2,operations)

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
    if (operations === "add"){
        add(num1,num2)
    }
    else if (operations === "sub"){
        sub(num1,num2)
    }
    else if (operations === "pro"){
        pro(num1,num2)
    }
    else if (operations === "divi"){
        divi(num1,num2)
    }
}

