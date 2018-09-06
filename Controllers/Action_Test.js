// -------------------------------------------------------
// Copyright (C) SharpEngineNode 版权所有。
// 文 件 名：node_gate/Controllers/Action.js
// 创建标识：2018/9/6 16:56:15 Created by Gyc
// 功能说明：
// 注意事项：
// 
// 更新记录：
// -------------------------------------------------------

var querystring = require('querystring'); 
var url = require('url');
var common = require('../common');

function initRoute(app)
{
    /**
     * @api {get} /api/GetServerTime 获取服务器当前时间(999)
     * @apiDescription 获取服务器当前时间，用于Socket链路下，时间同步
     * @apiName GetServerTime
     * @apiGroup Actions
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetServerTime
     * @apiVersion 1.0.0
     */
    app.get('/api/GetServerTime', function (req, res) {
        var requestUrl = encodeURI("/?actionid=999&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetIndex 获取首页信息(1001)
     * @apiDescription 获取首页信息
     * @apiName GetIndex
     * @apiGroup Index
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetIndex
     * @apiVersion 1.0.0
     */
    app.get('/api/GetIndex', function (req, res) {
        var requestUrl = encodeURI("/?actionid=1001&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetSearchInfo 获取搜索界面信息(1002)
     * @apiDescription 获取搜索界面信息(1002)
     * @apiName GetSearchInfo
     * @apiGroup Index
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetSearchInfo
     * @apiVersion 1.0.0
     */
    app.get('/api/GetSearchInfo', function (req, res) {
        var requestUrl = encodeURI("/?actionid=1002&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetSearchResult 获取搜索结果(1003)
     * @apiDescription 获取搜索结果(1003)
     * @apiName GetSearchResult
     * @apiGroup Index
     * @apiParam {String} Key 关键词
     * @apiParam {Int32} SortType 排序类型 0默认综合排序 1销量反序 2销量正序 3价格反序 4价格正序
     * @apiParam {Int32} pi 页码 从1开始
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetSearchResult
     * @apiVersion 1.0.0
     */
    app.get('/api/GetSearchResult/:Key/:SortType/:pi', function (req, res) {
        var requestUrl = encodeURI("/?actionid=1003&" +"Key=" + req.params.Key + "&"+"SortType=" + req.params.SortType + "&"+"pi=" + req.params.pi + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetWxShareInfo 获取微信分享内容(1004)
     * @apiDescription 获取微信分享内容(1004)
     * @apiName GetWxShareInfo
     * @apiGroup Index
     * @apiParam {String} routeUrl 路由地址,需要urlEncode
            etc. 
            source：particulars/473/601
            routeUrl: particulars%2f473%2f601
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetWxShareInfo
     * @apiVersion 1.0.0
     */
    app.get('/api/GetWxShareInfo/:routeUrl', function (req, res) {
        var requestUrl = encodeURI("/?actionid=1004&" +"routeUrl=" + req.params.routeUrl + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetAllClassify 获取分类列表(1100)
     * @apiDescription 获取分类列表(1100)
     * @apiName GetAllClassify
     * @apiGroup Goods
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetAllClassify
     * @apiVersion 1.0.0
     */
    app.get('/api/GetAllClassify', function (req, res) {
        var requestUrl = encodeURI("/?actionid=1100&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetClassifyGoods 获取分类商品(1101)
     * @apiDescription 获取分类商品(1101)
     * @apiName GetClassifyGoods
     * @apiGroup Goods
     * @apiParam {Int32} Id 分类Id
     * @apiParam {Int32} SortType 排序类型 0默认综合排序 1销量反序 2销量正序 3价格反序 4价格正序
     * @apiParam {Int32} pi 页码 从1开始
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetClassifyGoods
     * @apiVersion 1.0.0
     */
    app.get('/api/GetClassifyGoods/:Id/:SortType/:pi', function (req, res) {
        var requestUrl = encodeURI("/?actionid=1101&" +"Id=" + req.params.Id + "&"+"SortType=" + req.params.SortType + "&"+"pi=" + req.params.pi + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetGoodsInfo 获取商品信息(1200)
     * @apiDescription 获取商品信息(1200)
     * @apiName GetGoodsInfo
     * @apiGroup Goods
     * @apiParam {Int32} Id 商品Id
     * @apiParam {Int32} SkuId SKUId, 可不传，默认为最小金额Sku
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetGoodsInfo
     * @apiVersion 1.0.0
     */
    app.get('/api/GetGoodsInfo/:Id/:SkuId', function (req, res) {
        var requestUrl = encodeURI("/?actionid=1200&" +"Id=" + req.params.Id + "&"+"SkuId=" + req.params.SkuId + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetNormalActivity 获取通用活动页面(1300)
     * @apiDescription 获取通用活动页面(1300)
     * @apiName GetNormalActivity
     * @apiGroup Index
     * @apiParam {Int32} Id 活动Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetNormalActivity
     * @apiVersion 1.0.0
     */
    app.get('/api/GetNormalActivity/:Id', function (req, res) {
        var requestUrl = encodeURI("/?actionid=1300&" +"Id=" + req.params.Id + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetMemberUpgrade 获取会员升级专区信息(1301)
     * @apiDescription 获取会员升级专区信息(1301)
     * @apiName GetMemberUpgrade
     * @apiGroup Index
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetMemberUpgrade
     * @apiVersion 1.0.0
     */
    app.get('/api/GetMemberUpgrade', function (req, res) {
        var requestUrl = encodeURI("/?actionid=1301&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetUserInfo 获取用户信息(2000)
     * @apiDescription 获取用户信息(2000)
     * @apiName GetUserInfo
     * @apiGroup User
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetUserInfo
     * @apiVersion 1.0.0
     */
    app.get('/api/GetUserInfo', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2000&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetPhoneCheckCode 获取手机验证码(2001)
     * @apiDescription 获取手机验证码(2001)
     * @apiName GetPhoneCheckCode
     * @apiGroup User
     * @apiParam {String} Phone 手机号
     * @apiParam {Int32} CheckExist 是否校验手机号已注册 0不校验 1校验
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetPhoneCheckCode
     * @apiVersion 1.0.0
     */
    app.get('/api/GetPhoneCheckCode/:Phone/:CheckExist', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2001&" +"Phone=" + req.params.Phone + "&"+"CheckExist=" + req.params.CheckExist + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/PhonePwdRegister 手机号密码注册(2002)
     * @apiDescription 手机号密码注册(2002)
     * @apiName PhonePwdRegister
     * @apiGroup User
     * @apiParam {String} Phone 手机号
     * @apiParam {String} CheckCode 验证码
     * @apiParam {String} Pwd 密码(MD5加密)
     * @apiParam {String} Recommend 推荐人
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/PhonePwdRegister
     * @apiVersion 1.0.0
     */
    app.get('/api/PhonePwdRegister/:Phone/:CheckCode/:Pwd/:Recommend', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2002&" +"Phone=" + req.params.Phone + "&"+"CheckCode=" + req.params.CheckCode + "&"+"Pwd=" + req.params.Pwd + "&"+"Recommend=" + req.params.Recommend + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/PhoneCheckCodeLogin 手机验证码注册登陆(2003)
     * @apiDescription 手机验证码注册登陆(2003)
     * @apiName PhoneCheckCodeLogin
     * @apiGroup User
     * @apiParam {String} Phone 手机号
     * @apiParam {String} CheckCode 验证码
     * @apiParam {String} Recommend 推荐人
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/PhoneCheckCodeLogin
     * @apiVersion 1.0.0
     */
    app.get('/api/PhoneCheckCodeLogin/:Phone/:CheckCode/:Recommend', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2003&" +"Phone=" + req.params.Phone + "&"+"CheckCode=" + req.params.CheckCode + "&"+"Recommend=" + req.params.Recommend + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/ThirdLogin 第三方账号登陆(2004)
     * @apiDescription 第三方账号登陆(2004)
     * @apiName ThirdLogin
     * @apiGroup User
     * @apiParam {String} value 第三方登陆信息
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/ThirdLogin
     * @apiVersion 1.0.0
     */
    app.post('/api/ThirdLogin', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2004&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'post', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/PhoneLogin 手机号密码登陆(2005)
     * @apiDescription 手机号密码登陆(2005)
     * @apiName PhoneLogin
     * @apiGroup User
     * @apiParam {String} Phone 手机号
     * @apiParam {String} Pwd 密码(MD5加密)
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/PhoneLogin
     * @apiVersion 1.0.0
     */
    app.get('/api/PhoneLogin/:Phone/:Pwd', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2005&" +"Phone=" + req.params.Phone + "&"+"Pwd=" + req.params.Pwd + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/PhoneSetPwd 通过手机验证码设置账号密码(2006)
     * @apiDescription 通过手机验证码设置账号密码(2006)
     * @apiName PhoneSetPwd
     * @apiGroup User
     * @apiParam {String} Phone 手机号
     * @apiParam {String} CheckCode 验证码
     * @apiParam {String} NewPwd 新密码(MD5加密)
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/PhoneSetPwd
     * @apiVersion 1.0.0
     */
    app.get('/api/PhoneSetPwd/:Phone/:CheckCode/:NewPwd', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2006&" +"Phone=" + req.params.Phone + "&"+"CheckCode=" + req.params.CheckCode + "&"+"NewPwd=" + req.params.NewPwd + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/BindPhone 绑定手机号(2007)
     * @apiDescription 绑定手机号(2007)
     * @apiName BindPhone
     * @apiGroup User
     * @apiParam {String} Phone 手机号
     * @apiParam {String} CheckCode 验证码
     * @apiParam {Int32} Force 强制绑定 0否 1是
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/BindPhone
     * @apiVersion 1.0.0
     */
    app.get('/api/BindPhone/:Phone/:CheckCode/:Force', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2007&" +"Phone=" + req.params.Phone + "&"+"CheckCode=" + req.params.CheckCode + "&"+"Force=" + req.params.Force + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/ModifyUserNick 修改用户昵称(2008)
     * @apiDescription 修改用户昵称(2008)
     * @apiName ModifyUserNick
     * @apiGroup User
     * @apiParam {String} NewNick 新的昵称
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/ModifyUserNick
     * @apiVersion 1.0.0
     */
    app.get('/api/ModifyUserNick/:NewNick', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2008&" +"NewNick=" + req.params.NewNick + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/AddAddress 添加收货信息(2009)
     * @apiDescription 添加收货信息(2009)
     * @apiName AddAddress
     * @apiGroup User
     * @apiParam {String} Name 收货人
     * @apiParam {String} Phone 联系电话
     * @apiParam {String} Address 详细地址
     * @apiParam {Int32} Code 城市编码
     * @apiParam {String} City 所在城市
     * @apiParam {Int32} SetDefault 是否设置为默认地址 0:否 1:是
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/AddAddress
     * @apiVersion 1.0.0
     */
    app.get('/api/AddAddress/:Name/:Phone/:Address/:Code/:City/:SetDefault', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2009&" +"Name=" + req.params.Name + "&"+"Phone=" + req.params.Phone + "&"+"Address=" + req.params.Address + "&"+"Code=" + req.params.Code + "&"+"City=" + req.params.City + "&"+"SetDefault=" + req.params.SetDefault + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetAddress 获取用户收货信息(2010)
     * @apiDescription 获取用户收货信息(2010)
     * @apiName GetAddress
     * @apiGroup User
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetAddress
     * @apiVersion 1.0.0
     */
    app.get('/api/GetAddress', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2010&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SetDefaultAddress 设置默认地址(2011)
     * @apiDescription 设置默认地址(2011)
     * @apiName SetDefaultAddress
     * @apiGroup User
     * @apiParam {Int64} Id 地址Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SetDefaultAddress
     * @apiVersion 1.0.0
     */
    app.get('/api/SetDefaultAddress/:Id', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2011&" +"Id=" + req.params.Id + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetDefaultAddress 获取默认地址(2012)
     * @apiDescription 获取默认地址(2012)
     * @apiName GetDefaultAddress
     * @apiGroup User
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetDefaultAddress
     * @apiVersion 1.0.0
     */
    app.get('/api/GetDefaultAddress', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2012&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/AddUserCollection 添加用户收藏(2013)
     * @apiDescription 添加用户收藏(2013)
     * @apiName AddUserCollection
     * @apiGroup User
     * @apiParam {Int32} SkuId 商品SkuId
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/AddUserCollection
     * @apiVersion 1.0.0
     */
    app.get('/api/AddUserCollection/:SkuId', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2013&" +"SkuId=" + req.params.SkuId + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetUserCollection 获取用户收藏(2014)
     * @apiDescription 获取用户收藏(2014)
     * @apiName GetUserCollection
     * @apiGroup User
     * @apiParam {Int32} pi 分页
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetUserCollection
     * @apiVersion 1.0.0
     */
    app.get('/api/GetUserCollection/:pi', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2014&" +"pi=" + req.params.pi + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/DeleteUserCollection 删除用户收藏(2015)
     * @apiDescription 删除用户收藏(2015)
     * @apiName DeleteUserCollection
     * @apiGroup User
     * @apiParam {String} collectionId 购物车商品skuId，逗号分割
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/DeleteUserCollection
     * @apiVersion 1.0.0
     */
    app.get('/api/DeleteUserCollection/:collectionId', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2015&" +"collectionId=" + req.params.collectionId + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/ClearInvalidCollection 一键清空失效(2016)
     * @apiDescription 一键清空失效(2016)
     * @apiName ClearInvalidCollection
     * @apiGroup User
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/ClearInvalidCollection
     * @apiVersion 1.0.0
     */
    app.get('/api/ClearInvalidCollection', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2016&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/UploadImg 上传图片(2017)
     * @apiDescription 上传图片(2017)
     * @apiName UploadImg
     * @apiGroup User
     * @apiParam {String} value 图片base64
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/UploadImg
     * @apiVersion 1.0.0
     */
    app.post('/api/UploadImg', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2017&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'post', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/UpdateUserHead 修改用户头像
     * @apiDescription 修改用户头像
     * @apiName UpdateUserHead
     * @apiGroup User
     * @apiParam {String} filePath 上传返回的文件路径
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/UpdateUserHead
     * @apiVersion 1.0.0
     */
    app.get('/api/UpdateUserHead/:filePath', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2018&" +"filePath=" + req.params.filePath + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/UpdateUserSex 修改用户性别(2019)
     * @apiDescription 修改用户性别(2019)
     * @apiName UpdateUserSex
     * @apiGroup User
     * @apiParam {Int32} Sex 设置性别 1:男 2:女
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/UpdateUserSex
     * @apiVersion 1.0.0
     */
    app.get('/api/UpdateUserSex/:Sex', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2019&" +"Sex=" + req.params.Sex + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetMyMember 获取我的伙伴(2020)
     * @apiDescription 获取我的伙伴(2020)
     * @apiName GetMyMember
     * @apiGroup User
     * @apiParam {Int32} pi 小伙伴分页
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetMyMember
     * @apiVersion 1.0.0
     */
    app.get('/api/GetMyMember/:pi', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2020&" +"pi=" + req.params.pi + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetMyBalance 获取我的余额(2021)
     * @apiDescription 获取我的余额(2021)
     * @apiName GetMyBalance
     * @apiGroup User
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetMyBalance
     * @apiVersion 1.0.0
     */
    app.get('/api/GetMyBalance', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2021&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetMyWallet 获取我的钱包(2022)
     * @apiDescription 获取我的钱包(2022)
     * @apiName GetMyWallet
     * @apiGroup User
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetMyWallet
     * @apiVersion 1.0.0
     */
    app.get('/api/GetMyWallet', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2022&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetRecomment 获取推荐二维码(2023)
     * @apiDescription 获取推荐二维码(2023)
     * @apiName GetRecomment
     * @apiGroup User
     * @apiParam {Int64} UserId 用户id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetRecomment
     * @apiVersion 1.0.0
     */
    app.get('/api/GetRecomment/:UserId', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2023&" +"UserId=" + req.params.UserId + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/PhoneSetPayPwd 设置支付密码(2024)
     * @apiDescription 设置支付密码(2024)
     * @apiName PhoneSetPayPwd
     * @apiGroup User
     * @apiParam {String} Phone 手机号
     * @apiParam {String} CheckCode 验证码
     * @apiParam {String} NewPwd 新密码(MD5加密)
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/PhoneSetPayPwd
     * @apiVersion 1.0.0
     */
    app.get('/api/PhoneSetPayPwd/:Phone/:CheckCode/:NewPwd', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2024&" +"Phone=" + req.params.Phone + "&"+"CheckCode=" + req.params.CheckCode + "&"+"NewPwd=" + req.params.NewPwd + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/ModifyAddress 修改地址(2025)
     * @apiDescription 修改地址(2025)
     * @apiName ModifyAddress
     * @apiGroup User
     * @apiParam {Int64} Id 地址Id
     * @apiParam {String} Name 收货人
     * @apiParam {String} Phone 联系电话
     * @apiParam {String} Address 详细地址
     * @apiParam {Int32} Code 城市编码
     * @apiParam {String} City 所在城市
     * @apiParam {Int32} IsDefault 是否默认地址 0否 1是
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/ModifyAddress
     * @apiVersion 1.0.0
     */
    app.get('/api/ModifyAddress/:Id/:Name/:Phone/:Address/:Code/:City/:IsDefault', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2025&" +"Id=" + req.params.Id + "&"+"Name=" + req.params.Name + "&"+"Phone=" + req.params.Phone + "&"+"Address=" + req.params.Address + "&"+"Code=" + req.params.Code + "&"+"City=" + req.params.City + "&"+"IsDefault=" + req.params.IsDefault + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/DeleteAddress 删除地址(2026)
     * @apiDescription 删除地址(2026)
     * @apiName DeleteAddress
     * @apiGroup User
     * @apiParam {Int64} Id 地址Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/DeleteAddress
     * @apiVersion 1.0.0
     */
    app.get('/api/DeleteAddress/:Id', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2026&" +"Id=" + req.params.Id + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SearchUser 根据关键字查找用户(2027)
     * @apiDescription 根据关键字查找用户(2027)
     * @apiName SearchUser
     * @apiGroup User
     * @apiParam {String} keyword 查找关键字 手机号/账号
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SearchUser
     * @apiVersion 1.0.0
     */
    app.get('/api/SearchUser/:keyword', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2027&" +"keyword=" + req.params.keyword + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetSalesOrder 获取销售订单(2028)
     * @apiDescription 获取销售订单(2028)
     * @apiName GetSalesOrder
     * @apiGroup User
     * @apiParam {Int32} pi 分页页码
     * @apiParam {Int32} status 状态 0全部 1未结算 2已退款 3已结算
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetSalesOrder
     * @apiVersion 1.0.0
     */
    app.get('/api/GetSalesOrder/:pi/:status', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2028&" +"pi=" + req.params.pi + "&"+"status=" + req.params.status + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetBillDetail 获取账单明细(2029)
     * @apiDescription 获取账单明细(2029)
     * @apiName GetBillDetail
     * @apiGroup User
     * @apiParam {Int32} pi 分页页码
     * @apiParam {Int32} Type 账单类型 0收支 1提现
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetBillDetail
     * @apiVersion 1.0.0
     */
    app.get('/api/GetBillDetail/:pi/:Type', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2029&" +"pi=" + req.params.pi + "&"+"Type=" + req.params.Type + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetTransferDetail 获取转账明细(2030)
     * @apiDescription 获取转账明细(2030)
     * @apiName GetTransferDetail
     * @apiGroup User
     * @apiParam {Int32} pi 分页页码
     * @apiParam {Int32} Type 互转类型 0账户余额 1个人收益
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetTransferDetail
     * @apiVersion 1.0.0
     */
    app.get('/api/GetTransferDetail/:pi/:Type', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2030&" +"pi=" + req.params.pi + "&"+"Type=" + req.params.Type + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SendFeedback 发送反馈(2031)
     * @apiDescription 发送反馈(2031)
     * @apiName SendFeedback
     * @apiGroup User
     * @apiParam {String} value 反馈信息
            type:       反馈类型 1商品相关 2物流状况 3客服服务 4优惠活动 5功能异常 6产品建议 7其他
            content:    反馈内容
            images:     反馈图片列表
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SendFeedback
     * @apiVersion 1.0.0
     */
    app.post('/api/SendFeedback', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2031&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'post', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SetPushStatus 设置消息推送(2032)
     * @apiDescription 设置消息推送(2032)
     * @apiName SetPushStatus
     * @apiGroup User
     * @apiParam {String} token 
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SetPushStatus
     * @apiVersion 1.0.0
     */
    app.get('/api/SetPushStatus/:token', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2032&" +"token=" + req.params.token + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetPayBarcode 获取付款二维码(2033)
     * @apiDescription 获取付款二维码(2033)
     * @apiName GetPayBarcode
     * @apiGroup User
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetPayBarcode
     * @apiVersion 1.0.0
     */
    app.get('/api/GetPayBarcode', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2033&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetCouponList 获取优惠券列表(2034)
     * @apiDescription 获取优惠券列表(2034)
     * @apiName GetCouponList
     * @apiGroup User
     * @apiParam {Int32} pi 分页页码
     * @apiParam {Int32} Group 分组 1专属卡券 2优惠券
     * @apiParam {Int32} type 优惠券类型 0未使用 1已使用 2已过期
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetCouponList
     * @apiVersion 1.0.0
     */
    app.get('/api/GetCouponList/:pi/:Group/:type', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2034&" +"pi=" + req.params.pi + "&"+"Group=" + req.params.Group + "&"+"type=" + req.params.type + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/AddBankCard 添加银行卡(2035)
     * @apiDescription 添加银行卡(2035)
     * @apiName AddBankCard
     * @apiGroup User
     * @apiParam {String} value 银行卡信息
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/AddBankCard
     * @apiVersion 1.0.0
     */
    app.post('/api/AddBankCard', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2035&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'post', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetBankCardList 获取银行卡列表(2036)
     * @apiDescription 获取银行卡列表(2036)
     * @apiName GetBankCardList
     * @apiGroup User
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetBankCardList
     * @apiVersion 1.0.0
     */
    app.get('/api/GetBankCardList', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2036&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SubmitRealName 提交实名认证信息(2037)
     * @apiDescription 提交实名认证信息(2037)
     * @apiName SubmitRealName
     * @apiGroup User
     * @apiParam {String} value 实名信息
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SubmitRealName
     * @apiVersion 1.0.0
     */
    app.post('/api/SubmitRealName', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2037&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'post', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetRealNameInfo 获取实名认证信息(2038)
     * @apiDescription 获取实名认证信息(2038)
     * @apiName GetRealNameInfo
     * @apiGroup User
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetRealNameInfo
     * @apiVersion 1.0.0
     */
    app.get('/api/GetRealNameInfo', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2038&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SetRecommend 设置推荐人(2039)
     * @apiDescription 设置推荐人(2039)
     * @apiName SetRecommend
     * @apiGroup User
     * @apiParam {String} Recommend 推荐人 账号/手机号
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SetRecommend
     * @apiVersion 1.0.0
     */
    app.get('/api/SetRecommend/:Recommend', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2039&" +"Recommend=" + req.params.Recommend + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SetFriendBg 测试-生成分享图片
     * @apiDescription 测试-生成分享图片
     * @apiName SetFriendBg
     * @apiGroup User
     * @apiParam {Int64} id 
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SetFriendBg
     * @apiVersion 1.0.0
     */
    app.get('/api/SetFriendBg/:id', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2040&" +"id=" + req.params.id + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/DeleteBankCardApply 删除银行卡申请记录(2041)
     * @apiDescription 删除银行卡申请记录(2041)
     * @apiName DeleteBankCardApply
     * @apiGroup User
     * @apiParam {Int32} id 申请Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/DeleteBankCardApply
     * @apiVersion 1.0.0
     */
    app.get('/api/DeleteBankCardApply/:id', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2041&" +"id=" + req.params.id + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetRealNameList 获取实名认证信息列表(2042)
     * @apiDescription 获取实名认证信息列表(2042)
     * @apiName GetRealNameList
     * @apiGroup User
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetRealNameList
     * @apiVersion 1.0.0
     */
    app.get('/api/GetRealNameList', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2042&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/DeleteRealNameData 删除实名认证信息(2043)
     * @apiDescription 删除实名认证信息(2043)
     * @apiName DeleteRealNameData
     * @apiGroup User
     * @apiParam {Int32} id 实名认证Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/DeleteRealNameData
     * @apiVersion 1.0.0
     */
    app.get('/api/DeleteRealNameData/:id', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2043&" +"id=" + req.params.id + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/ValidateAndCacheCardInfo 获取银行卡信息(2044)
     * @apiDescription 获取银行卡信息(2044)
     * @apiName ValidateAndCacheCardInfo
     * @apiGroup User
     * @apiParam {String} cardNo 银行卡号
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/ValidateAndCacheCardInfo
     * @apiVersion 1.0.0
     */
    app.get('/api/ValidateAndCacheCardInfo/:cardNo', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2044&" +"cardNo=" + req.params.cardNo + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetBillDetailV2 获取账单明细V2(2045)
     * @apiDescription 获取账单明细V2(2045)
     * @apiName GetBillDetailV2
     * @apiGroup User
     * @apiParam {Int32} pi 分页页码
     * @apiParam {Int32} MoneyType 账单类型 1余额明细 2收益明细
     * @apiParam {Int32} BillType 收支类型 1支出 2收入
     * @apiParam {Int32} ActionType 交易类型 0全部 1消费 2充值 3转账 4收益
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetBillDetailV2
     * @apiVersion 1.0.0
     */
    app.get('/api/GetBillDetailV2/:pi/:MoneyType/:BillType/:ActionType', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2045&" +"pi=" + req.params.pi + "&"+"MoneyType=" + req.params.MoneyType + "&"+"BillType=" + req.params.BillType + "&"+"ActionType=" + req.params.ActionType + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetBillAction 获取账单操作分类信息(2046)
     * @apiDescription 获取账单操作分类信息(2046)
     * @apiName GetBillAction
     * @apiGroup User
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetBillAction
     * @apiVersion 1.0.0
     */
    app.get('/api/GetBillAction', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2046&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetWithDrawGuide 获取提现引导信息(2047)
     * @apiDescription 获取提现引导信息(2047)
     * @apiName GetWithDrawGuide
     * @apiGroup User
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetWithDrawGuide
     * @apiVersion 1.0.0
     */
    app.get('/api/GetWithDrawGuide', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2047&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GiveCoupon 优惠券转赠(2048)
     * @apiDescription 优惠券转赠(2048)
     * @apiName GiveCoupon
     * @apiGroup User
     * @apiParam {Int64} CouponId 优惠券Id
     * @apiParam {Int64} TargetId 目标用户Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GiveCoupon
     * @apiVersion 1.0.0
     */
    app.get('/api/GiveCoupon/:CouponId/:TargetId', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2048&" +"CouponId=" + req.params.CouponId + "&"+"TargetId=" + req.params.TargetId + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SearchPayUser 查找付款用户(2049)
     * @apiDescription 查找付款用户(2049)
     * @apiName SearchPayUser
     * @apiGroup User
     * @apiParam {String} keyword 查找关键字 手机号/账号
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SearchPayUser
     * @apiVersion 1.0.0
     */
    app.get('/api/SearchPayUser/:keyword', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2049&" +"keyword=" + req.params.keyword + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SearchMyMember 搜索我的伙伴(2050)
     * @apiDescription 搜索我的伙伴(2050)
     * @apiName SearchMyMember
     * @apiGroup User
     * @apiParam {String} keyword 搜索关键词
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SearchMyMember
     * @apiVersion 1.0.0
     */
    app.get('/api/SearchMyMember/:keyword', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2050&" +"keyword=" + req.params.keyword + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetUserShop 获取用户物馆信息(2100)
     * @apiDescription 获取用户物馆信息(2100)
     * @apiName GetUserShop
     * @apiGroup User
     * @apiParam {Int64} UserId 用户Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetUserShop
     * @apiVersion 1.0.0
     */
    app.get('/api/GetUserShop/:UserId', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2100&" +"UserId=" + req.params.UserId + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/RegisterUserShop 注册用户物馆(2101)
     * @apiDescription 注册用户物馆(2101)
     * @apiName RegisterUserShop
     * @apiGroup User
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/RegisterUserShop
     * @apiVersion 1.0.0
     */
    app.get('/api/RegisterUserShop', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2101&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/AddUserShopSelected 添加馆主精选
     * @apiDescription 添加馆主精选
     * @apiName AddUserShopSelected
     * @apiGroup User
     * @apiParam {Int32} skuId SkuId
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/AddUserShopSelected
     * @apiVersion 1.0.0
     */
    app.get('/api/AddUserShopSelected/:skuId', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2102&" +"skuId=" + req.params.skuId + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/DeleteUserShopSelected 删除馆主精选
     * @apiDescription 删除馆主精选
     * @apiName DeleteUserShopSelected
     * @apiGroup User
     * @apiParam {String} id 精选Id列表 逗号分隔
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/DeleteUserShopSelected
     * @apiVersion 1.0.0
     */
    app.get('/api/DeleteUserShopSelected/:id', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2103&" +"id=" + req.params.id + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/PublishShare 发布分享(2104)
     * @apiDescription 发布分享(2104)
     * @apiName PublishShare
     * @apiGroup User
     * @apiParam {String} value 分享内容
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/PublishShare
     * @apiVersion 1.0.0
     */
    app.post('/api/PublishShare', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2104&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'post', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetUserShopSquare 获取广场信息(2105)
     * @apiDescription 获取广场信息(2105)
     * @apiName GetUserShopSquare
     * @apiGroup User
     * @apiParam {Int32} pi 分页页码
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetUserShopSquare
     * @apiVersion 1.0.0
     */
    app.get('/api/GetUserShopSquare/:pi', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2105&" +"pi=" + req.params.pi + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetUserShopSharePage 获取用户物馆分享分页(2106)
     * @apiDescription 获取用户物馆分享分页(2106)
     * @apiName GetUserShopSharePage
     * @apiGroup User
     * @apiParam {Int32} pi 分页页面
     * @apiParam {Int64} UserId 用户Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetUserShopSharePage
     * @apiVersion 1.0.0
     */
    app.get('/api/GetUserShopSharePage/:pi/:UserId', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2106&" +"pi=" + req.params.pi + "&"+"UserId=" + req.params.UserId + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/PublishShareCommentRequet 发布评论(2107)
     * @apiDescription 发布评论(2107)
     * @apiName PublishShareCommentRequet
     * @apiGroup User
     * @apiParam {String} value 评论内容
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/PublishShareCommentRequet
     * @apiVersion 1.0.0
     */
    app.post('/api/PublishShareCommentRequet', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2107&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'post', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/LikeShare 分享点赞(2108)
     * @apiDescription 分享点赞(2108)
     * @apiName LikeShare
     * @apiGroup User
     * @apiParam {Int64} ShareId 分享Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/LikeShare
     * @apiVersion 1.0.0
     */
    app.get('/api/LikeShare/:ShareId', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2108&" +"ShareId=" + req.params.ShareId + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/LikeShareComment 评论点赞(2109)
     * @apiDescription 评论点赞(2109)
     * @apiName LikeShareComment
     * @apiGroup User
     * @apiParam {Int64} CommentId 评论Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/LikeShareComment
     * @apiVersion 1.0.0
     */
    app.get('/api/LikeShareComment/:CommentId', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2109&" +"CommentId=" + req.params.CommentId + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/FocusUserShop 关注馆主(2110)
     * @apiDescription 关注馆主(2110)
     * @apiName FocusUserShop
     * @apiGroup User
     * @apiParam {Int64} UserId 馆主Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/FocusUserShop
     * @apiVersion 1.0.0
     */
    app.get('/api/FocusUserShop/:UserId', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2110&" +"UserId=" + req.params.UserId + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetMyFocusShop 获取我的关注(2111)
     * @apiDescription 获取我的关注(2111)
     * @apiName GetMyFocusShop
     * @apiGroup User
     * @apiParam {Int64} UserId 用户Id
     * @apiParam {Int32} pi 分页索引
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetMyFocusShop
     * @apiVersion 1.0.0
     */
    app.get('/api/GetMyFocusShop/:UserId/:pi', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2111&" +"UserId=" + req.params.UserId + "&"+"pi=" + req.params.pi + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/DeleteMyFocus 删除馆主关注(2112)
     * @apiDescription 删除馆主关注(2112)
     * @apiName DeleteMyFocus
     * @apiGroup User
     * @apiParam {String} Id 关注Id,逗号分隔
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/DeleteMyFocus
     * @apiVersion 1.0.0
     */
    app.get('/api/DeleteMyFocus/:Id', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2112&" +"Id=" + req.params.Id + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetShareDetail 获取分享详情(2113)
     * @apiDescription 获取分享详情(2113)
     * @apiName GetShareDetail
     * @apiGroup User
     * @apiParam {Int64} shareId 分享Id
     * @apiParam {Int32} pi 分页索引
     * @apiParam {Int32} HasLike 是否筛选有点赞评论 1是 0否
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetShareDetail
     * @apiVersion 1.0.0
     */
    app.get('/api/GetShareDetail/:shareId/:pi/:HasLike', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2113&" +"shareId=" + req.params.shareId + "&"+"pi=" + req.params.pi + "&"+"HasLike=" + req.params.HasLike + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/DeleteUserShare 删除单条分享(2114)
     * @apiDescription 删除单条分享(2114)
     * @apiName DeleteUserShare
     * @apiGroup User
     * @apiParam {Int64} shareId 分享Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/DeleteUserShare
     * @apiVersion 1.0.0
     */
    app.get('/api/DeleteUserShare/:shareId', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2114&" +"shareId=" + req.params.shareId + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SetUserShopSignature 设置物馆个性签名(2115)
     * @apiDescription 设置物馆个性签名(2115)
     * @apiName SetUserShopSignature
     * @apiGroup User
     * @apiParam {String} sign 签名
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SetUserShopSignature
     * @apiVersion 1.0.0
     */
    app.get('/api/SetUserShopSignature/:sign', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2115&" +"sign=" + req.params.sign + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SetUserShopBackgroud 设置物馆背景图(2116)
     * @apiDescription 设置物馆背景图(2116)
     * @apiName SetUserShopBackgroud
     * @apiGroup User
     * @apiParam {String} backImg 背景图地址
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SetUserShopBackgroud
     * @apiVersion 1.0.0
     */
    app.get('/api/SetUserShopBackgroud/:backImg', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2116&" +"backImg=" + req.params.backImg + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SetUserShopTitle 设置物馆标题(2117)
     * @apiDescription 设置物馆标题(2117)
     * @apiName SetUserShopTitle
     * @apiGroup User
     * @apiParam {String} title 标题
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SetUserShopTitle
     * @apiVersion 1.0.0
     */
    app.get('/api/SetUserShopTitle/:title', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2117&" +"title=" + req.params.title + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/AutoSetShopSelected 一键同步推荐(2118)
     * @apiDescription 一键同步推荐(2118)
     * @apiName AutoSetShopSelected
     * @apiGroup User
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/AutoSetShopSelected
     * @apiVersion 1.0.0
     */
    app.get('/api/AutoSetShopSelected', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2118&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetMyShopGoods 获取我的物馆绑定商品(2119)
     * @apiDescription 获取我的物馆绑定商品(2119)
     * @apiName GetMyShopGoods
     * @apiGroup User
     * @apiParam {Int32} Type 商品类型 1会员礼包 2我的好物
     * @apiParam {Int32} pi 分页页码
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetMyShopGoods
     * @apiVersion 1.0.0
     */
    app.get('/api/GetMyShopGoods/:Type/:pi', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2119&" +"Type=" + req.params.Type + "&"+"pi=" + req.params.pi + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SetMyShopGoods 设置我的物馆商品(2120)
     * @apiDescription 设置我的物馆商品(2120)
     * @apiName SetMyShopGoods
     * @apiGroup User
     * @apiParam {String} GoodsIds 商品Id列表
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SetMyShopGoods
     * @apiVersion 1.0.0
     */
    app.get('/api/SetMyShopGoods/:GoodsIds', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2120&" +"GoodsIds=" + req.params.GoodsIds + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/RemoveShopGoods 移除我的物馆商品(2121)
     * @apiDescription 移除我的物馆商品(2121)
     * @apiName RemoveShopGoods
     * @apiGroup User
     * @apiParam {String} GoodsIds 
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/RemoveShopGoods
     * @apiVersion 1.0.0
     */
    app.get('/api/RemoveShopGoods/:GoodsIds', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2121&" +"GoodsIds=" + req.params.GoodsIds + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetMyFans 获取我的粉丝(2122)
     * @apiDescription 获取我的粉丝(2122)
     * @apiName GetMyFans
     * @apiGroup User
     * @apiParam {Int64} UserId 用户Id
     * @apiParam {Int32} pi 分页索引
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetMyFans
     * @apiVersion 1.0.0
     */
    app.get('/api/GetMyFans/:UserId/:pi', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2122&" +"UserId=" + req.params.UserId + "&"+"pi=" + req.params.pi + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SearchUserShop 搜索馆主(2123)
     * @apiDescription 搜索馆主(2123)
     * @apiName SearchUserShop
     * @apiGroup User
     * @apiParam {String} SearchWords 搜索词
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SearchUserShop
     * @apiVersion 1.0.0
     */
    app.get('/api/SearchUserShop/:SearchWords', function (req, res) {
        var requestUrl = encodeURI("/?actionid=2123&" +"SearchWords=" + req.params.SearchWords + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetMyMessage 获取我的消息(3000)
     * @apiDescription 获取我的消息(3000)
     * @apiName GetMyMessage
     * @apiGroup Message
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetMyMessage
     * @apiVersion 1.0.0
     */
    app.get('/api/GetMyMessage', function (req, res) {
        var requestUrl = encodeURI("/?actionid=3000&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetMessages 获取消息列表(3001)
     * @apiDescription 获取消息列表(3001)
     * @apiName GetMessages
     * @apiGroup Message
     * @apiParam {Int32} type 消息类型 0服务通知 1我的收益 2会员信息 3活动推荐
     * @apiParam {Int32} pi 分页索引
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetMessages
     * @apiVersion 1.0.0
     */
    app.get('/api/GetMessages/:type/:pi', function (req, res) {
        var requestUrl = encodeURI("/?actionid=3001&" +"type=" + req.params.type + "&"+"pi=" + req.params.pi + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetMessageDetail 获取消息详情(3002)
     * @apiDescription 获取消息详情(3002)
     * @apiName GetMessageDetail
     * @apiGroup Message
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetMessageDetail
     * @apiVersion 1.0.0
     */
    app.get('/api/GetMessageDetail', function (req, res) {
        var requestUrl = encodeURI("/?actionid=3002&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetUnreadMessageNum 获取未读消息数(3003)
     * @apiDescription 获取未读消息数(3003)
     * @apiName GetUnreadMessageNum
     * @apiGroup Message
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetUnreadMessageNum
     * @apiVersion 1.0.0
     */
    app.get('/api/GetUnreadMessageNum', function (req, res) {
        var requestUrl = encodeURI("/?actionid=3003&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SubmitOrder 提交订单(4000)
     * @apiDescription 提交订单(4000)
     * @apiName SubmitOrder
     * @apiGroup Order
     * @apiParam {String} value 购物车信息
     * @apiParam {String} AddressId 地址Id
     * @apiParam {String} CouponId 优惠券Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SubmitOrder
     * @apiVersion 1.0.0
     */
    app.post('/api/SubmitOrder', function (req, res) {
        var requestUrl = encodeURI("/?actionid=4000&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'post', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SyncOrderGoods 同步订单商品(4001)
     * @apiDescription 同步订单商品(4001)
     * @apiName SyncOrderGoods
     * @apiGroup Order
     * @apiParam {String} skuId 购物车商品skuId，逗号分割
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SyncOrderGoods
     * @apiVersion 1.0.0
     */
    app.get('/api/SyncOrderGoods/:skuId', function (req, res) {
        var requestUrl = encodeURI("/?actionid=4001&" +"skuId=" + req.params.skuId + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/PreviewOrder 预览订单(4002)
     * @apiDescription 预览订单(4002)
     * @apiName PreviewOrder
     * @apiGroup Order
     * @apiParam {String} value 购物车信息
     * @apiParam {String} AddressId 地址Id
     * @apiParam {String} CouponId 优惠券Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/PreviewOrder
     * @apiVersion 1.0.0
     */
    app.post('/api/PreviewOrder', function (req, res) {
        var requestUrl = encodeURI("/?actionid=4002&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'post', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetUserOrder 获取订单列表(4003)
     * @apiDescription 获取订单列表(4003)
     * @apiName GetUserOrder
     * @apiGroup Order
     * @apiParam {Int32} orderStatus 订单状态 99：全部订单 0：待付款 1：待发货 3：待收货
     * @apiParam {Int32} pi 分页页码
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetUserOrder
     * @apiVersion 1.0.0
     */
    app.get('/api/GetUserOrder/:orderStatus/:pi', function (req, res) {
        var requestUrl = encodeURI("/?actionid=4003&" +"orderStatus=" + req.params.orderStatus + "&"+"pi=" + req.params.pi + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetGoodsRecomment 获取商品推荐(4004)
     * @apiDescription 获取商品推荐(4004)
     * @apiName GetGoodsRecomment
     * @apiGroup Order
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetGoodsRecomment
     * @apiVersion 1.0.0
     */
    app.get('/api/GetGoodsRecomment', function (req, res) {
        var requestUrl = encodeURI("/?actionid=4004&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/ModifyOrderAddress 修改订单地址(4005)
     * @apiDescription 修改订单地址(4005)
     * @apiName ModifyOrderAddress
     * @apiGroup Order
     * @apiParam {String} OrderId 订单Id
     * @apiParam {Int64} AddressId 地址Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/ModifyOrderAddress
     * @apiVersion 1.0.0
     */
    app.get('/api/ModifyOrderAddress/:OrderId/:AddressId', function (req, res) {
        var requestUrl = encodeURI("/?actionid=4005&" +"OrderId=" + req.params.OrderId + "&"+"AddressId=" + req.params.AddressId + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/ConfirmReceiveGoods 确认收货(4006)
     * @apiDescription 确认收货(4006)
     * @apiName ConfirmReceiveGoods
     * @apiGroup Order
     * @apiParam {String} OrderId 订单Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/ConfirmReceiveGoods
     * @apiVersion 1.0.0
     */
    app.get('/api/ConfirmReceiveGoods/:OrderId', function (req, res) {
        var requestUrl = encodeURI("/?actionid=4006&" +"OrderId=" + req.params.OrderId + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/CancelOrder 取消订单(4007)
     * @apiDescription 取消订单(4007)
     * @apiName CancelOrder
     * @apiGroup Order
     * @apiParam {String} OrderId 订单Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/CancelOrder
     * @apiVersion 1.0.0
     */
    app.get('/api/CancelOrder/:OrderId', function (req, res) {
        var requestUrl = encodeURI("/?actionid=4007&" +"OrderId=" + req.params.OrderId + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetOrderProgress 查看订单进度(4008)
     * @apiDescription 查看订单进度(4008)
     * @apiName GetOrderProgress
     * @apiGroup Order
     * @apiParam {String} OrderId 订单Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetOrderProgress
     * @apiVersion 1.0.0
     */
    app.get('/api/GetOrderProgress/:OrderId', function (req, res) {
        var requestUrl = encodeURI("/?actionid=4008&" +"OrderId=" + req.params.OrderId + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/ApplyAfterService 申请售后(4009)
     * @apiDescription 申请售后(4009)
     * @apiName ApplyAfterService
     * @apiGroup Order
     * @apiParam {String} value 售后申请信息
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/ApplyAfterService
     * @apiVersion 1.0.0
     */
    app.post('/api/ApplyAfterService', function (req, res) {
        var requestUrl = encodeURI("/?actionid=4009&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'post', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetAfterServiceList 查看售后列表(4010)
     * @apiDescription 查看售后列表(4010)
     * @apiName GetAfterServiceList
     * @apiGroup Order
     * @apiParam {Int32} pi 分页页码
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetAfterServiceList
     * @apiVersion 1.0.0
     */
    app.get('/api/GetAfterServiceList/:pi', function (req, res) {
        var requestUrl = encodeURI("/?actionid=4010&" +"pi=" + req.params.pi + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetAfterServiceInfo 查看售后单据(4011)
     * @apiDescription 查看售后单据(4011)
     * @apiName GetAfterServiceInfo
     * @apiGroup Order
     * @apiParam {String} ServiceOrderId 售后单号
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetAfterServiceInfo
     * @apiVersion 1.0.0
     */
    app.get('/api/GetAfterServiceInfo/:ServiceOrderId', function (req, res) {
        var requestUrl = encodeURI("/?actionid=4011&" +"ServiceOrderId=" + req.params.ServiceOrderId + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/CancelAfterService 撤销售后单(4012)
     * @apiDescription 撤销售后单(4012)
     * @apiName CancelAfterService
     * @apiGroup Order
     * @apiParam {String} ServiceOrderId 售后单号
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/CancelAfterService
     * @apiVersion 1.0.0
     */
    app.get('/api/CancelAfterService/:ServiceOrderId', function (req, res) {
        var requestUrl = encodeURI("/?actionid=4012&" +"ServiceOrderId=" + req.params.ServiceOrderId + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/QuickConfirmOrder 申请提货(4013)
     * @apiDescription 申请提货(4013)
     * @apiName QuickConfirmOrder
     * @apiGroup Order
     * @apiParam {String} OrderId 订单Id
     * @apiParam {String} QuickCode 自提标识
     * @apiParam {String} skuId 提货商品skuId，逗号分割
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/QuickConfirmOrder
     * @apiVersion 1.0.0
     */
    app.get('/api/QuickConfirmOrder/:OrderId/:QuickCode/:skuId', function (req, res) {
        var requestUrl = encodeURI("/?actionid=4013&" +"OrderId=" + req.params.OrderId + "&"+"QuickCode=" + req.params.QuickCode + "&"+"skuId=" + req.params.skuId + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/AppraiseOrder 订单评价(4014)
     * @apiDescription 订单评价(4014)
     * @apiName AppraiseOrder
     * @apiGroup Order
     * @apiParam {String} value 评价内容
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/AppraiseOrder
     * @apiVersion 1.0.0
     */
    app.post('/api/AppraiseOrder', function (req, res) {
        var requestUrl = encodeURI("/?actionid=4014&"  + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'post', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetOrderLogistics 查看物流(4015)
     * @apiDescription 查看物流(4015)
     * @apiName GetOrderLogistics
     * @apiGroup Order
     * @apiParam {String} OrderId 
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetOrderLogistics
     * @apiVersion 1.0.0
     */
    app.get('/api/GetOrderLogistics/:OrderId', function (req, res) {
        var requestUrl = encodeURI("/?actionid=4015&" +"OrderId=" + req.params.OrderId + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SubmitAfterServiceExpress 提交退货快递单号(4016)
     * @apiDescription 提交退货快递单号(4016)
     * @apiName SubmitAfterServiceExpress
     * @apiGroup Order
     * @apiParam {String} ServiceId 售后单号
     * @apiParam {String} ExpressOrder 快递单号
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SubmitAfterServiceExpress
     * @apiVersion 1.0.0
     */
    app.get('/api/SubmitAfterServiceExpress/:ServiceId/:ExpressOrder', function (req, res) {
        var requestUrl = encodeURI("/?actionid=4016&" +"ServiceId=" + req.params.ServiceId + "&"+"ExpressOrder=" + req.params.ExpressOrder + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/DeleteOrder 删除订单(4017)
     * @apiDescription 删除订单(4017)
     * @apiName DeleteOrder
     * @apiGroup Order
     * @apiParam {String} OrderId 订单id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/DeleteOrder
     * @apiVersion 1.0.0
     */
    app.get('/api/DeleteOrder/:OrderId', function (req, res) {
        var requestUrl = encodeURI("/?actionid=4017&" +"OrderId=" + req.params.OrderId + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetOrderDetail 获取订单详情(4018)
     * @apiDescription 获取订单详情(4018)
     * @apiName GetOrderDetail
     * @apiGroup Order
     * @apiParam {String} OrderId 订单id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetOrderDetail
     * @apiVersion 1.0.0
     */
    app.get('/api/GetOrderDetail/:OrderId', function (req, res) {
        var requestUrl = encodeURI("/?actionid=4018&" +"OrderId=" + req.params.OrderId + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetQuickPointInfo 获取自提点信息(4019)
     * @apiDescription 获取自提点信息(4019)
     * @apiName GetQuickPointInfo
     * @apiGroup Order
     * @apiParam {String} QuickCode 自提点编码
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetQuickPointInfo
     * @apiVersion 1.0.0
     */
    app.get('/api/GetQuickPointInfo/:QuickCode', function (req, res) {
        var requestUrl = encodeURI("/?actionid=4019&" +"QuickCode=" + req.params.QuickCode + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetServiceProgress 获取售后进度(4020)
     * @apiDescription 获取售后进度(4020)
     * @apiName GetServiceProgress
     * @apiGroup Order
     * @apiParam {String} ServiceId 售后单号
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetServiceProgress
     * @apiVersion 1.0.0
     */
    app.get('/api/GetServiceProgress/:ServiceId', function (req, res) {
        var requestUrl = encodeURI("/?actionid=4020&" +"ServiceId=" + req.params.ServiceId + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/RemoveCartGoods 移除购物车商品(4021)
     * @apiDescription 移除购物车商品(4021)
     * @apiName RemoveCartGoods
     * @apiGroup Order
     * @apiParam {String} skuId 购物车商品SkuId，逗号分割
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/RemoveCartGoods
     * @apiVersion 1.0.0
     */
    app.get('/api/RemoveCartGoods/:skuId', function (req, res) {
        var requestUrl = encodeURI("/?actionid=4021&" +"skuId=" + req.params.skuId + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetReceiverInfoByService 根据售后单号获取地址信息(4022)
     * @apiDescription 根据售后单号获取地址信息(4022)
     * @apiName GetReceiverInfoByService
     * @apiGroup Order
     * @apiParam {String} ServiceId 售后单号
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetReceiverInfoByService
     * @apiVersion 1.0.0
     */
    app.get('/api/GetReceiverInfoByService/:ServiceId', function (req, res) {
        var requestUrl = encodeURI("/?actionid=4022&" +"ServiceId=" + req.params.ServiceId + "&" + querystring.stringify(url.parse(req.url, true).query));
        common.SendRequest(requestUrl, 'get', req, res, function(receiveData){
            res.end(receiveData);
        });
    });

}

exports.initRoute = initRoute