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
      "\u0db4\u0dd9.\u0dc0.",
      "\u0db4.\u0dc0."
    ],
    "DAY": [
      "\u0d89\u0dbb\u0dd2\u0daf\u0dcf",
      "\u0dc3\u0db3\u0dd4\u0daf\u0dcf",
      "\u0d85\u0d9f\u0dc4\u0dbb\u0dd4\u0dc0\u0dcf\u0daf\u0dcf",
      "\u0db6\u0daf\u0dcf\u0daf\u0dcf",
      "\u0db6\u0dca\u200d\u0dbb\u0dc4\u0dc3\u0dca\u0db4\u0dad\u0dd2\u0db1\u0dca\u0daf\u0dcf",
      "\u0dc3\u0dd2\u0d9a\u0dd4\u0dbb\u0dcf\u0daf\u0dcf",
      "\u0dc3\u0dd9\u0db1\u0dc3\u0dd4\u0dbb\u0dcf\u0daf\u0dcf"
    ],
    "MONTH": [
      "\u0da2\u0db1\u0dc0\u0dcf\u0dbb\u0dd2",
      "\u0db4\u0dd9\u0db6\u0dbb\u0dc0\u0dcf\u0dbb\u0dd2",
      "\u0db8\u0dcf\u0dbb\u0dca\u0dad\u0dd4",
      "\u0d85\u0db4\u0dca\u200d\u0dbb\u0dda\u0dbd\u0dca",
      "\u0db8\u0dd0\u0dba\u0dd2",
      "\u0da2\u0dd6\u0db1\u0dd2",
      "\u0da2\u0dd6\u0dbd\u0dd2",
      "\u0d85\u0d9c\u0ddd\u0dc3\u0dca\u0dad\u0dd4",
      "\u0dc3\u0dd0\u0db4\u0dca\u0dad\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca",
      "\u0d94\u0d9a\u0dca\u0dad\u0ddd\u0db6\u0dbb\u0dca",
      "\u0db1\u0ddc\u0dc0\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca",
      "\u0daf\u0dd9\u0dc3\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca"
    ],
    "SHORTDAY": [
      "\u0d89\u0dbb\u0dd2\u0daf\u0dcf",
      "\u0dc3\u0db3\u0dd4\u0daf\u0dcf",
      "\u0d85\u0d9f\u0dc4",
      "\u0db6\u0daf\u0dcf\u0daf\u0dcf",
      "\u0db6\u0dca\u200d\u0dbb\u0dc4\u0dc3\u0dca",
      "\u0dc3\u0dd2\u0d9a\u0dd4",
      "\u0dc3\u0dd9\u0db1"
    ],
    "SHORTMONTH": [
      "\u0da2\u0db1",
      "\u0db4\u0dd9\u0db6",
      "\u0db8\u0dcf\u0dbb\u0dca\u0dad\u0dd4",
      "\u0d85\u0db4\u0dca\u200d\u0dbb\u0dda\u0dbd\u0dca",
      "\u0db8\u0dd0\u0dba\u0dd2",
      "\u0da2\u0dd6\u0db1\u0dd2",
      "\u0da2\u0dd6\u0dbd\u0dd2",
      "\u0d85\u0d9c\u0ddd",
      "\u0dc3\u0dd0\u0db4\u0dca",
      "\u0d94\u0d9a\u0dca",
      "\u0db1\u0ddc\u0dc0\u0dd0",
      "\u0daf\u0dd9\u0dc3\u0dd0"
    ],
    "fullDate": "y MMMM d, EEEE",
    "longDate": "y MMMM d",
    "medium": "y MMM d a h.mm.ss",
    "mediumDate": "y MMM d",
    "mediumTime": "a h.mm.ss",
    "short": "y-MM-dd a h.mm",
    "shortDate": "y-MM-dd",
    "shortTime": "a h.mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "Rs",
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
  "id": "si-lk",
  "pluralCat": function (n, opt_precision) {  var i = n | 0;  var vf = GET_VF(n, opt_precision);  if (i == 1 && vf.v == 0) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);