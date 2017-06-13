//function Optellen(){
//    document.getElementById("add").innerHTML = var cijfers=[];
//    var text = "";
//    var i;
//    for (i = 0; i < cijfers.length; i++) {
//        text += cijfers[i] + "<br>";
//    }
//    document.getElementById("result").innerHTML = text;
//}

//    cijfers.push(document.getElementById("numbers").innerHTML);
//    var symbol = document.getElementById("operation").innerHTML;


function Optellen() {
    var cijfers = document.getElementById("numbers").value;
    var apart = cijfers.split(",");
    parseInt(apart);
    
    var begin = 0;
    for (i = 0; i < apart.length; i++) {
      begin+=parseFloat(apart[i]);
    }

    document.getElementById("result").innerHTML = begin;
}
