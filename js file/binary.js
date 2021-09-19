let decimal=26;
function dtb(deciaml)
{
    let binary=0;
    let pv=1;
    while(decimal>0)
    {
        
        debugger;
        console.log(decimal)
        let rem=decimal%2;
        console.log(rem);
        binary=binary+rem*pv;
        pv=pv*10;
        console.log(pv);
        decimal=decimal/2;
        console.log(decimal);

    }

    return binary;
}
let val=dtb(decimal);
console.log(val);