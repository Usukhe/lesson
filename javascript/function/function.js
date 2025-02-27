console.log("function");




// let x = 100;

// if(x % 2 === 0){
//     console.log("even");
// } else {
//     console.log("odd");
// }


// let arr = [1,2,3,4,5];
// for(let index = 0 ; index < arr.length ; index++ ){
//     if (x % 2 === 0) {
//         console.log("even");
//     } else {
// console.log("odd");
//     }
// }



function tegshOrSondgoi(inputNumber) {
    if (inputNumber % 2 === 0) {
        console.log("even", inputNumber);
    } else {
console.log("odd", inputNumber);
    }
}

console.log ("=========================")

let arr2 = [7,8,9,10];
for(let index = 0 ; index < arr2.length ; index++ ){
    tegshOrSondgoi(arr2[index]);
}

function isEven(inputNumber) {
    if(inputNumber % 2 === 0) {
        return true;
    } else 
    return false;
}


let y = isEven(11);
console.log(y);



let x = 100;

if(isEven(x)){
    console.log('Even')
} else {
    console.log('odd')
}

// arifmetik uildeg hiideg function


// ES5 biciglel 
// function n Declaration 
function nemeh(a,b)
{
   return a + b ;    
}

let add = nemeh(7,3);
console.log("nemeh", add);






// ES6 biciglel 
// Expression

const es6nemeh = (c,d) =>{
    return c + d ;    
};

// const es6nemeh = (c,d) => c + d ; 


// zuvhun neg murtei tohioldold ingej bolno 






let urdun =es6nemeh(50, 60);
console.log("ARROW-ADD", urdun)






function hasah(a,b){

    return a - b ;

}



let v = hasah(7,6);
console.log("hasah", v); 



function huvaah(a,b){

return a / b ;

}

function urjix(a,b){

return a * b ;

}
