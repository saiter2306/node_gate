// -------------------------------------------------------
// Copyright (C) SharpEngineNode 版权所有。
// 文 件 名：node_gate/Controllers/Action.js
// 创建标识：2018/9/4 17:58:24 Created by Gyc
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
        var requestUrl = " /? actionid = 999 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
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
        var requestUrl = " /? actionid = 1001 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetSearchInfo 获取搜索界面信息(1002)
     * @apiDescription 
     * @apiName GetSearchInfo
     * @apiGroup Index
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetSearchInfo
     * @apiVersion 1.0.0
     */
    app.get('/api/GetSearchInfo', function (req, res) {
        var requestUrl = " /? actionid = 1002 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetSearchResult 获取搜索结果(1003)
     * @apiDescription 
     * @apiName GetSearchResult
     * @apiGroup Index
     * @apiParam {String} Key 关键词
     * @apiParam {Int32} SortType 排序类型 0默认综合排序 1销量反序 2销量正序 3价格反序 4价格正序
     * @apiParam {Int32} pi 页码 从1开始
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetSearchResult
     * @apiVersion 1.0.0
     */
    app.get('/api/GetSearchResult', function (req, res) {
        var requestUrl = " /? actionid = 1003 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetWxShareInfo 获取微信分享内容(1004)
     * @apiDescription 
     * @apiName GetWxShareInfo
     * @apiGroup Index
     * @apiParam {String} routeUrl 路由地址,需要urlEncode            etc.             source：particulars/473/601            routeUrl: particulars%2f473%2f601
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetWxShareInfo
     * @apiVersion 1.0.0
     */
    app.get('/api/GetWxShareInfo', function (req, res) {
        var requestUrl = " /? actionid = 1004 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetAllClassify 获取分类列表(1100)
     * @apiDescription 
     * @apiName GetAllClassify
     * @apiGroup Goods
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetAllClassify
     * @apiVersion 1.0.0
     */
    app.get('/api/GetAllClassify', function (req, res) {
        var requestUrl = " /? actionid = 1100 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetClassifyGoods 获取分类商品(1101)
     * @apiDescription 
     * @apiName GetClassifyGoods
     * @apiGroup Goods
     * @apiParam {Int32} Id 分类Id
     * @apiParam {Int32} SortType 排序类型 0默认综合排序 1销量反序 2销量正序 3价格反序 4价格正序
     * @apiParam {Int32} pi 页码 从1开始
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetClassifyGoods
     * @apiVersion 1.0.0
     */
    app.get('/api/GetClassifyGoods', function (req, res) {
        var requestUrl = " /? actionid = 1101 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetGoodsInfo 获取商品信息(1200)
     * @apiDescription 
     * @apiName GetGoodsInfo
     * @apiGroup Goods
     * @apiParam {Int32} Id 商品Id
     * @apiParam {Int32} SkuId SKUId, 可不传，默认为最小金额Sku
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetGoodsInfo
     * @apiVersion 1.0.0
     */
    app.get('/api/GetGoodsInfo', function (req, res) {
        var requestUrl = " /? actionid = 1200 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetNormalActivity 获取通用活动页面(1300)
     * @apiDescription 
     * @apiName GetNormalActivity
     * @apiGroup Index
     * @apiParam {Int32} Id 活动Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetNormalActivity
     * @apiVersion 1.0.0
     */
    app.get('/api/GetNormalActivity', function (req, res) {
        var requestUrl = " /? actionid = 1300 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetMemberUpgrade 获取会员升级专区信息(1301)
     * @apiDescription 
     * @apiName GetMemberUpgrade
     * @apiGroup Index
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetMemberUpgrade
     * @apiVersion 1.0.0
     */
    app.get('/api/GetMemberUpgrade', function (req, res) {
        var requestUrl = " /? actionid = 1301 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetUserInfo 获取用户信息(2000)
     * @apiDescription 
     * @apiName GetUserInfo
     * @apiGroup User
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetUserInfo
     * @apiVersion 1.0.0
     */
    app.get('/api/GetUserInfo', function (req, res) {
        var requestUrl = " /? actionid = 2000 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetPhoneCheckCode 获取手机验证码(2001)
     * @apiDescription 
     * @apiName GetPhoneCheckCode
     * @apiGroup User
     * @apiParam {String} Phone 手机号
     * @apiParam {Int32} CheckExist 是否校验手机号已注册 0不校验 1校验
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetPhoneCheckCode
     * @apiVersion 1.0.0
     */
    app.get('/api/GetPhoneCheckCode', function (req, res) {
        var requestUrl = " /? actionid = 2001 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/PhonePwdRegister 手机号密码注册(2002)
     * @apiDescription 
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
    app.get('/api/PhonePwdRegister', function (req, res) {
        var requestUrl = " /? actionid = 2002 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/PhoneCheckCodeLogin 手机验证码注册登陆(2003)
     * @apiDescription 
     * @apiName PhoneCheckCodeLogin
     * @apiGroup User
     * @apiParam {String} Phone 手机号
     * @apiParam {String} CheckCode 验证码
     * @apiParam {String} Recommend 推荐人
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/PhoneCheckCodeLogin
     * @apiVersion 1.0.0
     */
    app.get('/api/PhoneCheckCodeLogin', function (req, res) {
        var requestUrl = " /? actionid = 2003 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/ThirdLogin 第三方账号登陆(2004)
     * @apiDescription 
     * @apiName ThirdLogin
     * @apiGroup User
     * @apiParam {String} value 第三方登陆信息
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/ThirdLogin
     * @apiVersion 1.0.0
     */
    app.get('/api/ThirdLogin', function (req, res) {
        var requestUrl = " /? actionid = 2004 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/PhoneLogin 手机号密码登陆(2005)
     * @apiDescription 
     * @apiName PhoneLogin
     * @apiGroup User
     * @apiParam {String} Phone 手机号
     * @apiParam {String} Pwd 密码(MD5加密)
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/PhoneLogin
     * @apiVersion 1.0.0
     */
    app.get('/api/PhoneLogin', function (req, res) {
        var requestUrl = " /? actionid = 2005 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/PhoneSetPwd 通过手机验证码设置账号密码(2006)
     * @apiDescription 
     * @apiName PhoneSetPwd
     * @apiGroup User
     * @apiParam {String} Phone 手机号
     * @apiParam {String} CheckCode 验证码
     * @apiParam {String} NewPwd 新密码(MD5加密)
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/PhoneSetPwd
     * @apiVersion 1.0.0
     */
    app.get('/api/PhoneSetPwd', function (req, res) {
        var requestUrl = " /? actionid = 2006 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/BindPhone 绑定手机号(2007)
     * @apiDescription 
     * @apiName BindPhone
     * @apiGroup User
     * @apiParam {String} Phone 手机号
     * @apiParam {String} CheckCode 验证码
     * @apiParam {Int32} Force 强制绑定 0否 1是
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/BindPhone
     * @apiVersion 1.0.0
     */
    app.get('/api/BindPhone', function (req, res) {
        var requestUrl = " /? actionid = 2007 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/ModifyUserNick 修改用户昵称(2008)
     * @apiDescription 
     * @apiName ModifyUserNick
     * @apiGroup User
     * @apiParam {String} NewNick 新的昵称
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/ModifyUserNick
     * @apiVersion 1.0.0
     */
    app.get('/api/ModifyUserNick', function (req, res) {
        var requestUrl = " /? actionid = 2008 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/AddAddress 添加收货信息(2009)
     * @apiDescription 
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
    app.get('/api/AddAddress', function (req, res) {
        var requestUrl = " /? actionid = 2009 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetAddress 获取用户收货信息(2010)
     * @apiDescription 
     * @apiName GetAddress
     * @apiGroup User
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetAddress
     * @apiVersion 1.0.0
     */
    app.get('/api/GetAddress', function (req, res) {
        var requestUrl = " /? actionid = 2010 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SetDefaultAddress 设置默认地址(2011)
     * @apiDescription 
     * @apiName SetDefaultAddress
     * @apiGroup User
     * @apiParam {Int64} Id 地址Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SetDefaultAddress
     * @apiVersion 1.0.0
     */
    app.get('/api/SetDefaultAddress', function (req, res) {
        var requestUrl = " /? actionid = 2011 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetDefaultAddress 获取默认地址(2012)
     * @apiDescription 
     * @apiName GetDefaultAddress
     * @apiGroup User
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetDefaultAddress
     * @apiVersion 1.0.0
     */
    app.get('/api/GetDefaultAddress', function (req, res) {
        var requestUrl = " /? actionid = 2012 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/AddUserCollection 添加用户收藏(2013)
     * @apiDescription 
     * @apiName AddUserCollection
     * @apiGroup User
     * @apiParam {Int32} SkuId 商品SkuId
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/AddUserCollection
     * @apiVersion 1.0.0
     */
    app.get('/api/AddUserCollection', function (req, res) {
        var requestUrl = " /? actionid = 2013 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetUserCollection 获取用户收藏(2014)
     * @apiDescription 
     * @apiName GetUserCollection
     * @apiGroup User
     * @apiParam {Int32} pi 分页
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetUserCollection
     * @apiVersion 1.0.0
     */
    app.get('/api/GetUserCollection', function (req, res) {
        var requestUrl = " /? actionid = 2014 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/DeleteUserCollection 删除用户收藏(2015)
     * @apiDescription 
     * @apiName DeleteUserCollection
     * @apiGroup User
     * @apiParam {String} collectionId 购物车商品skuId，逗号分割
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/DeleteUserCollection
     * @apiVersion 1.0.0
     */
    app.get('/api/DeleteUserCollection', function (req, res) {
        var requestUrl = " /? actionid = 2015 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/ClearInvalidCollection 一键清空失效(2016)
     * @apiDescription 
     * @apiName ClearInvalidCollection
     * @apiGroup User
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/ClearInvalidCollection
     * @apiVersion 1.0.0
     */
    app.get('/api/ClearInvalidCollection', function (req, res) {
        var requestUrl = " /? actionid = 2016 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/UploadImg 上传图片(2017)
     * @apiDescription 
     * @apiName UploadImg
     * @apiGroup User
     * @apiParam {String} value 图片base64
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/UploadImg
     * @apiVersion 1.0.0
     */
    app.get('/api/UploadImg', function (req, res) {
        var requestUrl = " /? actionid = 2017 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/UpdateUserHead 修改用户头像
     * @apiDescription 
     * @apiName UpdateUserHead
     * @apiGroup User
     * @apiParam {String} filePath 上传返回的文件路径
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/UpdateUserHead
     * @apiVersion 1.0.0
     */
    app.get('/api/UpdateUserHead', function (req, res) {
        var requestUrl = " /? actionid = 2018 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/UpdateUserSex 修改用户性别(2019)
     * @apiDescription 
     * @apiName UpdateUserSex
     * @apiGroup User
     * @apiParam {Int32} Sex 设置性别 1:男 2:女
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/UpdateUserSex
     * @apiVersion 1.0.0
     */
    app.get('/api/UpdateUserSex', function (req, res) {
        var requestUrl = " /? actionid = 2019 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetMyMember 获取我的伙伴(2020)
     * @apiDescription 
     * @apiName GetMyMember
     * @apiGroup User
     * @apiParam {Int32} pi 小伙伴分页
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetMyMember
     * @apiVersion 1.0.0
     */
    app.get('/api/GetMyMember', function (req, res) {
        var requestUrl = " /? actionid = 2020 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetMyBalance 获取我的余额(2021)
     * @apiDescription 
     * @apiName GetMyBalance
     * @apiGroup User
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetMyBalance
     * @apiVersion 1.0.0
     */
    app.get('/api/GetMyBalance', function (req, res) {
        var requestUrl = " /? actionid = 2021 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetMyWallet 获取我的钱包(2022)
     * @apiDescription 
     * @apiName GetMyWallet
     * @apiGroup User
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetMyWallet
     * @apiVersion 1.0.0
     */
    app.get('/api/GetMyWallet', function (req, res) {
        var requestUrl = " /? actionid = 2022 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetRecomment 获取推荐二维码(2023)
     * @apiDescription 
     * @apiName GetRecomment
     * @apiGroup User
     * @apiParam {Int64} UserId 用户id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetRecomment
     * @apiVersion 1.0.0
     */
    app.get('/api/GetRecomment', function (req, res) {
        var requestUrl = " /? actionid = 2023 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/PhoneSetPayPwd 设置支付密码(2024)
     * @apiDescription 
     * @apiName PhoneSetPayPwd
     * @apiGroup User
     * @apiParam {String} Phone 手机号
     * @apiParam {String} CheckCode 验证码
     * @apiParam {String} NewPwd 新密码(MD5加密)
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/PhoneSetPayPwd
     * @apiVersion 1.0.0
     */
    app.get('/api/PhoneSetPayPwd', function (req, res) {
        var requestUrl = " /? actionid = 2024 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/ModifyAddress 修改地址(2025)
     * @apiDescription 
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
    app.get('/api/ModifyAddress', function (req, res) {
        var requestUrl = " /? actionid = 2025 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/DeleteAddress 删除地址(2026)
     * @apiDescription 
     * @apiName DeleteAddress
     * @apiGroup User
     * @apiParam {Int64} Id 地址Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/DeleteAddress
     * @apiVersion 1.0.0
     */
    app.get('/api/DeleteAddress', function (req, res) {
        var requestUrl = " /? actionid = 2026 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SearchUser 根据关键字查找用户(2027)
     * @apiDescription 
     * @apiName SearchUser
     * @apiGroup User
     * @apiParam {String} keyword 查找关键字 手机号/账号
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SearchUser
     * @apiVersion 1.0.0
     */
    app.get('/api/SearchUser', function (req, res) {
        var requestUrl = " /? actionid = 2027 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetSalesOrder 获取销售订单(2028)
     * @apiDescription 
     * @apiName GetSalesOrder
     * @apiGroup User
     * @apiParam {Int32} pi 分页页码
     * @apiParam {Int32} status 状态 0全部 1未结算 2已退款 3已结算
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetSalesOrder
     * @apiVersion 1.0.0
     */
    app.get('/api/GetSalesOrder', function (req, res) {
        var requestUrl = " /? actionid = 2028 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetBillDetail 获取账单明细(2029)
     * @apiDescription 
     * @apiName GetBillDetail
     * @apiGroup User
     * @apiParam {Int32} pi 分页页码
     * @apiParam {Int32} Type 账单类型 0收支 1提现
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetBillDetail
     * @apiVersion 1.0.0
     */
    app.get('/api/GetBillDetail', function (req, res) {
        var requestUrl = " /? actionid = 2029 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetTransferDetail 获取转账明细(2030)
     * @apiDescription 
     * @apiName GetTransferDetail
     * @apiGroup User
     * @apiParam {Int32} pi 分页页码
     * @apiParam {Int32} Type 互转类型 0账户余额 1个人收益
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetTransferDetail
     * @apiVersion 1.0.0
     */
    app.get('/api/GetTransferDetail', function (req, res) {
        var requestUrl = " /? actionid = 2030 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SendFeedback 发送反馈(2031)
     * @apiDescription 
     * @apiName SendFeedback
     * @apiGroup User
     * @apiParam {String} value 反馈信息                        type:       反馈类型 1商品相关 2物流状况 3客服服务 4优惠活动 5功能异常 6产品建议 7其他            content:    反馈内容            images:     反馈图片列表
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SendFeedback
     * @apiVersion 1.0.0
     */
    app.get('/api/SendFeedback', function (req, res) {
        var requestUrl = " /? actionid = 2031 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SetPushStatus 设置消息推送(2032)
     * @apiDescription 
     * @apiName SetPushStatus
     * @apiGroup User
     * @apiParam {String} token 
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SetPushStatus
     * @apiVersion 1.0.0
     */
    app.get('/api/SetPushStatus', function (req, res) {
        var requestUrl = " /? actionid = 2032 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetPayBarcode 获取付款二维码(2033)
     * @apiDescription 
     * @apiName GetPayBarcode
     * @apiGroup User
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetPayBarcode
     * @apiVersion 1.0.0
     */
    app.get('/api/GetPayBarcode', function (req, res) {
        var requestUrl = " /? actionid = 2033 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetCouponList 获取优惠券列表(2034)
     * @apiDescription 
     * @apiName GetCouponList
     * @apiGroup User
     * @apiParam {Int32} pi 分页页码
     * @apiParam {Int32} Group 分组 1专属卡券 2优惠券
     * @apiParam {Int32} type 优惠券类型 0未使用 1已使用 2已过期
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetCouponList
     * @apiVersion 1.0.0
     */
    app.get('/api/GetCouponList', function (req, res) {
        var requestUrl = " /? actionid = 2034 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/AddBankCard 添加银行卡(2035)
     * @apiDescription 
     * @apiName AddBankCard
     * @apiGroup User
     * @apiParam {String} value 银行卡信息
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/AddBankCard
     * @apiVersion 1.0.0
     */
    app.get('/api/AddBankCard', function (req, res) {
        var requestUrl = " /? actionid = 2035 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetBankCardList 获取银行卡列表(2036)
     * @apiDescription 
     * @apiName GetBankCardList
     * @apiGroup User
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetBankCardList
     * @apiVersion 1.0.0
     */
    app.get('/api/GetBankCardList', function (req, res) {
        var requestUrl = " /? actionid = 2036 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SubmitRealName 提交实名认证信息(2037)
     * @apiDescription 
     * @apiName SubmitRealName
     * @apiGroup User
     * @apiParam {String} value 实名信息
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SubmitRealName
     * @apiVersion 1.0.0
     */
    app.get('/api/SubmitRealName', function (req, res) {
        var requestUrl = " /? actionid = 2037 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetRealNameInfo 获取实名认证信息(2038)
     * @apiDescription 
     * @apiName GetRealNameInfo
     * @apiGroup User
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetRealNameInfo
     * @apiVersion 1.0.0
     */
    app.get('/api/GetRealNameInfo', function (req, res) {
        var requestUrl = " /? actionid = 2038 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SetRecommend 设置推荐人(2039)
     * @apiDescription 
     * @apiName SetRecommend
     * @apiGroup User
     * @apiParam {String} Recommend 推荐人 账号/手机号
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SetRecommend
     * @apiVersion 1.0.0
     */
    app.get('/api/SetRecommend', function (req, res) {
        var requestUrl = " /? actionid = 2039 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SetFriendBg 测试-生成分享图片
     * @apiDescription 
     * @apiName SetFriendBg
     * @apiGroup User
     * @apiParam {Int64} id 
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SetFriendBg
     * @apiVersion 1.0.0
     */
    app.get('/api/SetFriendBg', function (req, res) {
        var requestUrl = " /? actionid = 2040 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/DeleteBankCardApply 删除银行卡申请记录(2041)
     * @apiDescription 
     * @apiName DeleteBankCardApply
     * @apiGroup User
     * @apiParam {Int32} id 申请Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/DeleteBankCardApply
     * @apiVersion 1.0.0
     */
    app.get('/api/DeleteBankCardApply', function (req, res) {
        var requestUrl = " /? actionid = 2041 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetRealNameList 获取实名认证信息列表(2042)
     * @apiDescription 
     * @apiName GetRealNameList
     * @apiGroup User
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetRealNameList
     * @apiVersion 1.0.0
     */
    app.get('/api/GetRealNameList', function (req, res) {
        var requestUrl = " /? actionid = 2042 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/DeleteRealNameData 删除实名认证信息(2043)
     * @apiDescription 
     * @apiName DeleteRealNameData
     * @apiGroup User
     * @apiParam {Int32} id 实名认证Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/DeleteRealNameData
     * @apiVersion 1.0.0
     */
    app.get('/api/DeleteRealNameData', function (req, res) {
        var requestUrl = " /? actionid = 2043 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/ValidateAndCacheCardInfo 获取银行卡信息(2044)
     * @apiDescription 
     * @apiName ValidateAndCacheCardInfo
     * @apiGroup User
     * @apiParam {String} cardNo 银行卡号
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/ValidateAndCacheCardInfo
     * @apiVersion 1.0.0
     */
    app.get('/api/ValidateAndCacheCardInfo', function (req, res) {
        var requestUrl = " /? actionid = 2044 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetBillDetailV2 获取账单明细V2(2045)
     * @apiDescription 
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
    app.get('/api/GetBillDetailV2', function (req, res) {
        var requestUrl = " /? actionid = 2045 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetBillAction 获取账单操作分类信息(2046)
     * @apiDescription 
     * @apiName GetBillAction
     * @apiGroup User
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetBillAction
     * @apiVersion 1.0.0
     */
    app.get('/api/GetBillAction', function (req, res) {
        var requestUrl = " /? actionid = 2046 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetWithDrawGuide 获取提现引导信息(2047)
     * @apiDescription 
     * @apiName GetWithDrawGuide
     * @apiGroup User
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetWithDrawGuide
     * @apiVersion 1.0.0
     */
    app.get('/api/GetWithDrawGuide', function (req, res) {
        var requestUrl = " /? actionid = 2047 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GiveCoupon 优惠券转赠(2048)
     * @apiDescription 
     * @apiName GiveCoupon
     * @apiGroup User
     * @apiParam {Int64} CouponId 优惠券Id
     * @apiParam {Int64} TargetId 目标用户Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GiveCoupon
     * @apiVersion 1.0.0
     */
    app.get('/api/GiveCoupon', function (req, res) {
        var requestUrl = " /? actionid = 2048 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SearchPayUser 查找付款用户(2049)
     * @apiDescription 
     * @apiName SearchPayUser
     * @apiGroup User
     * @apiParam {String} keyword 查找关键字 手机号/账号
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SearchPayUser
     * @apiVersion 1.0.0
     */
    app.get('/api/SearchPayUser', function (req, res) {
        var requestUrl = " /? actionid = 2049 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SearchMyMember 搜索我的伙伴(2050)
     * @apiDescription 
     * @apiName SearchMyMember
     * @apiGroup User
     * @apiParam {String} keyword 搜索关键词
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SearchMyMember
     * @apiVersion 1.0.0
     */
    app.get('/api/SearchMyMember', function (req, res) {
        var requestUrl = " /? actionid = 2050 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetUserShop 获取用户物馆信息(2100)
     * @apiDescription 
     * @apiName GetUserShop
     * @apiGroup User
     * @apiParam {Int64} UserId 用户Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetUserShop
     * @apiVersion 1.0.0
     */
    app.get('/api/GetUserShop', function (req, res) {
        var requestUrl = " /? actionid = 2100 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/RegisterUserShop 注册用户物馆(2101)
     * @apiDescription 
     * @apiName RegisterUserShop
     * @apiGroup User
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/RegisterUserShop
     * @apiVersion 1.0.0
     */
    app.get('/api/RegisterUserShop', function (req, res) {
        var requestUrl = " /? actionid = 2101 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/AddUserShopSelected 添加馆主精选
     * @apiDescription 
     * @apiName AddUserShopSelected
     * @apiGroup User
     * @apiParam {Int32} skuId SkuId
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/AddUserShopSelected
     * @apiVersion 1.0.0
     */
    app.get('/api/AddUserShopSelected', function (req, res) {
        var requestUrl = " /? actionid = 2102 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/DeleteUserShopSelected 删除馆主精选
     * @apiDescription 
     * @apiName DeleteUserShopSelected
     * @apiGroup User
     * @apiParam {String} id 精选Id列表 逗号分隔
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/DeleteUserShopSelected
     * @apiVersion 1.0.0
     */
    app.get('/api/DeleteUserShopSelected', function (req, res) {
        var requestUrl = " /? actionid = 2103 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/PublishShare 发布分享(2104)
     * @apiDescription 
     * @apiName PublishShare
     * @apiGroup User
     * @apiParam {String} value 分享内容
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/PublishShare
     * @apiVersion 1.0.0
     */
    app.get('/api/PublishShare', function (req, res) {
        var requestUrl = " /? actionid = 2104 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetUserShopSquare 获取广场信息(2105)
     * @apiDescription 
     * @apiName GetUserShopSquare
     * @apiGroup User
     * @apiParam {Int32} pi 分页页码
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetUserShopSquare
     * @apiVersion 1.0.0
     */
    app.get('/api/GetUserShopSquare', function (req, res) {
        var requestUrl = " /? actionid = 2105 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetUserShopSharePage 获取用户物馆分享分页(2106)
     * @apiDescription 
     * @apiName GetUserShopSharePage
     * @apiGroup User
     * @apiParam {Int32} pi 分页页面
     * @apiParam {Int64} UserId 用户Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetUserShopSharePage
     * @apiVersion 1.0.0
     */
    app.get('/api/GetUserShopSharePage', function (req, res) {
        var requestUrl = " /? actionid = 2106 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/PublishShareCommentRequet 发布评论(2107)
     * @apiDescription 
     * @apiName PublishShareCommentRequet
     * @apiGroup User
     * @apiParam {String} value 评论内容
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/PublishShareCommentRequet
     * @apiVersion 1.0.0
     */
    app.get('/api/PublishShareCommentRequet', function (req, res) {
        var requestUrl = " /? actionid = 2107 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/LikeShare 分享点赞(2108)
     * @apiDescription 
     * @apiName LikeShare
     * @apiGroup User
     * @apiParam {Int64} ShareId 分享Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/LikeShare
     * @apiVersion 1.0.0
     */
    app.get('/api/LikeShare', function (req, res) {
        var requestUrl = " /? actionid = 2108 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/LikeShareComment 评论点赞(2109)
     * @apiDescription 
     * @apiName LikeShareComment
     * @apiGroup User
     * @apiParam {Int64} CommentId 评论Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/LikeShareComment
     * @apiVersion 1.0.0
     */
    app.get('/api/LikeShareComment', function (req, res) {
        var requestUrl = " /? actionid = 2109 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/FocusUserShop 关注馆主(2110)
     * @apiDescription 
     * @apiName FocusUserShop
     * @apiGroup User
     * @apiParam {Int64} UserId 馆主Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/FocusUserShop
     * @apiVersion 1.0.0
     */
    app.get('/api/FocusUserShop', function (req, res) {
        var requestUrl = " /? actionid = 2110 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetMyFocusShop 获取我的关注(2111)
     * @apiDescription 
     * @apiName GetMyFocusShop
     * @apiGroup User
     * @apiParam {Int64} UserId 用户Id
     * @apiParam {Int32} pi 分页索引
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetMyFocusShop
     * @apiVersion 1.0.0
     */
    app.get('/api/GetMyFocusShop', function (req, res) {
        var requestUrl = " /? actionid = 2111 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/DeleteMyFocus 删除馆主关注(2112)
     * @apiDescription 
     * @apiName DeleteMyFocus
     * @apiGroup User
     * @apiParam {String} Id 关注Id,逗号分隔
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/DeleteMyFocus
     * @apiVersion 1.0.0
     */
    app.get('/api/DeleteMyFocus', function (req, res) {
        var requestUrl = " /? actionid = 2112 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetShareDetail 获取分享详情(2113)
     * @apiDescription 
     * @apiName GetShareDetail
     * @apiGroup User
     * @apiParam {Int64} shareId 分享Id
     * @apiParam {Int32} pi 分页索引
     * @apiParam {Int32} HasLike 是否筛选有点赞评论 1是 0否
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetShareDetail
     * @apiVersion 1.0.0
     */
    app.get('/api/GetShareDetail', function (req, res) {
        var requestUrl = " /? actionid = 2113 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/DeleteUserShare 删除单条分享(2114)
     * @apiDescription 
     * @apiName DeleteUserShare
     * @apiGroup User
     * @apiParam {Int64} shareId 分享Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/DeleteUserShare
     * @apiVersion 1.0.0
     */
    app.get('/api/DeleteUserShare', function (req, res) {
        var requestUrl = " /? actionid = 2114 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SetUserShopSignature 设置物馆个性签名(2115)
     * @apiDescription 
     * @apiName SetUserShopSignature
     * @apiGroup User
     * @apiParam {String} sign 签名
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SetUserShopSignature
     * @apiVersion 1.0.0
     */
    app.get('/api/SetUserShopSignature', function (req, res) {
        var requestUrl = " /? actionid = 2115 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SetUserShopBackgroud 设置物馆背景图(2116)
     * @apiDescription 
     * @apiName SetUserShopBackgroud
     * @apiGroup User
     * @apiParam {String} backImg 背景图地址
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SetUserShopBackgroud
     * @apiVersion 1.0.0
     */
    app.get('/api/SetUserShopBackgroud', function (req, res) {
        var requestUrl = " /? actionid = 2116 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SetUserShopTitle 设置物馆标题(2117)
     * @apiDescription 
     * @apiName SetUserShopTitle
     * @apiGroup User
     * @apiParam {String} title 标题
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SetUserShopTitle
     * @apiVersion 1.0.0
     */
    app.get('/api/SetUserShopTitle', function (req, res) {
        var requestUrl = " /? actionid = 2117 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/AutoSetShopSelected 一键同步推荐(2118)
     * @apiDescription 
     * @apiName AutoSetShopSelected
     * @apiGroup User
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/AutoSetShopSelected
     * @apiVersion 1.0.0
     */
    app.get('/api/AutoSetShopSelected', function (req, res) {
        var requestUrl = " /? actionid = 2118 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetMyShopGoods 获取我的物馆绑定商品(2119)
     * @apiDescription 
     * @apiName GetMyShopGoods
     * @apiGroup User
     * @apiParam {Int32} Type 商品类型 1会员礼包 2我的好物
     * @apiParam {Int32} pi 分页页码
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetMyShopGoods
     * @apiVersion 1.0.0
     */
    app.get('/api/GetMyShopGoods', function (req, res) {
        var requestUrl = " /? actionid = 2119 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SetMyShopGoods 设置我的物馆商品(2120)
     * @apiDescription 
     * @apiName SetMyShopGoods
     * @apiGroup User
     * @apiParam {String} GoodsIds 商品Id列表
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SetMyShopGoods
     * @apiVersion 1.0.0
     */
    app.get('/api/SetMyShopGoods', function (req, res) {
        var requestUrl = " /? actionid = 2120 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/RemoveShopGoods 移除我的物馆商品(2121)
     * @apiDescription 
     * @apiName RemoveShopGoods
     * @apiGroup User
     * @apiParam {String} GoodsIds 
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/RemoveShopGoods
     * @apiVersion 1.0.0
     */
    app.get('/api/RemoveShopGoods', function (req, res) {
        var requestUrl = " /? actionid = 2121 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetMyFans 获取我的粉丝(2122)
     * @apiDescription 
     * @apiName GetMyFans
     * @apiGroup User
     * @apiParam {Int64} UserId 用户Id
     * @apiParam {Int32} pi 分页索引
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetMyFans
     * @apiVersion 1.0.0
     */
    app.get('/api/GetMyFans', function (req, res) {
        var requestUrl = " /? actionid = 2122 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SearchUserShop 搜索馆主(2123)
     * @apiDescription 
     * @apiName SearchUserShop
     * @apiGroup User
     * @apiParam {String} SearchWords 搜索词
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SearchUserShop
     * @apiVersion 1.0.0
     */
    app.get('/api/SearchUserShop', function (req, res) {
        var requestUrl = " /? actionid = 2123 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetMyMessage 获取我的消息(3000)
     * @apiDescription 
     * @apiName GetMyMessage
     * @apiGroup Message
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetMyMessage
     * @apiVersion 1.0.0
     */
    app.get('/api/GetMyMessage', function (req, res) {
        var requestUrl = " /? actionid = 3000 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetMessages 获取消息列表(3001)
     * @apiDescription 
     * @apiName GetMessages
     * @apiGroup Message
     * @apiParam {Int32} type 消息类型 0服务通知 1我的收益 2会员信息 3活动推荐
     * @apiParam {Int32} pi 分页索引
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetMessages
     * @apiVersion 1.0.0
     */
    app.get('/api/GetMessages', function (req, res) {
        var requestUrl = " /? actionid = 3001 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetMessageDetail 获取消息详情(3002)
     * @apiDescription 
     * @apiName GetMessageDetail
     * @apiGroup Message
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetMessageDetail
     * @apiVersion 1.0.0
     */
    app.get('/api/GetMessageDetail', function (req, res) {
        var requestUrl = " /? actionid = 3002 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetUnreadMessageNum 获取未读消息数(3003)
     * @apiDescription 
     * @apiName GetUnreadMessageNum
     * @apiGroup Message
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetUnreadMessageNum
     * @apiVersion 1.0.0
     */
    app.get('/api/GetUnreadMessageNum', function (req, res) {
        var requestUrl = " /? actionid = 3003 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SubmitOrder 提交订单(4000)
     * @apiDescription 
     * @apiName SubmitOrder
     * @apiGroup Order
     * @apiParam {String} value 购物车信息
     * @apiParam {String} AddressId 地址Id
     * @apiParam {String} CouponId 优惠券Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SubmitOrder
     * @apiVersion 1.0.0
     */
    app.get('/api/SubmitOrder', function (req, res) {
        var requestUrl = " /? actionid = 4000 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SyncOrderGoods 同步订单商品(4001)
     * @apiDescription 
     * @apiName SyncOrderGoods
     * @apiGroup Order
     * @apiParam {String} skuId 购物车商品skuId，逗号分割
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SyncOrderGoods
     * @apiVersion 1.0.0
     */
    app.get('/api/SyncOrderGoods', function (req, res) {
        var requestUrl = " /? actionid = 4001 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/PreviewOrder 预览订单(4002)
     * @apiDescription 
     * @apiName PreviewOrder
     * @apiGroup Order
     * @apiParam {String} value 购物车信息
     * @apiParam {String} AddressId 地址Id
     * @apiParam {String} CouponId 优惠券Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/PreviewOrder
     * @apiVersion 1.0.0
     */
    app.get('/api/PreviewOrder', function (req, res) {
        var requestUrl = " /? actionid = 4002 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetUserOrder 获取订单列表(4003)
     * @apiDescription 
     * @apiName GetUserOrder
     * @apiGroup Order
     * @apiParam {Int32} orderStatus 订单状态 99：全部订单 0：待付款 1：待发货 3：待收货
     * @apiParam {Int32} pi 分页页码
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetUserOrder
     * @apiVersion 1.0.0
     */
    app.get('/api/GetUserOrder', function (req, res) {
        var requestUrl = " /? actionid = 4003 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetGoodsRecomment 获取商品推荐(4004)
     * @apiDescription 
     * @apiName GetGoodsRecomment
     * @apiGroup Order
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetGoodsRecomment
     * @apiVersion 1.0.0
     */
    app.get('/api/GetGoodsRecomment', function (req, res) {
        var requestUrl = " /? actionid = 4004 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/ModifyOrderAddress 修改订单地址(4005)
     * @apiDescription 
     * @apiName ModifyOrderAddress
     * @apiGroup Order
     * @apiParam {String} OrderId 订单Id
     * @apiParam {Int64} AddressId 地址Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/ModifyOrderAddress
     * @apiVersion 1.0.0
     */
    app.get('/api/ModifyOrderAddress', function (req, res) {
        var requestUrl = " /? actionid = 4005 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/ConfirmReceiveGoods 确认收货(4006)
     * @apiDescription 
     * @apiName ConfirmReceiveGoods
     * @apiGroup Order
     * @apiParam {String} OrderId 订单Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/ConfirmReceiveGoods
     * @apiVersion 1.0.0
     */
    app.get('/api/ConfirmReceiveGoods', function (req, res) {
        var requestUrl = " /? actionid = 4006 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/CancelOrder 取消订单(4007)
     * @apiDescription 
     * @apiName CancelOrder
     * @apiGroup Order
     * @apiParam {String} OrderId 订单Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/CancelOrder
     * @apiVersion 1.0.0
     */
    app.get('/api/CancelOrder', function (req, res) {
        var requestUrl = " /? actionid = 4007 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetOrderProgress 查看订单进度(4008)
     * @apiDescription 
     * @apiName GetOrderProgress
     * @apiGroup Order
     * @apiParam {String} OrderId 订单Id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetOrderProgress
     * @apiVersion 1.0.0
     */
    app.get('/api/GetOrderProgress', function (req, res) {
        var requestUrl = " /? actionid = 4008 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/ApplyAfterService 申请售后(4009)
     * @apiDescription 
     * @apiName ApplyAfterService
     * @apiGroup Order
     * @apiParam {String} value 售后申请信息
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/ApplyAfterService
     * @apiVersion 1.0.0
     */
    app.get('/api/ApplyAfterService', function (req, res) {
        var requestUrl = " /? actionid = 4009 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetAfterServiceList 查看售后列表(4010)
     * @apiDescription 
     * @apiName GetAfterServiceList
     * @apiGroup Order
     * @apiParam {Int32} pi 分页页码
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetAfterServiceList
     * @apiVersion 1.0.0
     */
    app.get('/api/GetAfterServiceList', function (req, res) {
        var requestUrl = " /? actionid = 4010 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetAfterServiceInfo 查看售后单据(4011)
     * @apiDescription 
     * @apiName GetAfterServiceInfo
     * @apiGroup Order
     * @apiParam {String} ServiceOrderId 售后单号
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetAfterServiceInfo
     * @apiVersion 1.0.0
     */
    app.get('/api/GetAfterServiceInfo', function (req, res) {
        var requestUrl = " /? actionid = 4011 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/CancelAfterService 撤销售后单(4012)
     * @apiDescription 
     * @apiName CancelAfterService
     * @apiGroup Order
     * @apiParam {String} ServiceOrderId 售后单号
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/CancelAfterService
     * @apiVersion 1.0.0
     */
    app.get('/api/CancelAfterService', function (req, res) {
        var requestUrl = " /? actionid = 4012 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/QuickConfirmOrder 申请提货(4013)
     * @apiDescription 
     * @apiName QuickConfirmOrder
     * @apiGroup Order
     * @apiParam {String} OrderId 订单Id
     * @apiParam {String} QuickCode 自提标识
     * @apiParam {String} skuId 提货商品skuId，逗号分割
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/QuickConfirmOrder
     * @apiVersion 1.0.0
     */
    app.get('/api/QuickConfirmOrder', function (req, res) {
        var requestUrl = " /? actionid = 4013 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/AppraiseOrder 订单评价(4014)
     * @apiDescription 
     * @apiName AppraiseOrder
     * @apiGroup Order
     * @apiParam {String} value 评价内容
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/AppraiseOrder
     * @apiVersion 1.0.0
     */
    app.get('/api/AppraiseOrder', function (req, res) {
        var requestUrl = " /? actionid = 4014 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetOrderLogistics 查看物流(4015)
     * @apiDescription 
     * @apiName GetOrderLogistics
     * @apiGroup Order
     * @apiParam {String} OrderId 
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetOrderLogistics
     * @apiVersion 1.0.0
     */
    app.get('/api/GetOrderLogistics', function (req, res) {
        var requestUrl = " /? actionid = 4015 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/SubmitAfterServiceExpress 提交退货快递单号(4016)
     * @apiDescription 
     * @apiName SubmitAfterServiceExpress
     * @apiGroup Order
     * @apiParam {String} ServiceId 售后单号
     * @apiParam {String} ExpressOrder 快递单号
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/SubmitAfterServiceExpress
     * @apiVersion 1.0.0
     */
    app.get('/api/SubmitAfterServiceExpress', function (req, res) {
        var requestUrl = " /? actionid = 4016 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/DeleteOrder 删除订单(4017)
     * @apiDescription 
     * @apiName DeleteOrder
     * @apiGroup Order
     * @apiParam {String} OrderId 订单id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/DeleteOrder
     * @apiVersion 1.0.0
     */
    app.get('/api/DeleteOrder', function (req, res) {
        var requestUrl = " /? actionid = 4017 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetOrderDetail 获取订单详情(4018)
     * @apiDescription 
     * @apiName GetOrderDetail
     * @apiGroup Order
     * @apiParam {String} OrderId 订单id
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetOrderDetail
     * @apiVersion 1.0.0
     */
    app.get('/api/GetOrderDetail', function (req, res) {
        var requestUrl = " /? actionid = 4018 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetQuickPointInfo 获取自提点信息(4019)
     * @apiDescription 
     * @apiName GetQuickPointInfo
     * @apiGroup Order
     * @apiParam {String} QuickCode 自提点编码
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetQuickPointInfo
     * @apiVersion 1.0.0
     */
    app.get('/api/GetQuickPointInfo', function (req, res) {
        var requestUrl = " /? actionid = 4019 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetServiceProgress 获取售后进度(4020)
     * @apiDescription 
     * @apiName GetServiceProgress
     * @apiGroup Order
     * @apiParam {String} ServiceId 售后单号
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetServiceProgress
     * @apiVersion 1.0.0
     */
    app.get('/api/GetServiceProgress', function (req, res) {
        var requestUrl = " /? actionid = 4020 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/RemoveCartGoods 移除购物车商品(4021)
     * @apiDescription 
     * @apiName RemoveCartGoods
     * @apiGroup Order
     * @apiParam {String} skuId 购物车商品SkuId，逗号分割
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/RemoveCartGoods
     * @apiVersion 1.0.0
     */
    app.get('/api/RemoveCartGoods', function (req, res) {
        var requestUrl = " /? actionid = 4021 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

    /**
     * @api {get} /api/GetReceiverInfoByService 根据售后单号获取地址信息(4022)
     * @apiDescription 
     * @apiName GetReceiverInfoByService
     * @apiGroup Order
     * @apiParam {String} ServiceId 售后单号
     * @apiSuccess {json} result
     * @apiSampleRequest http://localhost:3000/api/GetReceiverInfoByService
     * @apiVersion 1.0.0
     */
    app.get('/api/GetReceiverInfoByService', function (req, res) {
        var requestUrl = " /? actionid = 4022 & " + querystring.stringify(url.parse(req.url, true).query);
        common.SendRequest(requestUrl, function(receiveData){
            res.end(receiveData);
        });
    });

}

exports.initRoute = initRoute