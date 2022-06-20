let hanghoa=[];
function hienthi(){
    let hang="";
    for(let i=0; i<hanghoa.length; i++){
        hang += hanghoa[i] + '<br>';
    }
    return hang;
}
function add(){
    let goods=prompt('Nhập mặt hàng muốn thêm');
    hanghoa.push(goods);
    document.getElementById('ds').innerHTML=hienthi();
}
function edit(){
    a=prompt('Nhập tên hàng muốn xóa');
    b=prompt('nhập tên hàng muốn thêm');
    for(let i=0;i<hanghoa.length;i++) {
        if (a === hanghoa[i]){
            hanghoa.splice(i,1,b);
        }
    }
    document.getElementById('ds').innerHTML=hienthi();
}
function xoa() {
    c = prompt('Nhập tên hàng muốn xóa');
    for (let i = 0; i < hanghoa.length; i++) {
        if (c === hanghoa[i]) {
            hanghoa.splice(i, 1);
        }
    }
    document.getElementById('ds').innerHTML=hienthi();
}