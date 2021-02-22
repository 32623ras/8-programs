
    
function hy() {
    
    var hello = document.getElementById("hy").value;
    
    var hell = parseInt(hello);
    
    if(hell<=10000){
    var b1 = hell+((hell*80)/100)+((hell*20)/100);
    }
    
    if(hell<=20000){
        var b1 = hell+((hell*90)/100)+((hell*25)/100);
        }
        if(hell>20000){
            var b1 = hell+((hell*95)/100)+((hell*30)/100);
            }
                
                let newDiv = document.createElement('div');
        newDiv.className = "new-div";
        newDiv.style.backgroundColor = "yellow";
        newDiv.style.fontSize = "40px";
       
        newDiv.innerText = b1 +" " + "PKR Rupees";
        let input =document.getElementsByTagName("input");
        
    
        document.getElementById('main').appendChild(newDiv)
    }