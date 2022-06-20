function check(){
    let flag=true;
    if(a>0){
        flag=true;
    }else{
        flag=false;
    }
    if(flag===true){
        alert('True')
    }else {
        alert('False')
    }
}
let a=parseInt(prompt('Enter a number'));
check(a);