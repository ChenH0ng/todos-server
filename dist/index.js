"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _express=require("express"),_express2=_interopRequireDefault(_express),app=(0,_express2.default)();app.get("*",function(e,s){s.send("tech everything")}),app.listen(80,function(){console.log("asdasd")});