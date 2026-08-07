// // zomato application
// const orderDetail = {
//     orderId: 121212,
//     food: ['Piza' , 'papa'],
//     cost:560,
//     customer_name:'Ashutiosj'
// }


// function placOrder (callback , orderDetail) {
//     console.log(`${cost} paymentis itna`);

//     setTimeout(() => {
//         console.log("Peyement is recive");

//         callback(orderDetail);
//     }, 4000);
// };

// function preparingOrder(orderDetail) {
//     console.log("your food prepare started");

//     setTimeout( () =>{
//         console.log('order is preparing');
//         pickupOrder();
//     }, 3000)
// };

// function pickupOrder() {
//     console.log('Dilivery boy is  on the way  to pick up');

//     setTimeout(() => {
//         console.log('I have up the order');
//     }, 3000);
// }


// // placOrder(preparingOrder(pickupOrder));// ese nhi ho saka hai ;

// function deliverOrder() {
//     console.log('I am on the way');

//     setTimeout(() => {
//         console.log("I have deleiver this orer ");
//     }, 3000)
// }

// const Callback = (orderDetail)=> {
//     preparingOrder(orderDetail);
// }

// placOrder(orderDetail ,()=> {
//     preparingOrder();
// }
// );
// // placOrder(orderDetail ,()=> {
// //     preparingOrder(orderDetail ,() => {
// //         pickupOrder(() => {
// //            deliverOrder();
// //         })
// //     });
     
// // });

// benifit 



// Order Details
const orderDetail = {
    orderId: 121212,
    food: ["Pizza", "Pasta"],
    cost: 560,
    customer_name: "Ashutosh"
};

// 1. Place Order
function placeOrder(orderDetail, callback) {
    console.log(`Payment Amount: ₹${orderDetail.cost}`);

    setTimeout(() => {
        console.log("✅ Payment Received");
        callback(orderDetail);
    }, 2000);
}

// 2. Preparing Order
function preparingOrder(orderDetail, callback) {
    console.log("👨‍🍳 Your food preparation started...");

    setTimeout(() => {
        console.log("✅ Order Prepared");
        callback(orderDetail);
    }, 3000);
}

// 3. Pickup Order
function pickupOrder(orderDetail, callback) {
    console.log("🛵 Delivery Boy is coming to pick up the order...");

    setTimeout(() => {
        console.log("✅ Order Picked Up");
        callback(orderDetail);
    }, 3000);
}

// 4. Deliver Order
function deliverOrder(orderDetail) {
    console.log("🚚 Delivery Boy is on the way...");

    setTimeout(() => {
        console.log("🎉 Order Delivered Successfully!");
        console.log(orderDetail);
    }, 3000);
}

// Flow
placeOrder(orderDetail, (orderDetail) => {
    preparingOrder(orderDetail, (orderDetail) => {
        pickupOrder(orderDetail, (orderDetail) => {
            deliverOrder(orderDetail);
        });
    });
});