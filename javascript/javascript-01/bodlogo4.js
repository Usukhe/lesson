
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


console.log("Object");

let person = {
  firstname: "Naraa",
  lastname: "Dorj",
  age: 22,
  address: {
    district: "HUD",
  },
  score: [90, 90, 100],

  hevle: function () {
    console.log("Name:", this.firstname);
  },
};

let person1 = {
  firstname: "Saraa",
  lastname: "Bat",
  age: 22,
  address: {
    district: {
      code: "HUD",
    },
  },
  score: [90, 90, 100],

  hevle: function () {
    console.log("Name:", this.firstname);
  },
};

console.log("Person:", person);
console.log("Person-Name:", person.firstname);
console.log("Person-Ovog:", person.lastname);
// console.log("Person-Nas:", person.age);
console.log("Person-Nas:", person["age"]);

console.log("Person-Nas:", person.address.district);
console.log("Person-Nas:", person.score[2]);

person.hevle();
person1.hevle();

let a = 1000;

let b = 0;
console.log(a);
console.log(b);
b = a;
console.log(a);
console.log(b);

let person3 = { ...person1 };

person3.firstname = "Tsetsgee";

console.log(person3.firstname);
console.log(person1.firstname);

console.log();

// Math.floor

let h = [1, 2];

// h.leng

let too = 100;
too.toFixed(3);
console.log(too);

let zoo = "123.23";

// zoo = Number(zoo) + 100;
// zoo = parseInt(zoo) + 100;
zoo = parseFloat(zoo) + 100;
console.log(zoo.toFixed(2));

let rabbit = {
  name: "bunny",
  color: "white",
};

let mouse = {
  name: "jerry",
  color: "brown",
};

let marmot = {
  name: "walter",
  color: "yellow",
};

let employees = [
  {
    name: "bunny",
    accountnumber: "0012",
    transactions: [
      { date: "2024-09-11" },
      { date: "2024-09-12" },
      { date: "2024-09-13" },
    ],
    color: "white",
    salary: 1000,
  },
  {
    name: "jerry",
    color: "white",
    salary: 1000,
  },
  {
    name: "walter",
    color: "white",
    salary: 1000,
  },
];

for (let index = 0; index < animals.length; index++) {
  console.log("Name: ", animals[index].name);
}


console.log ("geriin daalgwar")

let students = [
    {
      name: 'Сэд-Эрдэнэ',
      age: 19,
      gender: 'male',
      points: 70,
    },
    {
      name: 'Индра',
      age: 19,
      gender: 'female',
      points: 50,
    },
    {
      name: 'Хатнаа ',
      age: 21,
      gender: 'male',
      points: 99,
    },
    {
      name: 'Тэмүүлэн',
      age: 23,
      gender: 'male',
      points: 55,
    },
    {
      name: 'Намуун',
      age: 23,
      gender: 'female',
      points: 85,
    },
  ];
  
  // 1. Өгөгдсөн array-гаас эхний объектыг хэвлэж гаргах
  // 2. Ангид хэдэн эрэгтэй, эмэгтэй сурагч байгааг ол.
  // 3. Сурагчдын насны дунджийг олох функц бичих
  // 4. Нас нь 21-ээс дээш буюу тэнцүү сурагчдыг ол
  // 5. 60-аас дээш оноо авсан cурагчдийг тоол

  
