function hy() {
    
    var hel = document.getElementById("hy").value;
    
    var hello = document.getElementById("hel").value;
    
    var a = hello.slice(0,1);
    var b = hello.slice(1,2);
    var c = hello.slice(2,3);
    var d = hello.slice(3,4);
    var e = hello.slice(4,5);
    var f = hello.slice(5,6);
    var g = hello.slice(6,7);
    var h = hello.slice(7,8);
    var i = hello.slice(8,9);
    var j = hello.slice(9,10);
    var k = hello.slice(10,11);
    var l = hello.slice(11,12);
    var m = hello.slice(12,13);
    var n = hello.slice(13,14);
    var o = hello.slice(14,15);

    if (a=hel) {
        var p = parseInt(1);
    }
    
    if (b=hel) {
        var q = parseInt(1);
    }
    if (c=hel) {
        var r = parseInt(1);
    }
    if (d=hel) {
        var s = parseInt(1);
    }
    if (e=hel) {
        var t = parseInt(1);
    }
    if (f=hel) {
        var w = parseInt(1);
    }
    if (g=hel) {
        var x = parseInt(1);
    }
    if (h=hel) {
        var y = parseInt(1);
    }
    if (i=hel) {
        var z = parseInt(1);
    }
    if (j=hel) {
        var ab = parseInt(1);
    }
    if (k=hel) {
        var cd = parseInt(1);
    }
    if (l=hel) {
        var ef = parseInt(1);
    }
    if (m=hel) {
        var gh = parseInt(1);
    }
    if (n=hel) {
        var ij = parseInt(1);
    }
    if (o=hel) {
        var kl = parseInt(1);
    }
    else{
        var all = parseInt(0);
    }


    var total = p+q+r+s+t+u+v+w+x+t+z+ab+cd+ef+gh+ij+kl+all
    alert(total)

    let newDiv = document.createElement('div');
    newDiv.className = "new-div";
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
   
    newDiv.innerText = total;
    let input =document.getElementsByTagName("input");
    

    document.getElementById('main').appendChild(newDiv)
}