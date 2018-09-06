define({ "api": [
  {
    "type": "get",
    "url": "/api/GetServerTime",
    "title": "获取服务器当前时间(999)",
    "description": "<p>获取服务器当前时间，用于Socket链路下，时间同步</p>",
    "name": "GetServerTime",
    "group": "Actions",
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
        "url": "http://localhost:3000/api/GetServerTime"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Actions"
  },
  {
    "type": "get",
    "url": "/api/GetAllClassify",
    "title": "获取分类列表(1100)",
    "description": "<p>获取分类列表(1100)</p>",
    "name": "GetAllClassify",
    "group": "Goods",
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
        "url": "http://localhost:3000/api/GetAllClassify"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Goods"
  },
  {
    "type": "get",
    "url": "/api/GetClassifyGoods",
    "title": "获取分类商品(1101)",
    "description": "<p>获取分类商品(1101)</p>",
    "name": "GetClassifyGoods",
    "group": "Goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "Id",
            "description": "<p>分类Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "SortType",
            "description": "<p>排序类型 0默认综合排序 1销量反序 2销量正序 3价格反序 4价格正序</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "pi",
            "description": "<p>页码 从1开始</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GetClassifyGoods"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Goods"
  },
  {
    "type": "get",
    "url": "/api/GetGoodsInfo",
    "title": "获取商品信息(1200)",
    "description": "<p>获取商品信息(1200)</p>",
    "name": "GetGoodsInfo",
    "group": "Goods",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "Id",
            "description": "<p>商品Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "SkuId",
            "description": "<p>SKUId, 可不传，默认为最小金额Sku</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GetGoodsInfo"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Goods"
  },
  {
    "type": "get",
    "url": "/api/GetIndex",
    "title": "获取首页信息(1001)",
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
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Index"
  },
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
  },
  {
    "type": "get",
    "url": "/api/GetMemberUpgrade",
    "title": "获取会员升级专区信息(1301)",
    "description": "<p>获取会员升级专区信息(1301)</p>",
    "name": "GetMemberUpgrade",
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
        "url": "http://localhost:3000/api/GetMemberUpgrade"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Index"
  },
  {
    "type": "get",
    "url": "/api/GetNormalActivity",
    "title": "获取通用活动页面(1300)",
    "description": "<p>获取通用活动页面(1300)</p>",
    "name": "GetNormalActivity",
    "group": "Index",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "Id",
            "description": "<p>活动Id</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GetNormalActivity"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Index"
  },
  {
    "type": "get",
    "url": "/api/GetSearchInfo",
    "title": "获取搜索界面信息(1002)",
    "description": "<p>获取搜索界面信息(1002)</p>",
    "name": "GetSearchInfo",
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
        "url": "http://localhost:3000/api/GetSearchInfo"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Index"
  },
  {
    "type": "get",
    "url": "/api/GetSearchResult",
    "title": "获取搜索结果(1003)",
    "description": "<p>获取搜索结果(1003)</p>",
    "name": "GetSearchResult",
    "group": "Index",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Key",
            "description": "<p>关键词</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "SortType",
            "description": "<p>排序类型 0默认综合排序 1销量反序 2销量正序 3价格反序 4价格正序</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "pi",
            "description": "<p>页码 从1开始</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GetSearchResult"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Index"
  },
  {
    "type": "get",
    "url": "/api/GetWxShareInfo",
    "title": "获取微信分享内容(1004)",
    "description": "<p>获取微信分享内容(1004)</p>",
    "name": "GetWxShareInfo",
    "group": "Index",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "routeUrl",
            "description": "<p>路由地址,需要urlEncode etc. source：particulars/473/601 routeUrl: particulars%2f473%2f601</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GetWxShareInfo"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Index"
  },
  {
    "type": "get",
    "url": "/api/GetMessageDetail",
    "title": "获取消息详情(3002)",
    "description": "<p>获取消息详情(3002)</p>",
    "name": "GetMessageDetail",
    "group": "Message",
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
        "url": "http://localhost:3000/api/GetMessageDetail"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Message"
  },
  {
    "type": "get",
    "url": "/api/GetMessages",
    "title": "获取消息列表(3001)",
    "description": "<p>获取消息列表(3001)</p>",
    "name": "GetMessages",
    "group": "Message",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "type",
            "description": "<p>消息类型 0服务通知 1我的收益 2会员信息 3活动推荐</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "pi",
            "description": "<p>分页索引</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GetMessages"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Message"
  },
  {
    "type": "get",
    "url": "/api/GetMyMessage",
    "title": "获取我的消息(3000)",
    "description": "<p>获取我的消息(3000)</p>",
    "name": "GetMyMessage",
    "group": "Message",
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
        "url": "http://localhost:3000/api/GetMyMessage"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Message"
  },
  {
    "type": "get",
    "url": "/api/GetUnreadMessageNum",
    "title": "获取未读消息数(3003)",
    "description": "<p>获取未读消息数(3003)</p>",
    "name": "GetUnreadMessageNum",
    "group": "Message",
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
        "url": "http://localhost:3000/api/GetUnreadMessageNum"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Message"
  },
  {
    "type": "get",
    "url": "/api/ApplyAfterService",
    "title": "申请售后(4009)",
    "description": "<p>申请售后(4009)</p>",
    "name": "ApplyAfterService",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>售后申请信息</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/ApplyAfterService"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/AppraiseOrder",
    "title": "订单评价(4014)",
    "description": "<p>订单评价(4014)</p>",
    "name": "AppraiseOrder",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>评价内容</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/AppraiseOrder"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/CancelAfterService",
    "title": "撤销售后单(4012)",
    "description": "<p>撤销售后单(4012)</p>",
    "name": "CancelAfterService",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ServiceOrderId",
            "description": "<p>售后单号</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/CancelAfterService"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/CancelOrder",
    "title": "取消订单(4007)",
    "description": "<p>取消订单(4007)</p>",
    "name": "CancelOrder",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "OrderId",
            "description": "<p>订单Id</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/CancelOrder"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/ConfirmReceiveGoods",
    "title": "确认收货(4006)",
    "description": "<p>确认收货(4006)</p>",
    "name": "ConfirmReceiveGoods",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "OrderId",
            "description": "<p>订单Id</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/ConfirmReceiveGoods"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/DeleteOrder",
    "title": "删除订单(4017)",
    "description": "<p>删除订单(4017)</p>",
    "name": "DeleteOrder",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "OrderId",
            "description": "<p>订单id</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/DeleteOrder"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/GetAfterServiceInfo",
    "title": "查看售后单据(4011)",
    "description": "<p>查看售后单据(4011)</p>",
    "name": "GetAfterServiceInfo",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ServiceOrderId",
            "description": "<p>售后单号</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GetAfterServiceInfo"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/GetAfterServiceList",
    "title": "查看售后列表(4010)",
    "description": "<p>查看售后列表(4010)</p>",
    "name": "GetAfterServiceList",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "pi",
            "description": "<p>分页页码</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GetAfterServiceList"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/GetGoodsRecomment",
    "title": "获取商品推荐(4004)",
    "description": "<p>获取商品推荐(4004)</p>",
    "name": "GetGoodsRecomment",
    "group": "Order",
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
        "url": "http://localhost:3000/api/GetGoodsRecomment"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/GetOrderDetail",
    "title": "获取订单详情(4018)",
    "description": "<p>获取订单详情(4018)</p>",
    "name": "GetOrderDetail",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "OrderId",
            "description": "<p>订单id</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GetOrderDetail"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/GetOrderLogistics",
    "title": "查看物流(4015)",
    "description": "<p>查看物流(4015)</p>",
    "name": "GetOrderLogistics",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "OrderId",
            "description": ""
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GetOrderLogistics"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/GetOrderProgress",
    "title": "查看订单进度(4008)",
    "description": "<p>查看订单进度(4008)</p>",
    "name": "GetOrderProgress",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "OrderId",
            "description": "<p>订单Id</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GetOrderProgress"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/GetQuickPointInfo",
    "title": "获取自提点信息(4019)",
    "description": "<p>获取自提点信息(4019)</p>",
    "name": "GetQuickPointInfo",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "QuickCode",
            "description": "<p>自提点编码</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GetQuickPointInfo"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/GetReceiverInfoByService",
    "title": "根据售后单号获取地址信息(4022)",
    "description": "<p>根据售后单号获取地址信息(4022)</p>",
    "name": "GetReceiverInfoByService",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ServiceId",
            "description": "<p>售后单号</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GetReceiverInfoByService"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/GetServiceProgress",
    "title": "获取售后进度(4020)",
    "description": "<p>获取售后进度(4020)</p>",
    "name": "GetServiceProgress",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ServiceId",
            "description": "<p>售后单号</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GetServiceProgress"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/GetUserOrder",
    "title": "获取订单列表(4003)",
    "description": "<p>获取订单列表(4003)</p>",
    "name": "GetUserOrder",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "orderStatus",
            "description": "<p>订单状态 99：全部订单 0：待付款 1：待发货 3：待收货</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "pi",
            "description": "<p>分页页码</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GetUserOrder"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/ModifyOrderAddress",
    "title": "修改订单地址(4005)",
    "description": "<p>修改订单地址(4005)</p>",
    "name": "ModifyOrderAddress",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "OrderId",
            "description": "<p>订单Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Int64",
            "optional": false,
            "field": "AddressId",
            "description": "<p>地址Id</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/ModifyOrderAddress"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/PreviewOrder",
    "title": "预览订单(4002)",
    "description": "<p>预览订单(4002)</p>",
    "name": "PreviewOrder",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>购物车信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "AddressId",
            "description": "<p>地址Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CouponId",
            "description": "<p>优惠券Id</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/PreviewOrder"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/QuickConfirmOrder",
    "title": "申请提货(4013)",
    "description": "<p>申请提货(4013)</p>",
    "name": "QuickConfirmOrder",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "OrderId",
            "description": "<p>订单Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "QuickCode",
            "description": "<p>自提标识</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "skuId",
            "description": "<p>提货商品skuId，逗号分割</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/QuickConfirmOrder"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/RemoveCartGoods",
    "title": "移除购物车商品(4021)",
    "description": "<p>移除购物车商品(4021)</p>",
    "name": "RemoveCartGoods",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "skuId",
            "description": "<p>购物车商品SkuId，逗号分割</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/RemoveCartGoods"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/SubmitAfterServiceExpress",
    "title": "提交退货快递单号(4016)",
    "description": "<p>提交退货快递单号(4016)</p>",
    "name": "SubmitAfterServiceExpress",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ServiceId",
            "description": "<p>售后单号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ExpressOrder",
            "description": "<p>快递单号</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/SubmitAfterServiceExpress"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/SubmitOrder",
    "title": "提交订单(4000)",
    "description": "<p>提交订单(4000)</p>",
    "name": "SubmitOrder",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>购物车信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "AddressId",
            "description": "<p>地址Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CouponId",
            "description": "<p>优惠券Id</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/SubmitOrder"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/SyncOrderGoods",
    "title": "同步订单商品(4001)",
    "description": "<p>同步订单商品(4001)</p>",
    "name": "SyncOrderGoods",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "skuId",
            "description": "<p>购物车商品skuId，逗号分割</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/SyncOrderGoods"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/AddAddress",
    "title": "添加收货信息(2009)",
    "description": "<p>添加收货信息(2009)</p>",
    "name": "AddAddress",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>收货人</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Phone",
            "description": "<p>联系电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Address",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "Code",
            "description": "<p>城市编码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "City",
            "description": "<p>所在城市</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "SetDefault",
            "description": "<p>是否设置为默认地址 0:否 1:是</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/AddAddress"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/AddBankCard",
    "title": "添加银行卡(2035)",
    "description": "<p>添加银行卡(2035)</p>",
    "name": "AddBankCard",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>银行卡信息</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/AddBankCard"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/AddUserCollection",
    "title": "添加用户收藏(2013)",
    "description": "<p>添加用户收藏(2013)</p>",
    "name": "AddUserCollection",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "SkuId",
            "description": "<p>商品SkuId</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/AddUserCollection"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/AddUserShopSelected",
    "title": "添加馆主精选",
    "description": "<p>添加馆主精选</p>",
    "name": "AddUserShopSelected",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "skuId",
            "description": "<p>SkuId</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/AddUserShopSelected"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/AutoSetShopSelected",
    "title": "一键同步推荐(2118)",
    "description": "<p>一键同步推荐(2118)</p>",
    "name": "AutoSetShopSelected",
    "group": "User",
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
        "url": "http://localhost:3000/api/AutoSetShopSelected"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/BindPhone",
    "title": "绑定手机号(2007)",
    "description": "<p>绑定手机号(2007)</p>",
    "name": "BindPhone",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CheckCode",
            "description": "<p>验证码</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "Force",
            "description": "<p>强制绑定 0否 1是</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/BindPhone"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/ClearInvalidCollection",
    "title": "一键清空失效(2016)",
    "description": "<p>一键清空失效(2016)</p>",
    "name": "ClearInvalidCollection",
    "group": "User",
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
        "url": "http://localhost:3000/api/ClearInvalidCollection"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/DeleteAddress",
    "title": "删除地址(2026)",
    "description": "<p>删除地址(2026)</p>",
    "name": "DeleteAddress",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int64",
            "optional": false,
            "field": "Id",
            "description": "<p>地址Id</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/DeleteAddress"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/DeleteBankCardApply",
    "title": "删除银行卡申请记录(2041)",
    "description": "<p>删除银行卡申请记录(2041)</p>",
    "name": "DeleteBankCardApply",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "id",
            "description": "<p>申请Id</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/DeleteBankCardApply"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/DeleteMyFocus",
    "title": "删除馆主关注(2112)",
    "description": "<p>删除馆主关注(2112)</p>",
    "name": "DeleteMyFocus",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>关注Id,逗号分隔</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/DeleteMyFocus"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/DeleteRealNameData",
    "title": "删除实名认证信息(2043)",
    "description": "<p>删除实名认证信息(2043)</p>",
    "name": "DeleteRealNameData",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "id",
            "description": "<p>实名认证Id</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/DeleteRealNameData"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/DeleteUserCollection",
    "title": "删除用户收藏(2015)",
    "description": "<p>删除用户收藏(2015)</p>",
    "name": "DeleteUserCollection",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "collectionId",
            "description": "<p>购物车商品skuId，逗号分割</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/DeleteUserCollection"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/DeleteUserShare",
    "title": "删除单条分享(2114)",
    "description": "<p>删除单条分享(2114)</p>",
    "name": "DeleteUserShare",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int64",
            "optional": false,
            "field": "shareId",
            "description": "<p>分享Id</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/DeleteUserShare"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/DeleteUserShopSelected",
    "title": "删除馆主精选",
    "description": "<p>删除馆主精选</p>",
    "name": "DeleteUserShopSelected",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>精选Id列表 逗号分隔</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/DeleteUserShopSelected"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/FocusUserShop",
    "title": "关注馆主(2110)",
    "description": "<p>关注馆主(2110)</p>",
    "name": "FocusUserShop",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int64",
            "optional": false,
            "field": "UserId",
            "description": "<p>馆主Id</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/FocusUserShop"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/GetAddress",
    "title": "获取用户收货信息(2010)",
    "description": "<p>获取用户收货信息(2010)</p>",
    "name": "GetAddress",
    "group": "User",
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
        "url": "http://localhost:3000/api/GetAddress"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/GetBankCardList",
    "title": "获取银行卡列表(2036)",
    "description": "<p>获取银行卡列表(2036)</p>",
    "name": "GetBankCardList",
    "group": "User",
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
        "url": "http://localhost:3000/api/GetBankCardList"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/GetBillAction",
    "title": "获取账单操作分类信息(2046)",
    "description": "<p>获取账单操作分类信息(2046)</p>",
    "name": "GetBillAction",
    "group": "User",
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
        "url": "http://localhost:3000/api/GetBillAction"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/GetBillDetail",
    "title": "获取账单明细(2029)",
    "description": "<p>获取账单明细(2029)</p>",
    "name": "GetBillDetail",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "pi",
            "description": "<p>分页页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "Type",
            "description": "<p>账单类型 0收支 1提现</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GetBillDetail"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/GetBillDetailV2",
    "title": "获取账单明细V2(2045)",
    "description": "<p>获取账单明细V2(2045)</p>",
    "name": "GetBillDetailV2",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "pi",
            "description": "<p>分页页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "MoneyType",
            "description": "<p>账单类型 1余额明细 2收益明细</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "BillType",
            "description": "<p>收支类型 1支出 2收入</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "ActionType",
            "description": "<p>交易类型 0全部 1消费 2充值 3转账 4收益</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GetBillDetailV2"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/GetCouponList",
    "title": "获取优惠券列表(2034)",
    "description": "<p>获取优惠券列表(2034)</p>",
    "name": "GetCouponList",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "pi",
            "description": "<p>分页页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "Group",
            "description": "<p>分组 1专属卡券 2优惠券</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "type",
            "description": "<p>优惠券类型 0未使用 1已使用 2已过期</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GetCouponList"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/GetDefaultAddress",
    "title": "获取默认地址(2012)",
    "description": "<p>获取默认地址(2012)</p>",
    "name": "GetDefaultAddress",
    "group": "User",
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
        "url": "http://localhost:3000/api/GetDefaultAddress"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/GetMyBalance",
    "title": "获取我的余额(2021)",
    "description": "<p>获取我的余额(2021)</p>",
    "name": "GetMyBalance",
    "group": "User",
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
        "url": "http://localhost:3000/api/GetMyBalance"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/GetMyFans",
    "title": "获取我的粉丝(2122)",
    "description": "<p>获取我的粉丝(2122)</p>",
    "name": "GetMyFans",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int64",
            "optional": false,
            "field": "UserId",
            "description": "<p>用户Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "pi",
            "description": "<p>分页索引</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GetMyFans"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/GetMyFocusShop",
    "title": "获取我的关注(2111)",
    "description": "<p>获取我的关注(2111)</p>",
    "name": "GetMyFocusShop",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int64",
            "optional": false,
            "field": "UserId",
            "description": "<p>用户Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "pi",
            "description": "<p>分页索引</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GetMyFocusShop"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/GetMyMember",
    "title": "获取我的伙伴(2020)",
    "description": "<p>获取我的伙伴(2020)</p>",
    "name": "GetMyMember",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "pi",
            "description": "<p>小伙伴分页</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GetMyMember"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/GetMyShopGoods",
    "title": "获取我的物馆绑定商品(2119)",
    "description": "<p>获取我的物馆绑定商品(2119)</p>",
    "name": "GetMyShopGoods",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "Type",
            "description": "<p>商品类型 1会员礼包 2我的好物</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "pi",
            "description": "<p>分页页码</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GetMyShopGoods"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/GetMyWallet",
    "title": "获取我的钱包(2022)",
    "description": "<p>获取我的钱包(2022)</p>",
    "name": "GetMyWallet",
    "group": "User",
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
        "url": "http://localhost:3000/api/GetMyWallet"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/GetPayBarcode",
    "title": "获取付款二维码(2033)",
    "description": "<p>获取付款二维码(2033)</p>",
    "name": "GetPayBarcode",
    "group": "User",
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
        "url": "http://localhost:3000/api/GetPayBarcode"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/GetPhoneCheckCode",
    "title": "获取手机验证码(2001)",
    "description": "<p>获取手机验证码(2001)</p>",
    "name": "GetPhoneCheckCode",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "CheckExist",
            "description": "<p>是否校验手机号已注册 0不校验 1校验</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GetPhoneCheckCode"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/GetRealNameInfo",
    "title": "获取实名认证信息(2038)",
    "description": "<p>获取实名认证信息(2038)</p>",
    "name": "GetRealNameInfo",
    "group": "User",
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
        "url": "http://localhost:3000/api/GetRealNameInfo"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/GetRealNameList",
    "title": "获取实名认证信息列表(2042)",
    "description": "<p>获取实名认证信息列表(2042)</p>",
    "name": "GetRealNameList",
    "group": "User",
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
        "url": "http://localhost:3000/api/GetRealNameList"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/GetRecomment",
    "title": "获取推荐二维码(2023)",
    "description": "<p>获取推荐二维码(2023)</p>",
    "name": "GetRecomment",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int64",
            "optional": false,
            "field": "UserId",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GetRecomment"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/GetSalesOrder",
    "title": "获取销售订单(2028)",
    "description": "<p>获取销售订单(2028)</p>",
    "name": "GetSalesOrder",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "pi",
            "description": "<p>分页页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "status",
            "description": "<p>状态 0全部 1未结算 2已退款 3已结算</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GetSalesOrder"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/GetShareDetail",
    "title": "获取分享详情(2113)",
    "description": "<p>获取分享详情(2113)</p>",
    "name": "GetShareDetail",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int64",
            "optional": false,
            "field": "shareId",
            "description": "<p>分享Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "pi",
            "description": "<p>分页索引</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "HasLike",
            "description": "<p>是否筛选有点赞评论 1是 0否</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GetShareDetail"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/GetTransferDetail",
    "title": "获取转账明细(2030)",
    "description": "<p>获取转账明细(2030)</p>",
    "name": "GetTransferDetail",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "pi",
            "description": "<p>分页页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "Type",
            "description": "<p>互转类型 0账户余额 1个人收益</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GetTransferDetail"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/GetUserCollection",
    "title": "获取用户收藏(2014)",
    "description": "<p>获取用户收藏(2014)</p>",
    "name": "GetUserCollection",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "pi",
            "description": "<p>分页</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GetUserCollection"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/GetUserInfo",
    "title": "获取用户信息(2000)",
    "description": "<p>获取用户信息(2000)</p>",
    "name": "GetUserInfo",
    "group": "User",
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
        "url": "http://localhost:3000/api/GetUserInfo"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/GetUserShop",
    "title": "获取用户物馆信息(2100)",
    "description": "<p>获取用户物馆信息(2100)</p>",
    "name": "GetUserShop",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int64",
            "optional": false,
            "field": "UserId",
            "description": "<p>用户Id</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GetUserShop"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/GetUserShopSharePage",
    "title": "获取用户物馆分享分页(2106)",
    "description": "<p>获取用户物馆分享分页(2106)</p>",
    "name": "GetUserShopSharePage",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "pi",
            "description": "<p>分页页面</p>"
          },
          {
            "group": "Parameter",
            "type": "Int64",
            "optional": false,
            "field": "UserId",
            "description": "<p>用户Id</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GetUserShopSharePage"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/GetUserShopSquare",
    "title": "获取广场信息(2105)",
    "description": "<p>获取广场信息(2105)</p>",
    "name": "GetUserShopSquare",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "pi",
            "description": "<p>分页页码</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GetUserShopSquare"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/GetWithDrawGuide",
    "title": "获取提现引导信息(2047)",
    "description": "<p>获取提现引导信息(2047)</p>",
    "name": "GetWithDrawGuide",
    "group": "User",
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
        "url": "http://localhost:3000/api/GetWithDrawGuide"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/GiveCoupon",
    "title": "优惠券转赠(2048)",
    "description": "<p>优惠券转赠(2048)</p>",
    "name": "GiveCoupon",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int64",
            "optional": false,
            "field": "CouponId",
            "description": "<p>优惠券Id</p>"
          },
          {
            "group": "Parameter",
            "type": "Int64",
            "optional": false,
            "field": "TargetId",
            "description": "<p>目标用户Id</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/GiveCoupon"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/LikeShare",
    "title": "分享点赞(2108)",
    "description": "<p>分享点赞(2108)</p>",
    "name": "LikeShare",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int64",
            "optional": false,
            "field": "ShareId",
            "description": "<p>分享Id</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/LikeShare"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/LikeShareComment",
    "title": "评论点赞(2109)",
    "description": "<p>评论点赞(2109)</p>",
    "name": "LikeShareComment",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int64",
            "optional": false,
            "field": "CommentId",
            "description": "<p>评论Id</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/LikeShareComment"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/ModifyAddress",
    "title": "修改地址(2025)",
    "description": "<p>修改地址(2025)</p>",
    "name": "ModifyAddress",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int64",
            "optional": false,
            "field": "Id",
            "description": "<p>地址Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>收货人</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Phone",
            "description": "<p>联系电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Address",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "Code",
            "description": "<p>城市编码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "City",
            "description": "<p>所在城市</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "IsDefault",
            "description": "<p>是否默认地址 0否 1是</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/ModifyAddress"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/ModifyUserNick",
    "title": "修改用户昵称(2008)",
    "description": "<p>修改用户昵称(2008)</p>",
    "name": "ModifyUserNick",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "NewNick",
            "description": "<p>新的昵称</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/ModifyUserNick"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/PhoneCheckCodeLogin",
    "title": "手机验证码注册登陆(2003)",
    "description": "<p>手机验证码注册登陆(2003)</p>",
    "name": "PhoneCheckCodeLogin",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CheckCode",
            "description": "<p>验证码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Recommend",
            "description": "<p>推荐人</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/PhoneCheckCodeLogin"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/PhoneLogin",
    "title": "手机号密码登陆(2005)",
    "description": "<p>手机号密码登陆(2005)</p>",
    "name": "PhoneLogin",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Pwd",
            "description": "<p>密码(MD5加密)</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/PhoneLogin"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/PhonePwdRegister",
    "title": "手机号密码注册(2002)",
    "description": "<p>手机号密码注册(2002)</p>",
    "name": "PhonePwdRegister",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CheckCode",
            "description": "<p>验证码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Pwd",
            "description": "<p>密码(MD5加密)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Recommend",
            "description": "<p>推荐人</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/PhonePwdRegister"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/PhoneSetPayPwd",
    "title": "设置支付密码(2024)",
    "description": "<p>设置支付密码(2024)</p>",
    "name": "PhoneSetPayPwd",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CheckCode",
            "description": "<p>验证码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "NewPwd",
            "description": "<p>新密码(MD5加密)</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/PhoneSetPayPwd"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/PhoneSetPwd",
    "title": "通过手机验证码设置账号密码(2006)",
    "description": "<p>通过手机验证码设置账号密码(2006)</p>",
    "name": "PhoneSetPwd",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Phone",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CheckCode",
            "description": "<p>验证码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "NewPwd",
            "description": "<p>新密码(MD5加密)</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/PhoneSetPwd"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/PublishShare",
    "title": "发布分享(2104)",
    "description": "<p>发布分享(2104)</p>",
    "name": "PublishShare",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>分享内容</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/PublishShare"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/PublishShareCommentRequet",
    "title": "发布评论(2107)",
    "description": "<p>发布评论(2107)</p>",
    "name": "PublishShareCommentRequet",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>评论内容</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/PublishShareCommentRequet"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/RegisterUserShop",
    "title": "注册用户物馆(2101)",
    "description": "<p>注册用户物馆(2101)</p>",
    "name": "RegisterUserShop",
    "group": "User",
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
        "url": "http://localhost:3000/api/RegisterUserShop"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/RemoveShopGoods",
    "title": "移除我的物馆商品(2121)",
    "description": "<p>移除我的物馆商品(2121)</p>",
    "name": "RemoveShopGoods",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "GoodsIds",
            "description": ""
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/RemoveShopGoods"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/SearchMyMember",
    "title": "搜索我的伙伴(2050)",
    "description": "<p>搜索我的伙伴(2050)</p>",
    "name": "SearchMyMember",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>搜索关键词</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/SearchMyMember"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/SearchPayUser",
    "title": "查找付款用户(2049)",
    "description": "<p>查找付款用户(2049)</p>",
    "name": "SearchPayUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>查找关键字 手机号/账号</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/SearchPayUser"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/SearchUser",
    "title": "根据关键字查找用户(2027)",
    "description": "<p>根据关键字查找用户(2027)</p>",
    "name": "SearchUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyword",
            "description": "<p>查找关键字 手机号/账号</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/SearchUser"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/SearchUserShop",
    "title": "搜索馆主(2123)",
    "description": "<p>搜索馆主(2123)</p>",
    "name": "SearchUserShop",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SearchWords",
            "description": "<p>搜索词</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/SearchUserShop"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/SendFeedback",
    "title": "发送反馈(2031)",
    "description": "<p>发送反馈(2031)</p>",
    "name": "SendFeedback",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>反馈信息 type:       反馈类型 1商品相关 2物流状况 3客服服务 4优惠活动 5功能异常 6产品建议 7其他 content:    反馈内容 images:     反馈图片列表</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/SendFeedback"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/SetDefaultAddress",
    "title": "设置默认地址(2011)",
    "description": "<p>设置默认地址(2011)</p>",
    "name": "SetDefaultAddress",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int64",
            "optional": false,
            "field": "Id",
            "description": "<p>地址Id</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/SetDefaultAddress"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/SetFriendBg",
    "title": "测试-生成分享图片",
    "description": "<p>测试-生成分享图片</p>",
    "name": "SetFriendBg",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int64",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/SetFriendBg"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/SetMyShopGoods",
    "title": "设置我的物馆商品(2120)",
    "description": "<p>设置我的物馆商品(2120)</p>",
    "name": "SetMyShopGoods",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "GoodsIds",
            "description": "<p>商品Id列表</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/SetMyShopGoods"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/SetPushStatus",
    "title": "设置消息推送(2032)",
    "description": "<p>设置消息推送(2032)</p>",
    "name": "SetPushStatus",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/SetPushStatus"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/SetRecommend",
    "title": "设置推荐人(2039)",
    "description": "<p>设置推荐人(2039)</p>",
    "name": "SetRecommend",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Recommend",
            "description": "<p>推荐人 账号/手机号</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/SetRecommend"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/SetUserShopBackgroud",
    "title": "设置物馆背景图(2116)",
    "description": "<p>设置物馆背景图(2116)</p>",
    "name": "SetUserShopBackgroud",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "backImg",
            "description": "<p>背景图地址</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/SetUserShopBackgroud"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/SetUserShopSignature",
    "title": "设置物馆个性签名(2115)",
    "description": "<p>设置物馆个性签名(2115)</p>",
    "name": "SetUserShopSignature",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sign",
            "description": "<p>签名</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/SetUserShopSignature"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/SetUserShopTitle",
    "title": "设置物馆标题(2117)",
    "description": "<p>设置物馆标题(2117)</p>",
    "name": "SetUserShopTitle",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/SetUserShopTitle"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/SubmitRealName",
    "title": "提交实名认证信息(2037)",
    "description": "<p>提交实名认证信息(2037)</p>",
    "name": "SubmitRealName",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>实名信息</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/SubmitRealName"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/ThirdLogin",
    "title": "第三方账号登陆(2004)",
    "description": "<p>第三方账号登陆(2004)</p>",
    "name": "ThirdLogin",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>第三方登陆信息</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/ThirdLogin"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/UpdateUserHead",
    "title": "修改用户头像",
    "description": "<p>修改用户头像</p>",
    "name": "UpdateUserHead",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filePath",
            "description": "<p>上传返回的文件路径</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/UpdateUserHead"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/UpdateUserSex",
    "title": "修改用户性别(2019)",
    "description": "<p>修改用户性别(2019)</p>",
    "name": "UpdateUserSex",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "Sex",
            "description": "<p>设置性别 1:男 2:女</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/UpdateUserSex"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/UploadImg",
    "title": "上传图片(2017)",
    "description": "<p>上传图片(2017)</p>",
    "name": "UploadImg",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "value",
            "description": "<p>图片base64</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/UploadImg"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/ValidateAndCacheCardInfo",
    "title": "获取银行卡信息(2044)",
    "description": "<p>获取银行卡信息(2044)</p>",
    "name": "ValidateAndCacheCardInfo",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cardNo",
            "description": "<p>银行卡号</p>"
          }
        ]
      }
    },
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
        "url": "http://localhost:3000/api/ValidateAndCacheCardInfo"
      }
    ],
    "version": "1.0.0",
    "filename": "Controllers/Action_Test.js",
    "groupTitle": "User"
  }
] });
