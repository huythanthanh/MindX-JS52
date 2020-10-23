let a = [2, 2, 2, 2, 2];

let inputNumber = Number(prompt("Enter number x!?"));

for(let i = 0; i < a.length; i++){
    for(let j = i+1; j < a.length; j++){
        if(a[i]+a[j] == inputNumber){
            console.log("("+i+", "+j+")");
        }
    }
}