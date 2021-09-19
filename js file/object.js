let tony={
    name:"tony",
    lastname:'stark',
    friends:['steve','brue','naved'],
    age:45,
    isAvenger:true,
    abc:undefined,
    address:{
        state:"new york",
        city:"hongkong"
    },
    sayshi:function fn()
    {
        console.log("iron man say hello")
        return "part of journey is the end"
    }
}
  /*console.log(tony.address.state)
  console.log(tony.sayshi())
  console.log(tony.name)
  console.log(tony.lastname)
  console.log(tony.friends[2])*/
  //for(let key in tony)
  //{
    //console.log(key);
  //}
  let karr=Object.keys(tony);
 // console.log(karr)
  for(let i=0;i<karr.length;i++)
{
     let key = karr[i];
    console.log(key);
      console.log(tony[karr[i]]);
}
