// product js start

function decrease(id){
    var p=document.getElementById(id);
var para = parseInt(p.innerHTML);
    if(para>1){
        value = para-1;
        p.innerHTML=value;
    }
}

function increase(id){
    var p=document.getElementById(id);
var para = parseInt(p.innerHTML);
        value = para+1;
        p.innerHTML=value;
}

function changecart(id, task){
        switch(task){
            case "decrease":
                decrease(id);
                break;
            case "increase":
                increase(id);
                break;
        }
}


// recent div date insert

var p = document.getElementsByClassName("date");
console.log(p)

var d= new Date().toLocaleDateString();
console.log(d);

for(var i = 0; i < p.length; i++){
    p[i].innerHTML += d;
}
