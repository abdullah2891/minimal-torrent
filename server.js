var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//middleware
app.use(bodyParser.urlencoded({
  extended : true
}));
app.use(bodyParser.json());
var router = express.Router();
app.use('/api',router);
app.use(express.static(__dirname+'/app'));
//controller
var SearchController = require('./controller/torrent');

//router

router.route('/search')
.post(SearchController.getSearchResult);


var PORT = process.env.PORT || 3000;
app.listen(PORT,function(){
  console.log("Torrent Search is running on %d",PORT);
})
