const myPromise = new Promise ((resolve,reject)=>
{
const number = Math.floor (Math.random()*10);
console.log(number);

if (number<2) {

    resolve('Operation Successfull')
}
else{
    reject('Operation Failed')
}

})

myPromise.then((result) => {

    console.log(result)
    
    
}).catch((error) =>{

    console.log(error);
    
})

