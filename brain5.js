
    
function hy() {
    
var hello = document.getElementById("hy").value;

var hell = parseInt(hello);

if(hell<=50){
var b1 = hell*0.5*((hell*20)/100);
}

if(hell<=100){
    var b1 = hell*0.75*((hell*20)/100);
    }
    if(hell<=200){
        var b1 = hell*1.20*((hell*20)/100);
        }
        if(hell>200){
            var b1 = hell*1.50*((hell*20)/100);
            }

            let newDiv = document.createElement('div');
    newDiv.className = "new-div";
    newDiv.style.backgroundColor = "yellow";
    newDiv.style.fontSize = "40px";
   
    newDiv.innerText = b1 +" " + "PKR Rupees";
    let input =document.getElementsByTagName("input");
    

    document.getElementById('main').appendChild(newDiv)
}