var express = require('express'); // 项目服务端使用express框架
var app = express();

var controller = require('./Controllers/Action');

var server = require("./test");
// var route = require("./route");

controller.initRoute(app);
server.start(app);