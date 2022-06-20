function Scircle(r){
    S=Math.PI * Math.pow(r,2);
    return S;
}
function Ccircle(r){
    C=Math.PI * r;
    return C;
}
let num=+prompt('Enter a number');
console.log(Ccircle(num));
console.log(Scircle(num));
