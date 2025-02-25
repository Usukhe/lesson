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

    //6 bodlogo

    let totalS6ec = 88;
    let totalM6in = 875;
    let s6ec = 0;

    
   s6ec = (totalM6in * 60)

   console.log("Bodlogo-6: ugugdsun",totalM6in, "min", totalS6ec, "sec" , "iig sec bolgo")
   console.log("Bodlogo-6: hariu", s6ec + totalS6ec + "sec")

   // 7 bodlogo


   let totalH7our = 83;
   let totalM7in = 84;
   let s7ec = 85;
   

   m7in = 60 ;
   h7our = 60 * 60 ;
   totalS7ec = (totalH7our * h7our) + (totalM7in * m7in) + s7ec


   console.log ("Bodlogo-7: ugugdsun tsag min sec iig sec bolgo", totalH7our, "hour", totalM7in, "min", totalS7ec, "sec")
   console.log ("Bodlogo-7: hariu", totalS7ec + "sec")
   

   // 1jil 2 udur 3 tsag 4minute 4 second g second ruu shiljuul 

   let niit8Jil = 3;
   let niit8udur= 16;
   let niit8tsag = 20;
   let niit8minute = 4;

   let j8il = 365*24*60*60;
   let u8dur = 24*60*60;
   let ts8ag = 60*60;
   let m8inute = 60;
   let s8econd= 4 ;

   total8second = (j8il * niit8Jil) + (u8dur * niit8udur) + (ts8ag * niit8tsag) + (m8inute * niit8minute) + s8econd

   console.log ("Bodlogo 7-1: /zohioson/ 1jil 2udur 3 tsag 4minute 4 second g second ruu shiljuul")
   console.log ("Zohioson bodlogo hariu:", total8second + "seconds" )

  
   // bodlogo 2-1 

   let q1too = 3;
   let q2too = 2;
   let q3too = 11;
   let q4too = 7;

console.log ("Bodlogo 2-1: Tegsh sondgoig ol 3,2,11,7 ")
   // console.log ( "Tegsh too", q2too,)
   // console.log ( "Sondgoi too", q1too, q3too , q4too)

   if (q1too % 2 === 0) { q1too === 'Tegsh too'; } 
   else { q1too === 'Sondgoi too' }

   if (q2too % 2 === 0) { q2too === 'Tegsh too'; } 
   else { q2too === 'Sondgoi too' }

   if (q3too % 2 === 0) { q3too === 'Tegsh too'; } 
   else  { q3too === 'Sondgoi too' }

   if (q4too % 2 === 0) { q4too === 'Tegsh too'; } 
   else  { q4too === 'Sondgoi too' }
   
   console.log("Bodlogo 2-1", q1too, q2too, q3too, q4too);

// bodlogo 2-2
console.log ("Bodlogo 2-2 ogogdsn 3 toonii bagiig ol (9,3,2)")

   let w1too = 9;
   let w2too = 3;
   let w3too = 2;

   if (w1too < w2too && w1too < w3too ) {
   w1too = 'hamgiin baga too';
   }
   else if ( w2too > w3too )
      w3too = 'hamgiin baga too';

   console.log ( w1too, w2too, w3too )


   // bodlogo 2-3
   console.log ("Bodlogo 2-3 ogogdsn 3 toonii ixiig ol (7,1,12)")


   let e1too = 7;
   let e2too = 1;
   let e3too = 12;

   if (e1too > e2too && e1too > e3too) {
      console .log (e1too , 'hamgiin ix too')
   }
   else if ( e2too > e3too && e2too > e1too )
      console .log (e2too , 'hamgiin ix too')
   else if ( e3too > e2too && e3too > e1too)
      console .log (e3too , 'hamgiin ix too')

  

  
   
   // bodlogo 2-4
   
   console.log ("Bodlogo 2-4 ogogdsn 3toonii 5 aas baga toonuudin urjveriig ol (2 9 4")

   let r1too = 2;
   let r2too = 9;
   let r3too = 4;

   let rtoourjver = 0;
      
   if (r1too >= 5) 
      r1too = 1 ;

    if (r2too >= 5) 
      r2too = 1 ;

    if (r3too >= 5) 
      r3too = 1 ;

 (rtoourjver = r1too * r2too * r3too)

