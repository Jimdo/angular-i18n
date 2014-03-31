'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var DECIMALS = function (n) {
  var str = n + '';
  var result = str.indexOf('.');
  return (result == -1) ? 0 : str.length - result - 1;
};
var GET_WT = function (v, f) {
  if (f === 0) {
    return {w: 0, t: 0};
  }

  while ((f % 10) === 0) {
    f /= 10;
    v--;
  }

  return {w: v, t: f};
};
var GET_VF = function (n, opt_precision) {
  var DEFAULT_DIGITS = 3;

  if (undefined === opt_precision) {
    var v = Math.min(DECIMALS(n), DEFAULT_DIGITS);
  } else {
    var v = opt_precision;
  }

  var base = Math.pow(10, v);
  var f = ((n * base) | 0) % base;

  return {v: v, f: f};
};
var PLURAL_CATEGORY = {"ZERO":"zero","ONE":"one","TWO":"two","FEW":"few","MANY":"many","OTHER":"other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "\u092a\u0942\u0930\u094d\u0935\u093e\u0939\u094d\u0928",
      "\u0905\u092a\u0930\u093e\u0939\u094d\u0928"
    ],
    "DAY": [
      "\u0906\u0907\u0924\u0935\u093e\u0930",
      "\u0938\u094b\u092e\u0935\u093e\u0930",
      "\u092e\u0919\u094d\u0917\u0932\u0935\u093e\u0930",
      "\u092c\u0941\u0927\u0935\u093e\u0930",
      "\u092c\u093f\u0939\u0940\u0935\u093e\u0930",
      "\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930",
      "\u0936\u0928\u093f\u0935\u093e\u0930"
    ],
    "MONTH": [
      "\u091c\u0928\u0935\u0930\u0940",
      "\u092b\u0930\u0935\u0930\u0940",
      "\u092e\u093e\u0930\u094d\u091a",
      "\u0905\u092a\u094d\u0930\u0947\u0932",
      "\u092e\u0908",
      "\u091c\u0941\u0928",
      "\u091c\u0941\u0932\u093e\u0908",
      "\u0905\u0917\u0938\u094d\u0924",
      "\u0938\u0947\u092a\u094d\u091f\u0947\u092e\u094d\u092c\u0930",
      "\u0905\u0915\u094d\u091f\u094b\u092c\u0930",
      "\u0928\u094b\u092d\u0947\u092e\u094d\u092c\u0930",
      "\u0926\u093f\u0938\u092e\u094d\u092c\u0930"
    ],
    "SHORTDAY": [
      "\u0906\u0907\u0924",
      "\u0938\u094b\u092e",
      "\u092e\u0919\u094d\u0917\u0932",
      "\u092c\u0941\u0927",
      "\u092c\u093f\u0939\u0940",
      "\u0936\u0941\u0915\u094d\u0930",
      "\u0936\u0928\u093f"
    ],
    "SHORTMONTH": [
      "\u091c\u0928\u0935\u0930\u0940",
      "\u092b\u0947\u092c\u094d\u0930\u0941\u0905\u0930\u0940",
      "\u092e\u093e\u0930\u094d\u091a",
      "\u0905\u092a\u094d\u0930\u093f\u0932",
      "\u092e\u0947",
      "\u091c\u0941\u0928",
      "\u091c\u0941\u0932\u093e\u0908",
      "\u0905\u0917\u0938\u094d\u091f",
      "\u0938\u0947\u092a\u094d\u091f\u0947\u092e\u094d\u092c\u0930",
      "\u0905\u0915\u094d\u091f\u094b\u092c\u0930",
      "\u0928\u094b\u092d\u0947\u092e\u094d\u092c\u0930",
      "\u0921\u093f\u0938\u0947\u092e\u094d\u092c\u0930"
    ],
    "fullDate": "y MMMM d, EEEE",
    "longDate": "y MMMM d",
    "medium": "y MMM d HH:mm:ss",
    "mediumDate": "y MMM d",
    "mediumTime": "HH:mm:ss",
    "short": "y-MM-dd HH:mm",
    "shortDate": "y-MM-dd",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "\u20b9",
    "DECIMAL_SEP": ".",
    "GROUP_SEP": ",",
    "PATTERNS": [
      {
        "gSize": 3,
        "lgSize": 3,
        "macFrac": 0,
        "maxFrac": 3,
        "minFrac": 0,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "",
        "posPre": "",
        "posSuf": ""
      },
      {
        "gSize": 3,
        "lgSize": 3,
        "macFrac": 0,
        "maxFrac": 2,
        "minFrac": 2,
        "minInt": 1,
        "negPre": "\u00a4-",
        "negSuf": "",
        "posPre": "\u00a4",
        "posSuf": ""
      }
    ]
  },
  "id": "ne-in",
  "pluralCat": function (n, opt_precision) {  var i = n | 0;  var vf = GET_VF(n, opt_precision);  if (i == 1 && vf.v == 0) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);