

function SendRequest(url, sendCallback)
{
    var options = {
        // hostname: 'http://127.0.0.1',
        port: 9527,
        path: url,
        method: 'GET'
    };

    var receiveData = "";

    var req = http.request(options, function(res){
        // console.log('STATUS: ' + res.statusCode); 
        // console.log('HEADERS: ' + JSON.stringify(res.headers)); 
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

    req.end();
    // req.end(function(){
    //     console.log(receiveData);
    //     sendCallback(JSON.stringify(toLowerCase(JSON.parse(receiveData))));
    // });
}

function toLowerCase(jsonObj) {
    if(typeof(jsonObj)=='object')
    {
        for (var key in jsonObj)
        {
            if (parseFloat(key).toString() == "NaN")
            {//非数字
                jsonObj[key.substring(0,1).toLowerCase()+key.substring(1)] = toLowerCase(jsonObj[key]);
                delete(jsonObj[key]);  
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