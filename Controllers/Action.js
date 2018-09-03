var http = require('http'); 
var querystring = require('querystring'); 
var url = require('url');
var common = require('./common');

function initRoute(app)
{
    /**
     * @api {get} /api/GetIndex 获取首页
     * @apiDescription 获取首页信息
     * @apiName GetIndex
     * @apiGroup Index
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetIndex
     * @apiVersion 1.0.0
     */
    app.get('/', function (req, res) {

        var requestUrl = "/?actionid=1001&" + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    app.post('/', function(req, res){
        // res.send("visit post");
    });

    app.get('/api/GetIndex', function (req, res) {

        var requestUrl = "/?actionid=1001&" + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    app.post('/GetIndex', function(req, res){
        // res.send("visit post");
    });
}

exports.initRoute = initRoute;