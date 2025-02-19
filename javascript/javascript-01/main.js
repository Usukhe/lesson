console.log("Сайн уу, JS");

let message = "Hello, World"; // Striing
console.log(message);

let age = 42; // Number
console.log(age)

let gpa = 4.5; // Number
console.log(gpa)

let isStudent = true; // Boolean
console.log(isStudent);

let x; // Undefined
console.log(x);

let n = null; // Null
console.log(n);



let a = 10; // Number

console.log("A=",a)

let b = 20; // Number
console.log("B=",b)


let sum = a + b
console.log("a + b =", sum)

let diff = a - b
console.log("a - b =",diff)

let div = a / b
console.log("a / b =",div)

let mul = a * b
console.log("a * b =",mul)

let mod = b % a
console.log("b % a", mod)

console.log("a === b", a === b)
console.log("a !== b", a !== b)
console.log("a > b", a > b)
console.log("a < b", a < b)
console.log("a >= b", a >= b)
console.log("a <= b" , a <= b)
console.log("a === b && a < b", a === b && a < b)
console.log("a !== b && a < b", a !== b && a < b)
console.log("a === b || a < b", a === b || a < b)
console.log("a !== b || a < b", a !== b || a < b)
console.log("a === b || a > b", a == b || a > b);

let birthyears = [1991,1992,1993,1994,1995,1996,1997,1998,1999,2000];
console.log("Birth", birthyears);


console.log("0:", birthyears[0]);
console.log("1:", birthyears[1]);
console.log("2:", birthyears[2]);
console.log("3:", birthyears[3]);
console.log("4:", birthyears[4]);
console.log("5:", birthyears[5]);
console.log("6:", birthyears[6]);
console.log("7:", birthyears[7]);
console.log("8:", birthyears[8]);
console.log("9:", birthyears[9]);

 birthyears[9] = 2024;



let names = new Array("Dorj", "Bat", "Naraa","Saraa","Tsetsgee","Nar","Sar","Od","Mundur");
console.log("Name", names);

let kvadrat =[
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

for(let tooluur=0; tooluur <10; tooluur++){
console.log("0-9toonuud_hevlelt", tooluur);
}

// iteration

let count = 0;
while (count <= 10) {
    console.log("while-aar davtuulaw",count);
    count = count + 1;
}


let counter = 0;
do {
    console.log("do-eer davtuulaw", counter);
    counter= counter + 1;

} while (counter < 5)


    // 1-10 hurtelh tooni niilber bodow

let niilber = 0;   
let too = 1;

while(too < 10){
    niilber = niilber + too;
    too++;
}

console.log("SUM =", sum);
console.log("SUM =", niilber);

let nas = 20;
if (nas >= 18) {
console.log('Таны нас:', nas);
console.log('Та насанд хүрсэн байна.');
}


 let weekNumber = 1;
 let weekName;
 if (weekNumber === 1) {
    weekName = 'Даваа';
 } else if (weekNumber == 2) {
    weekName = 'Мягмар';
 } else if (weekNumber == 3) {
    weekName = 'Лхагва';
 } else if (weekNumber == 4) {
    weekName = 'Пүрэв';
 } else if (weekNumber == 5) {
    weekName = 'Баасан';
 } else if (weekNumber == 6) {
    weekName = 'Бямба';
 } else if (weekNumber == 7) {
    weekName = 'Ням';
 } else {
    weekName = 'Буруу тоо';
 }
 console.log(weekName);

let r = 4 ;
let f = 18 ;
let s = 13 ;
let perimetr = r + f + s ;
console.log ("1-r bodlogo", perimetr);
 

// 2 bodlogo

let hoyrA = 1 ;
let hoyrB = 3 ;
let hoyrC = 5 ;
let hoyrD = 6 ;
let hoyrE = Math.round(9.8) ;

let hoyrNiilber = hoyrA + hoyrB + hoyrC + hoyrD + hoyrE;
console.log ("2-r bodlogo", hoyrNiilber);


// 3 bodloogo

let urta = 10 ;
console.log ("bodlogo3 urt", urta);
let orgoni = 5 ;
console.log ("orgon", orgoni);
let talbair = urta * orgoni ;
let perimetre = urta + orgoni ;
console.log ("talbai", talbair);
console.log (" perimtr", perimetre);


//4 bodlogo

let totalSec = 98;
let sec = 0;
let min = 0;

sec = totalSec % 60;
min = Math.floor(totalSec / 60);

console.log("Bodlogo-4: ugugdsun sec iig min sec hurvuul:", totalSec);
console.log("Bodlogo-4: hariu:", min + "min" + sec + "sec");

//5 bodlogo

    let totalSecond = 1297;
    console.log("Bodlogo-5: ugugdsun sec iig tsag minut sec bolgo", totalSecond);
    let second = 0;
    let minute = 0;
    let hour = 0;
    
    second = totalSecond % 60;
    minute = Math.floor(totalSecond / 60);
    hour = Math.floor(minute / 60);

    console.log("Bodlogo-5: hariu", hour + "hour" + minute + "min" + second + "sec")