
let products = [
    { name: "Гурил", price: 1500, quantity: 5 },
    { name: "Сүү", price: 3500, quantity: 2 },
    { name: "Өндөг", price: 500, quantity: 30 },
    { name: "Талх", price: 2000, quantity: 4 },
    { name: "Цагаан будаа", price: 4000, quantity: 30 },
    { name: "Элсэн чихэр", price: 3000, quantity: 2 },
    { name: "Давс", price: 1000, quantity: 1 },
    { name: "Цай", price: 5000, quantity: 2 },
    { name: "Самар", price: 8000, quantity: 1 },
    { name: "Жимс", price: 6000, quantity: 5 },
    { name: "Ногоо", price: 2500, quantity: 7 },
    { name: "Шоколад", price: 7000, quantity: 3 }
  ];
  

  // 1. Өгөгдсөн бүтээгдэхүүний нэрийг хэвлэ.
  // 2. Өгөгдсөн бүтээгдэхүүний нийт тоо ширхэгийг ол
  // 3. Өгөгдсөн бүтээгдэхүүний нийт үнийн дүнг ол
  // 4. Өгөгдсөн бүтээгдэхүүний 3000₮-өөс дээш үнэтэй бүтээгдэхүүнүүдийг хэвлэ
  // 5. Өгөгдсөн бүтээгдэхүүний хамгийн хямд бүтээгдэхүүний нэрийг олж хэвлэ
  // 6. Өгөгдсөн бүтээгдэхүүний хамгийн их тоо ширхэгтэй бүтээгдэхүүнийг хэвлэ
  // 7. Өгөгдсөн бүтээгдэхүүний 5-аас доош үлдсэн бүтээгдэхүүнүүдийг жагсаах
  // 8. Өгөгдсөн бүтээгдэхүүн дотор X бүтээгдэхүүн  байгаа эсэхийг шаалга байвал мэдээллийг нь хэвлэ
  
  // 1. 

  console.log ("1. Өгөгдсөн бүтээгдэхүүний нэрийг хэвлэ.") ;
  
  for (let index = 0 ; index < products.length ; index++) {
    console.log (products[index].name) ;
  } 
 
//   2.

let totalQuantity = 0 ;

for (let index = 0 ; index < products.length ; index++) {

    totalQuantity = products[index].quantity + totalQuantity ;
    
}

console.log ("2. Өгөгдсөн бүтээгдэхүүний нийт тоо ширхэгийг ол." ,  totalQuantity) ;


// 3. 

let totalPrice = 0 ;

for (let index  = 0 ; index < products.length ; index++) {

    totalPrice = products[index].price + totalPrice ;
}

console.log ("3. Өгөгдсөн бүтээгдэхүүний нийт үнийн дүнг ол" , totalPrice) ;

// 4.

let highPrice = [] ;
let p = 0 ;

for (let index = 0 ; index < products.length ; index++) {
    if (products[index].price > 3000) {

        highPrice[p] = products[index] ;
        p++ ;
       
    } 
}

console.log ("4. Өгөгдсөн бүтээгдэхүүний 3000₮-өөс дээш үнэтэй бүтээгдэхүүн" , highPrice);

// 5.

let lowestPrice = products[0];

for (let i = 1 ; i < products.length ; i++) {
    if (products[i].price < lowestPrice.price) {
        lowestPrice = products[i];
    }
}

console.log("5. Өгөгдсөн бүтээгдэхүүний хамгийн хямд бүтээгдэхүүний нэрийг олж хэвлэ", lowestPrice) ;

// 6. 

let highestQuantity = products[0];

for (let i = 1 ; i < products.length ; i++) {
    if (products[i].quantity > highestQuantity.quantity) {
        highestQuantity = products[i];
    }
}

console.log("6. Өгөгдсөн бүтээгдэхүүний хамгийн их тоо ширхэгтэй бүтээгдэхүүнийг хэвлэ" , highestQuantity) ;

// 7 .

let lessQuantity = []
let q = 0 ;

for (let i = 0 ; i < products.length ; i++) {
    if (products[i].quantity < 5) {
       lessQuantity[q] = products[i] ;
       q++ ;
       
    }
}

console.log ("7. Өгөгдсөн бүтээгдэхүүний 5-аас доош үлдсэн бүтээгдэхүүнүүд" , lessQuantity);


// 8 / 

let x = "Талх" ;
let similar = 0 ;


for (let i = 0 ; i < products.length ; i++) {
    if (products[i].name === x) {
     similar++   
    }
} 

console.log ("8. Өгөгдсөн бүтээгдэхүүн дотор X бүтээгдэхүүн  байгаа эсэхийг шалга", similar , x) ;







  