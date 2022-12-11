// find the count of prime numbers from 1 to the given limit using function.

function primeFun(num)

{
for(let i=1; i<=num; i++){
   let count=0;
   for(let j=1; j<=i; j++)
  {
     if(num%i==0)
       {
         count++;
       }
}

     if(count==2)
      {
        //return true;
        console.log(i)
      }
     
}
}
let num=10;
primeFun(num)