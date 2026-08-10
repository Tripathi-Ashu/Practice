// console.log('Hello ashutosh');

// // code 
//  const p1= fetch("https://api.github.com/users");
// // console.log(p1);

// // p1.then((Response)=> {
// //     console.log(Response.json())
// // })


// // const p2 = p1.then((Response) => {
// //     return Response.json();
// // });

// // p2.then((Response) => {
// //     console.log(Response);
// // });


// // console.log(p2);
// // Promiss chaining


// fetch('https://api.github.com/users').then((Response) => {
//     return Response.json();

//     if(!Response.ok){
//         throw new Error('Data is not peresent in server');
//     }
//     return Response.json();
// })
// .then((data) => {
//     //console.log(data);
   
//     const parent = document.getElementById('first');
    
//     for(let i=0; i<data.length; i++) {
//     const image =  document.createElement('img');
//     image.src = data[i].avatar_url;
//     image.style.height = '40px';
//     image.style.width ='40px';
    
//     parent.append(image);
//     }

// })
// .catch((error)=> {
//     const parent = document.getElementById('first');
//     parent.textContent = error.message;
// });


// reject --> Internet Down , Server Down ,  DNS Down .

// const p9 = new Promise((resolve , reject)=> {

//     resolve({
//         name:'Rohit',
//         age:30
//     });
// });



// Zomato Application

const orderDetail = {
    orderId: 121212,
    food: ['Pizza', 'Pasta'],
    cost: 560,
    customer_name: 'Ashutosh'
};

// 1. Place Order
function placeOrder(orderDetail) {
    console.log(`${orderDetail.cost} payment is required`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Payment is received");

            // Agar payment successful hai
            resolve(orderDetail);

            // Agar payment fail ho:
            // reject(new Error("Payment failed"));
        }, 4000);
    });
}

// 2. Prepare Order
function preparingOrder(orderDetail) {
    console.log("Your food preparation started");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order is preparing");

            resolve(orderDetail);
        }, 3000);
    });
}

// 3. Pickup Order
function pickupOrder(orderDetail) {
    console.log("Delivery boy is on the way to pick up");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("I have picked up the order");

            resolve(orderDetail);
        }, 3000);
    });
}

// 4. Deliver Order
function deliverOrder(orderDetail) {
    console.log("I am on the way");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("I have delivered this order");

            resolve(orderDetail);
        }, 3000);
    });
}


// Promise Chain
placeOrder(orderDetail)
    .then((orderDetail) => preparingOrder(orderDetail))
    .then((orderDetail) => pickupOrder(orderDetail))
    .then((orderDetail) => deliverOrder(orderDetail))
    .then((orderDetail) => {
        console.log("Order completed:", orderDetail);
    })
    .catch((error) => {
        console.log("Error:", error.message);
    });




    