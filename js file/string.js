let name="my name is utkarsh"
let strArray=name.split(' ');
let biggest=0;
for(let i=1;i<strArray.length;i++)
{
    if(strArray[i].length>biggest)
    {
        biggest=strArray[i].length;
    }
}
console.log(strArray);
console.log(biggest)