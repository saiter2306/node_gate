

function initRoute(app)
{
    app.get('/', function (req, res) {
        res.send("visit get");
    });
    app.post('/', function(req, res){
        res.send("visit post");
    });
}

exports.initRoute = initRoute;