define({ "api": [
  {
    "type": "get",
    "url": "/api/GetIndex",
    "title": "获取首页",
    "description": "<p>获取首页信息</p>",
    "name": "GetIndex",
    "group": "Index",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/GetIndex"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action.js",
    "groupTitle": "Index"
  }
] });
