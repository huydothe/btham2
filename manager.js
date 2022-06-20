let hanghoa=[];
function hienthi(){
    let hang="";
    for(let i=0; i<hanghoa.length; i++){
        hang = hang +  hanghoa[i] + '<br>';
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
        if (a === hienthi[i]){
            hanghoa.splice(i,1,b);
        }
    }
    document.getElementById('ds').innerHTML=hienthi();
}document.getElementById('ds').innerHTML=hienthi();