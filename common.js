var http = require('http');

function SendRequest(url, method, request, response, sendCallback)
{
    var options = {
        // hostname: 'http://127.0.0.1',
        port: 9527,
        path: url,
        method: method
    };

    GetPostData(method, request, function(data){

        if (method = 'post')
        {
                options.headers = {
                'Content-Type':'application/x-www-form-urlencoded',
                'Content-Length':Buffer.byteLength(data)
            }
        }

        var req = http.request(options, function(res){
            // console.log('STATUS: ' + res.statusCode); 
            // console.log('HEADERS: ' + JSON.stringify(res.headers)); 
            var receiveData = "";
            res.setEncoding('utf8'); 
            res.on('data', function (chunk) { 
                // console.log('BODY: ' + chunk); 
                receiveData += chunk;
            }); 
            res.on('end', function(){
                console.log('end:' + receiveData);
                sendCallback(JSON.stringify(toLowerCase(JSON.parse(receiveData))));
            })
        });
    
        req.on('error', function(e) {
            console.log('problem with request: ' + e.message);
        });
    
        req.write(data,'utf-8');
        req.end();
    });
}

//
function GetPostData(method, request, callback){

    if (method == 'post')
    {
        var postData = "";
        request.on('data', function(chunk){
            postData += chunk;
        });

        request.on('end', function(){
            callback(postData);
        })
    }
    else
    {
        callback('');
    }
}

function toLowerCase(jsonObj) {
    if(typeof(jsonObj)=='object')
    {
        for (var key in jsonObj)
        {
            if (parseFloat(key).toString() == "NaN")
            {//非数字
                var newKey = key.substring(0,1).toLowerCase()+key.substring(1);
                var newValue = toLowerCase(jsonObj[key]);
                
                delete(jsonObj[key]);

                jsonObj[newKey] = newValue;
            }
            else
            {
                jsonObj[key] = toLowerCase(jsonObj[key]);
            }
        }
    }
    return jsonObj;
}

exports.SendRequest = SendRequest;