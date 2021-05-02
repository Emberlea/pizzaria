var pizaa=[];
function getmenu(){
var pix=[];
var piza="Classic Cheese Pizza";

var p="Veg Masala Pizza";

var z="Tandoori Chicken Pizza";

var a="Ocean Seafood Pizza";
pizaa.push(piza);
pizaa.push(p);
pizaa.push(z);
pizaa.push(a);
pizaa.sort();
document.getElementById("dove").innerHTML=pizaa;
document.getElementById("dove").style.display="inline-block";
}

function add_item(){
    var pin;
    var item=document.getElementById("add_item").value;
    pizaa.push(item);
    pizaa.sort();
    pin="<selection class='cards'>";
    for(var n=0; n<pizaa.length;n++){
        pin=pin+'<div class="card">'+'<img src="pizzaImg.png">'+pizaa[n]+'</div>'
    }
    pin=pin+"</selection>"
    document.getElementById("display_addedmenu").innerHTML=pin;
}