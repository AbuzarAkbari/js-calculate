function bereken() {
    var operation = document.getElementById("operation").value;
    var cijfers = document.getElementById("numbers").value;
    var apart = cijfers.split(",");
    parseInt(apart);

    var min = 0;
    for (i = 0; i < apart.length; i++) {
        min+=parseFloat(apart[i]);
    }

    var plus = 0;

    var keer = 1;
    
    
    
    
    if (operation == "sum") {
        for (i = 0; i < apart.length; i++) {
            plus+=parseFloat(apart[i]);
        }
        document.getElementById("result").innerHTML = plus;
    } else if (operation == "substract") {
        for (i = 0; i < apart.length; i++) {
            min-=parseFloat(apart[i]);
        }
        document.getElementById("result").innerHTML = min;
    } else if (operation == "multiply") {
        for (i = 0; i < apart.length; i++) {
            keer*=parseFloat(apart[i]);
        }
        document.getElementById("result").innerHTML = keer;
    } else if (operation == "divide") {
        for (i = 0; i < apart.length; i++) {
            begin/=parseFloat(apart[i]);
        }
        	document.getElementById("result").innerHTML = begin;
    }
    console.log(begin);

    }