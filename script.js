// arrow function
// intro=(name,fname,age)=>{
//     console.log(`Name : ${name} Father Name : ${fname} Age : ${age}`);
// }
// intro('Raees','Ashraf',21);

// callback
// first=(name,fun)=>{
//     setTimeout(()=>{
//         console.log(`${name} come first`);
//         fun();
//     },2000);
// }
// second=()=>{
//     console.log(`Rameez come second`);
// }
// first('Raees',second);

// first=(name,fun)=>{
//     setTimeout(()=>{
//         console.log(`${name} come first`);
//         fun();
//     },2000);
// }
// second=()=>{
//     setTimeout(()=>{
//         console.log(`Rameez come second`);
//     },3000);
    
// }
// first('Raees',second);

// array destructing
// const cars=['mehran','suzuki','cultus','mira'];
// const [car1,car2,,car3]=cars;
// console.log(cars);
// console.log(car1,car2,car3);

// object destructing 
// const myobj={
//     first:'Raees',
//     second:'Rameez',
//     third:'Adeel'
// }
// const {first,second,third}=myobj;
// console.log(first,second,third);

// rest parameter
// multiply=((...args)=>{
// console.log(args[0]*args[1]*args[2]);
// })
// sum(1,2,3,4,5)

// spread operator
// multiply=((num1,num2)=>{
// console.log(num1*num2);
// })
// sum(...[2,4,5,6])