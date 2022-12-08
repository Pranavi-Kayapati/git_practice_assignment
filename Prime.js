// find the count of prime numbers from 1 to the given limit using function.

let primeFun(num)

{
   let count=0;
   for(let i=2; i<=num; i++)
  {
     if(num%i==0)
       {
         count++;
       }

     if(count==1)
      {
        return true;
      }
     else
      {
        return false;
      }
}
let num=100;
console.log(primeFun(num));