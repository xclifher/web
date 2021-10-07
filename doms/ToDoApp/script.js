let ul=document.querySelector("ul")
let input=document.querySelector("input")
let but=document.querySelector(".submit")
let but1=document.querySelector(".clear")
but.addEventListener("click",function(){
    let task=input.value;
    input.value=""
    if(task=="") return;
let li=document.createElement("li");
li.innerText=task;
li.addEventListener("dblclick",function()
{
    li.remove();
})

ul.append(li)


})
but1.addEventListener("click",function()
{
    ul.remove();
})