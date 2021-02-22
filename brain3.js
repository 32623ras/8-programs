function hy() {
    var b = document.getElementById("hy").value;


    // all the work
    var c = b.slice(0,1);
    var d = b.slice(1,2);
    var e = b.slice(2,3);
    var f = b.slice(3,4);
    var g = b.slice(4,5);
    var h = b.slice(5,6);
    var i = b.slice(6,7);
    var j = b.slice(7,8);
    var k = b.slice(8,9);
    var l = b.slice(9,10);
    var m = b.slice(10,11);

    
    let newDiv = document.createElement('div');
    newDiv.className = "new-div";
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
   
    newDiv.innerText = c+c+d+d+e+e+f+f+g+g+h,h+i+i+j+j+k+k+l+l+m+m;
    let input =document.getElementsByTagName("input");
    

    document.getElementById('main').appendChild(newDiv)
}