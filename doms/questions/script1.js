let balltag = document.querySelectorAll(".ball")



for(let i =0;i<balltag.length;i++){
    console.log(balltag[i]);
    balltag[i].addEventListener("click",function()
    {
        balltag[i].style.backgroundColor="pink"
    })
    balltag[i].addEventListener("dblclick",function()
    {
        
        balltag[i].style.backgroundColor="purple";
        let ptag = document.createElement("p");
        ptag.innerText = "naved";

       balltag[i].append(ptag);



        
    })
}