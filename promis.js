console.log('Hello ashutosh');

// code 
 const p1= fetch("https://api.github.com/users");
// console.log(p1);

// p1.then((Response)=> {
//     console.log(Response.json())
// })


const p2 = p1.then((Response) => {
    return Response.json();
});

p2.then((Response) => {
    console.log(Response);
});


console.log(p2);