console.log ("tavaas baga toonii urjver hariu:", rtoourjver  )
   
// bodlogo 2-5 

console.log ("Bodlogo 2-5 ogogdsntoonii 5aas ix toonuudin urjveriig ol (11,9,4,3)")
   
let t1too = 11;
let t2too = 9;
let t3too = 4;
let t4too = 3;
 
let ttoourjver = 0;

if (t1too <= 5)
   t1too = 1 ;

if (t2too <= 5)
   t2too = 1 ;

if (t3too <= 5)
   t3too = 1 ;

if (t4too <= 5)
   t4too = 1 ;

ttoourjver = t1too * t2too * t3too * t4too

console.log ("hariu 5aas ix toonuudin urjver:", ttoourjver)


// bodlogo 2-6

console.log ("bodlogo 2-6 ogogdsn sar ali uliral ve")

let qsar = 2;


if (qsar === 12 || qsar === 1 || qsar === 2) {
  console.log("uvliin uliral baina"); 
}
else if (qsar === 3 || qsar === 4 || qsar === 5) {
   console.log("havriin uliral baina.")
}
else if (qsar === 6 || qsar === 7 || qsar === 8) {
   console.log("zunii uliral baina.")
}
else if (qsar === 9 || qsar === 10 || qsar === 11) {
   console.log("namriin uliral baina.")
} else {
   console.log("tanii oruulsn sariin too buruu baina.")
}
   



//   console.log (t1too, t2too , t3too ,t5too )
//   console.log ("hariu 5aas ix toonuudin urjver:", ttoourjver)


// bodlogo 2-7

console.log ("bodlogo 2-7 shalgaltiin dung dugne")




let nams = ["bat", "ochir"];
let dun = [67, 59];

for (let i = 0; i <2; i++) {

   if (dun[i] < 60 ) {
      console.log("Name: ", nams[i] )
      console.log("mash muu")
   }
   else if (dun[i] >= 60 && dun[i] < 70) {
      console.log("Name; ", nams[i])
      console.log("hangalttai")
   }
   else if (dun[i] >= 70 && dun[i] < 80) {
      console.log("dund")
   }
   else if (dun[i] >= 80 && dun[i] < 90) {
      console.log("sain")
   }
   else if (dun[i] >= 90 && dun[i] < 100) {
      console.log("hangalttai")
   }
   else {
      console.log ("buruu dun")
   }

}

//  bodlogo 3-1

console.log ("bodlogo 3-1 1-100 hurtelh toonii tegsh toog hevle");


console.log("hariu" )
for (let v = 1; v <= 100; v++ ) {
   if (v % 2 === 0) {
      console.log("tegsh too:", v )
   }
}

// bodlogo 3-2

console.log ("bodlogo 3-2 1-100 hurtelh toonii sondgoi toog hevle");

console.log("hariu")
for (let vv = 1; vv<=100; vv++ ) {
   if (vv % 2 === 1) {
      console.log("sondgoi too:", vv)
   }
}

// bodlogo 3-4

console.log ("bodlogo 3-3 n=200 ugugdsn toonuudin tegsh toonii urjver");

let xx = 1;
let xxurjver = 1;

for (xx = 1 ; xx <= 200; xx++) {
   if (xx % 2 === 0)
   xxurjver = xxurjver * xx;

   }
   console.log ("hariu:", xxurjver)

     // 1-10 hurtelh tooni niilber bodow

// let niilber = 0;   
// let too = 1;

// while(too < 10){
//     niilber = niilber + too;
//     too++;


// bodlogo 3-5

console.log ("bodlogo 3-4 n-200 ugugdsun tonuudin sondgoi toonii niilber");

let zz = 1;
let zzniilber =0;

for (zz = 1 ; zz <= 200 ; zz++) {
   if (zz % 2 === 1)
      zzniilber = zz + zzniilber;
}
console.log ("hariu", zzniilber);


// bodlogo 3-6

console.log ("bodlogo 3-6 ugugdsun too hurtel heden sondgoi tsipr baugaag ol", "n=148")

let ccsondgoitsiprniilbe = 0;
let ccsondgoitsipr = 0;

for (let index = 0 ; index <=148 ; index ++)


   

















   

 


     



