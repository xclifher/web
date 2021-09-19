const request=require("request");
const cheerio=require("cheerio");
let data={};
const fs=require("fs");
request("https://github.com/topics",callback);
function callback(error,response,html)
{
    if(!error)
    {
        const manipulationTool=cheerio.load(html);
        let name=manipulationTool(".no-underline.d-flex.flex-column");
       for(let i=0;i<name.length;i++)
       {
        let a=manipulationTool(name[i]).find("p")[0];
        TopicsProcess(
  "https://github.com"+manipulationTool(name[i]).attr("href")
  ,manipulationTool(a).text().trim());
           

       }
    }
}
function TopicsProcess(url,topicname)
{
    request(url,function(error,response,html)
    {
        if(!error)
        {
            const manipulationTool=cheerio.load(html);
            let a=manipulationTool(".f3.color-text-secondary.text-normal.lh-condensed a");
           console.log("---------->")
            console.log(topicname);
            for(let i=0;i<10;i+=2)
           {
               if(!data[topicname])
               {
                   data[topicname]=[];
                   data[topicname].push({name:manipulationTool(a[i+1]).text().trim(),});
               }
               else{
                data[topicname].push({name:manipulationTool(a[i+1]).text().trim(),});
               }
            console.log(manipulationTool(a[i+1]).text().trim());
            console.log("https://github.com"+manipulationTool(a[i+1]).attr("href"));
           }
           fs.writeFileSync("data1.json",JSON.stringify(data));
           

        }

    })

}