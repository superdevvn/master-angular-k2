//Kiêm tra
function hello1(color, score){
    color = color || 'red';
    score = score || 20;
    console.log('Color:' + color);
    console.log('Score:' + score);
}
// chỉ can có giá trị khác undefined
function hello2(color = 'red', score=20){
  
    console.log('Color:' + color);
    console.log('Score:' + score);
}

var hello3 = (param1,param2,param3) =>{
    param = param1 || param2 || param3 || 'SuperDev'
    console.log('Param:' + param);
}



// hello3();
// hello3(0,null,10);
// hello3(0,null, '');
// hello3(0,'facebook', '');
