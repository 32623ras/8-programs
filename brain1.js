function hy() {
    var hel = document.getElementById("hy").value;
    var hy = hel.slice(10,14);
    
    let newDiv = document.createElement('div');
    newDiv.className = "new-div";
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
   
    newDiv.innerText = "**********"+hy;
    let input =document.getElementsByTagName("input");
    

    document.getElementById('main').appendChild(newDiv)
}