const request=require("request");
const cheerio=require("cheerio");
let data={};
let fs=require("fs");
request("https://www.espncricinfo.com/series/india-tour-of-sri-lanka-2021-1262739/sri-lanka-vs-india-1st-odi-1262755/full-scorecard",callback);
function callback(error,response,html)
{
    if(!error)
    {
        const manipulationTool=cheerio.load(html);
        console.log("hello-----------");
        let name=manipulationTool(".Collapsible__contentInner tbody a.small");
        for(let i=0;i<name.length;i++)
        {
           profile1(manipulationTool(name[i]).text(),
           "https://www.espncricinfo.com"+manipulationTool(name[i]).attr("href"));
           
           
        }
    }
}
function profile1(name,url)
{
request(url,function(error,response,html)
{
const manipulationTool=cheerio.load(html);
let list=manipulationTool(".player-card-description.gray-900");
console.log(manipulationTool(list[1]).text()+" "+name);
data[name]=manipulationTool(list[1]).text();
fs.writeFileSync("data.json",JSON.stringify(data));

console.log("----------->");
                
})

}

