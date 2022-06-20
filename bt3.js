let a= prompt('Enter a number');
function giaithua(num){
   if(num == 2)
       return 2;
   return num*giaithua(num-1);
}console.log(giaithua(a));
