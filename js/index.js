let myFunction = {
    toggle:function(){
        let time;
        let list = document.getElementById("list");
        let uLi = list.getElementsByTagName("li");
        let item = document.getElementsByClassName("item")[0];
        let listP = document.getElementsByClassName("list")[0];
        let itemDiv = item.getElementsByClassName("list_hover");
        for(let i = 0;i < uLi.length;i++){
            uLi[i].onmouseenter = function(){
                for(let j = 0;j < uLi.length;j++){
                    itemDiv[j].style.display = "none";
                }
                item.style.display = "block"; 
                itemDiv[i].style.display = "block";
                itemDiv[i].onmousenter = function(){
                    for(let j = 0;j < uLi.length;j++){
                          itemDiv[j].style.display = "none";
                      }
                      item.style.display = "block"; 
                      itemDiv[i].style.display = "block";
                }
                item.onmouseleave= function(){
                    item.style.display = "none"; 
                    itemDiv[i].style.display = "none";
                }
                listP.onmouseleave = function(){
                    item.style.display = "none"; 
                    itemDiv[i].style.display = "none";
                }
            }
           
        }
    }    
}
myFunction.toggle();