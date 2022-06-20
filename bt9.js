function sn() {
    let arr = [];
    for (let i = 0; i < 10; i++) {
        num = prompt('nhập kí tự bất kì');
        arr.push(num);
    }
    let a = prompt('Nhập 1 kí tự');
    let count=0;
    for (let i=0; i<arr.length; i++){
        if(a === num[i]){
            alert('yes');
            count++;
        }else{
            alert ('-1')
            break;
        }
    }
    console.log(count);
}sn();