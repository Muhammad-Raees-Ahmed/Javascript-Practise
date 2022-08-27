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

// promises

// promises have 3 states
// 1.pending
// 2.resolve
// 3.reject

// Constructor Syntax
// promise produce
// promises object take always executor i.e 'reslove','reject' 
// const myobj=new Promise((resolve,reject)=>{
// setTimeout(()=>{
// nam='raees';
// if (nam=='raees'){
//     resolve("Pass")
// }else{
//     reject('Fail')
// }
// },3000);
// });

// myobj.then((ans)=>{
//     console.log(ans);
// }).catch((ans)=>{
//     console.log(ans);
// });

// myFunction=(name)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
// resolve(name=='raees');
// reject("Error Occured");
//         },2000)
//     }) ;
// };
// myFunction('raees')
// .then((found)=>{
// console.log(`Found 😋 ${found}`);
// }).catch((notFound)=>{
// console.log(`Ohh ❌ ${notFound}`)
// });

// async await

// getData = async() => {
// 	var data = "Hello World";
// 	return data;
// }

// getData().then(data => console.log(data));

checker=(async(age)=>{

    if (age=='20'){
        return 'pass';
    }
    else{
        return 'fail';
    }
});
checker(26).then((ans)=>{
console.log(ans)
}).catch((ans)=>{
    console.log(ans)
});
