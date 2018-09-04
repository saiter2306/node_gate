var express = require('express'); // 项目服务端使用express框架
var controller = require('./Controllers/Action');
var server = require("./test");
// var route = require("./route");

var app = express();

app.all("*", function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    if (req.method == 'OPTIONS') {
        // 让options请求快速返回
        res.end(200); 
    }
    else {
        next();
    }
});

controller.initRoute(app);
server.start(app);