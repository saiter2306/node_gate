var https = require('https');
var fs = require('fs');

// var options = {
// 	key: fs.readFileSync('./keys/server-key.pem'),
// 	ca: [fs.readFileSync('./keys/ca-cert.pem')],
// 	cert: fs.readFileSync('./keys/server-cert.pem')
// };

const options = {
    key: fs.readFileSync('./keys/server-key.pem'),
    cert: fs.readFileSync('./keys/ca-cert.pem')
  };

function start(app)
{
    https.createServer(options, app).on('connection', function(socket){
        console.log("A new connection was made by a client.");
        socket.setTimeout(30 * 1000);
    }).listen(8000);
    var host = "127.0.0.1";
    var port = "8000";

    // 终端打印如下信息
    console.log('Server running at https://%s:%s/',host, port);
}

exports.start = start;