let num1;
let num2;
let op;

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
    switch(operations){
        case "+" :
            add(num1,num2);
            break;
        
        case "-" :
            sub(num1,num2);
            break;
        
        case "*" :
            pro(num1,num2);
            break;
        
        case "/" :
            add(num1,num2);
            break;
        default : console.log("Invalid")
    }
}


