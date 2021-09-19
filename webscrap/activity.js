const request=require("request");
const cheerio=require("cheerio");
request("https://www.espncricinfo.com/series/india-tour-of-sri-lanka-2021-1262739/sri-lanka-vs-india-1st-odi-1262755/full-scorecard",callback);
function callback(error,response,html)
{
    if(!error)
    {
        const manipulationTool=cheerio.load(html);
        let bothTables=manipulationTool(" .table.bowler ");
        let player="";
        let maxWicket=0;
        for(let i=0;i<bothTables.length;i++)
        {
            let tableRows=manipulationTool(bothTables[i]).find("tbody tr");
            for(let j=0;j<tableRows.length;j++)
            {
                let allRowColumns=manipulationTool(tableRows[j]).find("td");
                let playername=manipulationTool(allRowColumns[0]).text();
                let wicket=manipulationTool(allRowColumns[4]).text();
                if(wicket>maxWicket)
                {
                    maxWicket=wicket;
                    player=playername;
                }

            }
        
        }
        console.log(player);
        
   
    }
}