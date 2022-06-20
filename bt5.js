function min(){
    if(a<b){
        if(a<c){
            document.write('Min = ' + a);
        }else {
            document.write('Min = ' + c);
        }
    }else{
        if(b<c){
            document.write('Min = ' + b);
        }else {
            document.write('Min = ' + c);
        }
    }
}
let a=+prompt('Enter a')
let b=+prompt('Enter b')
let c=+prompt('Enter c')
min();