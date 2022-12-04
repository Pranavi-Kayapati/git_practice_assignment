//this code is for finding whether the given number is prime or not.


let num=10;
let count=0;
for(let i=1; i<=num; i++){
if(num%i==0){
count++;
}
if(count==2){
console.log(num,"is prime number");
}
else{
console.log(num,"is not a prime number");
}