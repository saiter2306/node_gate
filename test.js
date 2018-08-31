var https = require('https');
var fs = require('fs');
var querystring = require('querystring');
var util = require('util');
var url = require('url');

var options = {
	key: fs.readFileSync('./keys/server-key.pem'),
	ca: [fs.readFileSync('./keys/ca-cert.pem')],
	cert: fs.readFileSync('./keys/server-cert.pem')
};

function start(app)
{
    function onRequest(req,res){

        var pathname = url.parse(req.url).pathname;

        // 定义了一个post变量，用于暂存请求体的信息
        var post = '';
        var get = '';
        
        // 解析 url 参数
        get = url.parse(req.url, true).query;
    
        // 通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
        req.on('data', function(chunk){    
            post += chunk;
        });
    
        // 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
        req.on('end', function(){  
            post = querystring.parse(post);
    
            var obj = Object.assign(get, post);
    
            console.log(querystring.stringify(obj));
    
            console.log(obj);
            console.log(get);
            console.log(post);

            // route(pathname, get, post);
    
            res.end(util.inspect(obj));
        });
    }

    https.createServer(options, app).listen(3000);

    var host = "127.0.0.1";
    var port = "3000";
    // 终端打印如下信息
    console.log('Server running at http://%s:%s/',host, port);
}

exports.start = start;