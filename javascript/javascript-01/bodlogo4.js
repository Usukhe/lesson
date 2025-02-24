
// for example

// 1 -> 100 niilber

// let sum = 0;
// for (let tooluur = 0; tooluur < 100; tooluur = tooluur + 1) {
//   // sum = sum + tooluur;
//   if (tooluur % 2 === 0) {
//     sum += tooluur;
//   }
// }

// // 1234
// let x = 1234;
// let digit = 0;
// let s = 0;
// let count = 0;

// while (x !== 0) {
//   digit = x % 10;
//   s = s + digit;
//   x = (x - digit) / 10;
//   count++;
//   console.log("=============");
//   console.log("D: ", digit);
//   console.log("S: ", s);
//   console.log("X: ", x);
//   console.log("=============");
// }
// console.log("SUM", kk);
// console.log("SUM", s);
// console.log("COUNT", count);



//bodlgo 4-1

console.log ("bodlogo 4-1 ugugdsun eyreg toonii urvuug hevle 1234 ")

let eyregtoo = 1234;
let digit = 0;
let reverse = 0;

while(eyregtoo !== 0){
    digit = eyregtoo % 10;
    reverse = reverse * 10 + digit;
    eyregtoo = (eyregtoo - digit) / 10;
}
// console.log ("Ld", digit);
console.log ("esreg too", reverse);


// console.log ("turshilt")

// let turshilttoo = 1234;
// let tdigit = 0;
// let treverse = 0;

// while(turshilttoo !== 0){
//     tdigit = tturshilttoo % 10;
// }

// bodlogo array dotorx hamgn baga toog ol

let arr = [2, 4, 5, 7, 1 , -2 , 0];
let minarr = arr[0];

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
    if (minarr > arr[index]) {
        minarr = arr[index]; 
    }
}

console.log("Min", minarr);


// // 2hemjeest

// let arr2d = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
// ];

// for (let rrd = 0; rrd < arr2d.length; rrd++) {
//     for (let ccd = 0; ccd < arr2d/length; ccd++) {
//         console.log("2dssss", arr2d[rrd][ccd]);
//     }
// }

// let arld = [2, 1, 9, 5, 7];
// // sort => bubble sort

// for (let m = 0; m < arld.length; m++) {
//     for (let ls = m + 1; ls < arld.length; ls++) {
//         if (arld[m]) > arld[ls] {
//             let temporary = arld[m];
//             arld[m] = arld[ls];
//             arld[ls] = temporary;
//         }
//     }
// }
     


// console.log("Sorted", arld);



