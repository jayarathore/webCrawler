const Crawler = require('./crawler');
const js2xmlparser = require("js2xmlparser");
const express = require('express');


var app = express();


app.get('/:url/:level/:outputType',(request,response)=>{

  let url = 'http://'+request.params.url || 'https://wiprodigital.com';
  let outputType = request.params.outputType || 'xml';
  let  level =  request.params.level || 1;

  console.log('url ',url,' outputType ',outputType,' level ',level);

  

  const crawler =  new Crawler(url,level);
  

  
  crawler.start((resources) => {
    const array = [...resources];
  
    console.log(`${url} has ${array.length} links.`);
  
    console.log();
  
    if (outputType == 'xml') {
      response.type('application.xml')
      response.send(js2xmlparser.parse("sitemap", array));
    } else {
      response.json(array);
    }
  });

 

});

app.listen(3000,()=>{
  console.log('Server started at 3000');
})



module.exports = app;

