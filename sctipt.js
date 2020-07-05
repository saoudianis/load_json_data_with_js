
// deffine the btn
var zar = document.getElementById("btn");
var info = document.getElementById("info");
var pageNum = 1;
//btn event
zar.addEventListener("click",function(){
    // function after i click at the btn
    var xReq = new XMLHttpRequest();
     xReq.open('GET','cars_'+ pageNum +'.json');
     xReq.onload = function(){
            var xData = JSON.parse(xReq.responseText);
            //call function for print xData
         addHtml(xData);
            
               };
    pageNum++;
     xReq.send();
   //if cars files end 
    if(pageNum>3){
        zar.classList.add("hide");
        zar.style.backgroundColor = '#eee';
        zar.style.color = 'lightgray';
    }
});

function addHtml(data){
    var htmlText = "";
    //print All of info from one of the cars files
    for(i=0;i<data.length;i++){
        htmlText += "<p class='red''>" + data[i].name + 
            " is a <span class='green'>" + data[i].model  
        + "<br> That has 4x4 cars like : ";
            for(j=0;j<data[i].type.four.length;j++)    {
                if(j==0){
            htmlText += data[i].type.four[j];
                }else{
                    htmlText +=" and " + data[i].type.four[j];
                }
                
        }
        
        htmlText+="<br> and salon cars like : ";
        for(j=0;j<data[i].type.salon.length;j++)    {
                if(j==0){
            htmlText += data[i].type.salon[j];
                }else{
                    htmlText +=" and " + data[i].type.salon[j];
                }
                
        }
            htmlText+= "<br> Which was made in : " + data[i].year + ".";
            htmlText +="</span><hr></p>";
        
    }
    info.insertAdjacentHTML('beforeend',htmlText);
}