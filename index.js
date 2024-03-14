const dec = document.getElementById("dbtn");
const res = document.getElementById("resbtn");
const inc = document.getElementById("inbtn");
const lbl = document.getElementById("lable")
let count = 0;

inc.onclick = function(){
    count++;
lbl.textContent = count;
}
dec.onclick = function(){ if (count > 0) {
    count--;
    lbl.textContent= count;
}
}
res.onclick = function(){
    count = 0;
    lbl.textContent= count;
}