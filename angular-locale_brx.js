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
      "\u092b\u0941\u0902",
      "\u092c\u0947\u0932\u093e\u0938\u0947"
    ],
    "DAY": [
      "\u0930\u092c\u093f\u092c\u093e\u0930",
      "\u0938\u092e\u092c\u093e\u0930",
      "\u092e\u0902\u0917\u0932\u092c\u093e\u0930",
      "\u092c\u0941\u0926\u092c\u093e\u0930",
      "\u092c\u093f\u0938\u0925\u093f\u092c\u093e\u0930",
      "\u0938\u0941\u0916\u0941\u0930\u092c\u093e\u0930",
      "\u0938\u0941\u0928\u093f\u092c\u093e\u0930"
    ],
    "MONTH": [
      "\u091c\u093e\u0928\u0941\u0935\u093e\u0930\u0940",
      "\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940",
      "\u092e\u093e\u0930\u094d\u0938",
      "\u090f\u092b\u094d\u0930\u093f\u0932",
      "\u092e\u0947",
      "\u091c\u0941\u0928",
      "\u091c\u0941\u0932\u093e\u0907",
      "\u0906\u0917\u0938\u094d\u0925",
      "\u0938\u0947\u092c\u0925\u0947\u091c\u094d\u092c\u093c\u0930",
      "\u0905\u0916\u0925\u092c\u0930",
      "\u0928\u092c\u0947\u091c\u094d\u092c\u093c\u0930",
      "\u0926\u093f\u0938\u0947\u091c\u094d\u092c\u093c\u0930"
    ],
    "SHORTDAY": [
      "\u0930\u092c\u093f",
      "\u0938\u092e",
      "\u092e\u0902\u0917\u0932",
      "\u092c\u0941\u0926",
      "\u092c\u093f\u0938\u0925\u093f",
      "\u0938\u0941\u0916\u0941\u0930",
      "\u0938\u0941\u0928\u093f"
    ],
    "SHORTMONTH": [
      "\u091c\u093e\u0928\u0941\u0935\u093e\u0930\u0940",
      "\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940",
      "\u092e\u093e\u0930\u094d\u0938",
      "\u090f\u092b\u094d\u0930\u093f\u0932",
      "\u092e\u0947",
      "\u091c\u0941\u0928",
      "\u091c\u0941\u0932\u093e\u0907",
      "\u0906\u0917\u0938\u094d\u0925",
      "\u0938\u0947\u092c\u0925\u0947\u091c\u094d\u092c\u093c\u0930",
      "\u0905\u0916\u0925\u092c\u0930",
      "\u0928\u092c\u0947\u091c\u094d\u092c\u093c\u0930",
      "\u0926\u093f\u0938\u0947\u091c\u094d\u092c\u093c\u0930"
    ],
    "fullDate": "EEEE, MMMM d, y",
    "longDate": "MMMM d, y",
    "medium": "MMM d, y h:mm:ss a",
    "mediumDate": "MMM d, y",
    "mediumTime": "h:mm:ss a",
    "short": "M/d/yy h:mm a",
    "shortDate": "M/d/yy",
    "shortTime": "h:mm a"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "\u20b9",
    "DECIMAL_SEP": ".",
    "GROUP_SEP": ",",
    "PATTERNS": [
      {
        "gSize": 2,
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
        "gSize": 2,
        "lgSize": 3,
        "macFrac": 0,
        "maxFrac": 2,
        "minFrac": 2,
        "minInt": 1,
        "negPre": "\u00a4\u00a0-",
        "negSuf": "",
        "posPre": "\u00a4\u00a0",
        "posSuf": ""
      }
    ]
  },
  "id": "brx",
  "pluralCat": function (n, opt_precision) {  var i = n | 0;  var vf = GET_VF(n, opt_precision);  if (i == 1 && vf.v == 0) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);