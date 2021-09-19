const request = require("request");
const fs=require("fs");
request("http://www.google.com",callback);
function callback(error,response,body)
{
    if(!error)fs.writeFileSync("index.html",body);
}
