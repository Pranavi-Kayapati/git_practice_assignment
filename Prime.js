// find the count of prime numbers from 1 to the given limit using function.

function primeFun(num)

{
   let count=0;
   for(let i=1; i<=num; i++)
  {
     if(num%i==0)
       {
         count++;
       }
  }

     if(count==2)
      {
        return true;
      }
     else
      {
        return false;
      }
}
let num=100;
for(let i=1; i<=num; i++){
if(primeFun(i)){
console.log(i);
}
}