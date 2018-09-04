var https = require('https');
var fs = require('fs');

var options = {
	key: fs.readFileSync('./keys/server-key.pem'),
	ca: [fs.readFileSync('./keys/ca-cert.pem')],
	cert: fs.readFileSync('./keys/server-cert.pem')
};

function start(app)
{
    https.createServer(options, app).listen(3000);

    var host = "127.0.0.1";
    var port = "3000";
    // 终端打印如下信息
    console.log('Server running at http://%s:%s/',host, port);
}

exports.start = start;