console.log('Hello ashutosh');

// code 
 const p1= fetch("https://api.github.com/users");
// console.log(p1);

// p1.then((Response)=> {
//     console.log(Response.json())
// })


// const p2 = p1.then((Response) => {
//     return Response.json();
// });

// p2.then((Response) => {
//     console.log(Response);
// });


// console.log(p2);
// Promiss chaining


fetch('https://api.github.com/users').then((Response) => {
    return Response.json();

    if(!Response.ok){
        throw new Error('Data is not peresent in server');
    }
    return Response.json();
})
.then((data) => {
    //console.log(data);
   
    const parent = document.getElementById('first');
    
    for(let i=0; i<data.length; i++) {
    const image =  document.createElement('img');
    image.src = data[i].avatar_url;
    image.style.height = '40px';
    image.style.width ='40px';
    
    parent.append(image);
    }

})
.catch((error)=> {
    const parent = document.getElementById('first');
    parent.textContent = error.message;
});


// reject --> Internet Down , Server Down ,  DNS Down .