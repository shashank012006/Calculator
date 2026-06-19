function userInput(){
    const a = Number(prompt("Enter a : "))
    const b = Number(prompt("Enter b : "))
    const operation = prompt("Enter a operation (add,sub,pro,div) : ")

    calculator(a,b,operation)
}

function calculator(a,b,operation){
    if (operation === "add"){
        console.log(a+b)
    }
    else if (operation === "sub"){
        console.log(a-b)
    }
    else if (operation === "pro"){
        console.log(a*b)
    }
    else if (operation === "div"){
        console.log(a/b)
    }
}

userInput()

