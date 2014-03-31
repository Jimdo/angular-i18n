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
      "\u2d5c\u2d49\u2d3c\u2d30\u2d61\u2d5c",
      "\u2d5c\u2d30\u2d37\u2d33\u2d33\u2d6f\u2d30\u2d5c"
    ],
    "DAY": [
      "\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59",
      "\u2d30\u2d62\u2d4f\u2d30\u2d59",
      "\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59",
      "\u2d30\u2d3d\u2d55\u2d30\u2d59",
      "\u2d30\u2d3d\u2d61\u2d30\u2d59",
      "\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59",
      "\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59"
    ],
    "MONTH": [
      "\u2d49\u2d4f\u2d4f\u2d30\u2d62\u2d54",
      "\u2d31\u2d55\u2d30\u2d62\u2d55",
      "\u2d4e\u2d30\u2d55\u2d5a",
      "\u2d49\u2d31\u2d54\u2d49\u2d54",
      "\u2d4e\u2d30\u2d62\u2d62\u2d53",
      "\u2d62\u2d53\u2d4f\u2d62\u2d53",
      "\u2d62\u2d53\u2d4d\u2d62\u2d53\u2d63",
      "\u2d56\u2d53\u2d5b\u2d5c",
      "\u2d5b\u2d53\u2d5c\u2d30\u2d4f\u2d31\u2d49\u2d54",
      "\u2d3d\u2d5c\u2d53\u2d31\u2d54",
      "\u2d4f\u2d53\u2d61\u2d30\u2d4f\u2d31\u2d49\u2d54",
      "\u2d37\u2d53\u2d4a\u2d30\u2d4f\u2d31\u2d49\u2d54"
    ],
    "SHORTDAY": [
      "\u2d30\u2d59\u2d30",
      "\u2d30\u2d62\u2d4f",
      "\u2d30\u2d59\u2d49",
      "\u2d30\u2d3d\u2d55",
      "\u2d30\u2d3d\u2d61",
      "\u2d30\u2d59\u2d49\u2d4e",
      "\u2d30\u2d59\u2d49\u2d39"
    ],
    "SHORTMONTH": [
      "\u2d49\u2d4f\u2d4f",
      "\u2d31\u2d55\u2d30",
      "\u2d4e\u2d30\u2d55",
      "\u2d49\u2d31\u2d54",
      "\u2d4e\u2d30\u2d62",
      "\u2d62\u2d53\u2d4f",
      "\u2d62\u2d53\u2d4d",
      "\u2d56\u2d53\u2d5b",
      "\u2d5b\u2d53\u2d5c",
      "\u2d3d\u2d5c\u2d53",
      "\u2d4f\u2d53\u2d61",
      "\u2d37\u2d53\u2d4a"
    ],
    "fullDate": "EEEE d MMMM y",
    "longDate": "d MMMM y",
    "medium": "d MMM, y HH:mm:ss",
    "mediumDate": "d MMM, y",
    "mediumTime": "HH:mm:ss",
    "short": "d/M/y HH:mm",
    "shortDate": "d/M/y",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "dh",
    "DECIMAL_SEP": ",",
    "GROUP_SEP": "\u00a0",
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
        "negPre": "-",
        "negSuf": "\u00a4",
        "posPre": "",
        "posSuf": "\u00a4"
      }
    ]
  },
  "id": "shi-tfng-ma",
  "pluralCat": function (n, opt_precision) {  var i = n | 0;  var vf = GET_VF(n, opt_precision);  if (i == 1 && vf.v == 0) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);