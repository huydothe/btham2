function check() {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === a[a.length - i - 1]) {
            alert('doi xung');
            break;
        } else {
            alert('khong phai dx');
            break;
        }
    }
}
let a=prompt('Nhập 1 chữ');
check();