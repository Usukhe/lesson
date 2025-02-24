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
            } else if (students[index].gender === 'female') {
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
let a = 0 ;

for (let index = 0; index < students.length; index++) {
    if (students[index].age >= 21) {
      adultStudent[a] = students[index].name;
      a++;
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

let FemaleStudents = [] ;
let m = 0 ;

let FemaleStudentsPoints = [] ;
let x = 0 ;


for (let index = 0 ; index < students.length ; index++) {
  if (students[index].gender = 'Female') {
    FemaleStudents [m] = students[index].name; 
    m++ ;

    FemaleStudentsPoints [x] = students[index].points; 
    x++ 

  }
}

console.log ("эмэгтэй сурагчдын нэрс болон оноо:", FemaleStudents,  FemaleStudentsPoints);

