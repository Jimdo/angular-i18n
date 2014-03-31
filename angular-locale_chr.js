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
      "\u13cc\u13be\u13b4",
      "\u13d2\u13af\u13f1\u13a2\u13d7\u13e2"
    ],
    "DAY": [
      "\u13a4\u13be\u13d9\u13d3\u13c6\u13cd\u13ac",
      "\u13a4\u13be\u13d9\u13d3\u13c9\u13c5\u13af",
      "\u13d4\u13b5\u13c1\u13a2\u13a6",
      "\u13e6\u13a2\u13c1\u13a2\u13a6",
      "\u13c5\u13a9\u13c1\u13a2\u13a6",
      "\u13e7\u13be\u13a9\u13b6\u13cd\u13d7",
      "\u13a4\u13be\u13d9\u13d3\u13c8\u13d5\u13be"
    ],
    "MONTH": [
      "\u13a4\u13c3\u13b8\u13d4\u13c5",
      "\u13a7\u13a6\u13b5",
      "\u13a0\u13c5\u13f1",
      "\u13a7\u13ec\u13c2",
      "\u13a0\u13c2\u13cd\u13ac\u13d8",
      "\u13d5\u13ad\u13b7\u13f1",
      "\u13ab\u13f0\u13c9\u13c2",
      "\u13a6\u13b6\u13c2",
      "\u13da\u13b5\u13cd\u13d7",
      "\u13da\u13c2\u13c5\u13d7",
      "\u13c5\u13d3\u13d5\u13c6",
      "\u13a4\u13cd\u13a9\u13f1"
    ],
    "SHORTDAY": [
      "\u13c6\u13cd\u13ac",
      "\u13c9\u13c5\u13af",
      "\u13d4\u13b5\u13c1",
      "\u13e6\u13a2\u13c1",
      "\u13c5\u13a9\u13c1",
      "\u13e7\u13be\u13a9",
      "\u13c8\u13d5\u13be"
    ],
    "SHORTMONTH": [
      "\u13a4\u13c3",
      "\u13a7\u13a6",
      "\u13a0\u13c5",
      "\u13a7\u13ec",
      "\u13a0\u13c2",
      "\u13d5\u13ad",
      "\u13ab\u13f0",
      "\u13a6\u13b6",
      "\u13da\u13b5",
      "\u13da\u13c2",
      "\u13c5\u13d3",
      "\u13a4\u13cd"
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
    "CURRENCY_SYM": "$",
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
  "id": "chr",
  "pluralCat": function (n, opt_precision) {  if (n == 1) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);