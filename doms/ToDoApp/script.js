let ul=document.querySelector("ul")
let input=document.querySelector("input")
let but=document.querySelector(".submit")
let but1=document.querySelector(".clear")


input.addEventListener("keypress",function(e){
    if(e.keyCode==13){
       
    
    let task=input.value;
    input.value=""
    if(task=="") return;
let li=document.createElement("li");
li.innerText=task;
ul.append(li)
    
li.addEventListener("dblclick",function()
{
    li.remove();
})

    }

    
})
but1.addEventListener("click",function()
{
    ul.remove();
})