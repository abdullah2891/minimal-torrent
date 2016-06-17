var kickass = require('kickass-torrent');


exports.getSearchResult = function(req,res){
  console.log(req.body);
  var search = req.body.search;
  kickass({
    q: search,//actual search term
    field:'seeders',//seeders, leechers, time_add, files_count, empty for best match
    order:'desc',//asc or desc
    page: 2,//page count, obviously
    url: 'https://kat.cr',//changes site default url (https://kat.cr)
},function(e, data){
    //will get the contents from
    //http://kickass.to/json.php?q=test&field=seeders&order=desc&page=2
    if(e)
        res.send(400,e);
    res.send(200,data)//actual json response
})
}
