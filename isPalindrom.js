//this code is for finding whether the given string is palindrome or not.


let str="masai";
let newStr="";
for(let i=str.length-1; i>=0; i++){
newStr+=str[i];
}
if(str==newStr){
console.log(str,"is a palindrome");
}
else{
console.log(str,"is not a palindrome");
}
