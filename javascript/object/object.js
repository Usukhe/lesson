// console.log("object");

// let person = {
//     firstname: "Naraa",
//     lastname: "Dorj",
//     age: 22,
//     address: {
//         district: "HUD"
//     },
//     score: [90, 90, 100],
// };

// console.log("Person", person);
// console.log("Person-name", person.firstname);
// console.log("Person-name", person.lastname);
// console.log("Person-nas", person.age);
// console.log("Person-nas", person["age"]);
// console.log("Person-adress", person.address.district);
// console.log("score", person.score[2]);


///////

console.log("GeriinDaalgawar")

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


  console.log ("1.firstobject", students[0]);

//   2. 
        let male = 0;
        let female = 0;
        
        for (let index = 0; index < students.length; index++) {
            if (students[index].gender === 'male' ) {
                male++;
            } else {
                female++
            }
        }
// let index = 0;
//         while (i < students.length) {
//             if (students[i].gender === 'male') {
//                 male++;
//             } else if (students[i].gender === 'female') {
//                 female++;
//             }
//             i++;
//         }
console.log("2.","eregtei:", male);
console.log("emegtei:", female);


// 3. 

        
let sumStudentsAge = 0;

for (let index =0; index  < students.length; index ++) {
  sumStudentsAge = sumStudentsAge + students[index].age; 
}
  
sumStudentsAge = Math.round(sumStudentsAge/students.length);
console.log("3.Сурагчдын дундаж нас: ", sumStudentsAge);


// 4.

let adultStudent = [];
// let a = 0 ;

for (let index = 0; index < students.length; index++) {
    if (students[index].age >= 21) {
      adultStudent[index] = students[index].name;
      
    }
    
}

// let index = 0

// while (index < students.length){
//   if (students[index].age >= 21) {
//     adultStudent++ ;
//   }
// index++ ;
// }

console.log("4. 21 ээс дээш насны сурагчид:", adultStudent );


5. 

let goodPointStudent = 0;
let point = 0;

while (point < students.length) {
  if (students[point].points > 60) {
    goodPointStudent++ ;
  }
  point++ ;
}

// for ( point = 0 ; point < students.length; point++){
//   if (students[point].points > 60) {
//     goodPointStudent++ ;
//   }
// }

console.log("6. 60 ээс дээш оноо авсан сурагчдын тоо:", goodPointStudent );


// 6. Зохиомол бодлого дээрх Массиваас  19-21 насны сурагчдын онооны нийлбэрийг ол

let sumPoint = 0;

for ( let index = 0 ; index < students.length; index++) {
  if (students[index].age >= 19 && students[index].age <= 21) {

  sumPoint = sumPoint + students[index].points;
  }

}

console.log("niilber:", sumPoint);

// 7. Зохиомол бодлого дээрх Массиваас  эмэгтэй сурагчдын нэрс болон оноо

let femaleStudents = [] ;
let m = 0 ;




for (let index = 0 ; index < students.length ; index++) {
  if (students[index].gender = 'Female' && students[index].age >=21) {
    femaleStudents[m] = students[index]; 
    m++ ;
  }
}

console.log ("эмэгтэй сурагчдын нэрс болон оноо:", femaleStudents );




// console.log("=========================")
// console.log("Бодлого 3-5")
// let urj1 = 1;
// for (i=1; i<=200; i++){
//     if(i%2 !== 0){
//         urj1 = urj1 * i
//     }
// }

let n = 5 ; 
let hurd = 0

for (let u = 1 ;  u <= 10 ; u++ ) {

hurd = n * u

 
console.log ("answer", n, "*", u, "=" , hurd,) ;
}


let arr = [2,3,5,8,3]; 
const x = 3;
let similar = 0;

for (let index = 0 ; index < arr.length ; index ++) {
  if ( arr [index] === x) {
    similar++
  }
}

// console.log ("x too heden udaa orsn:" , similar)





// array g esreg bolgo

let r = [4 , 5, 6 ,7, 8];
let rreverse = [];

let j = 0;


for ( let i = r.length - 1; i >= 0 ; i --){
  rreverse[j] = r[i];
  j++;
  
}

console.log ("reverse:", rreverse)








