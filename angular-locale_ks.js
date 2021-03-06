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
      "AM",
      "PM"
    ],
    "DAY": [
      "\u0627\u064e\u062a\u06be\u0648\u0627\u0631",
      "\u0698\u0654\u0646\u065b\u062f\u0631\u0655\u0631\u0648\u0627\u0631",
      "\u0628\u0648\u065a\u0645\u0648\u0627\u0631",
      "\u0628\u0648\u062f\u0648\u0627\u0631",
      "\u0628\u0631\u065b\u066e\u06ea\u0633\u0648\u0627\u0631",
      "\u062c\u064f\u0645\u06c1",
      "\u0628\u0679\u0648\u0627\u0631"
    ],
    "MONTH": [
      "\u062c\u0646\u0624\u0631\u06cc",
      "\u0641\u0631\u0624\u0631\u06cc",
      "\u0645\u0627\u0631\u0655\u0686",
      "\u0627\u067e\u0631\u06cc\u0644",
      "\u0645\u06cc\u0654",
      "\u062c\u0648\u0657\u0646",
      "\u062c\u0648\u0657\u0644\u0627\u06cc\u06cc",
      "\u0627\u06af\u0633\u062a",
      "\u0633\u062a\u0645\u0628\u0631",
      "\u0627\u06a9\u062a\u0648\u0657\u0628\u0631",
      "\u0646\u0648\u0645\u0628\u0631",
      "\u062f\u0633\u0645\u0628\u0631"
    ],
    "SHORTDAY": [
      "\u0622\u062a\u06be\u0648\u0627\u0631",
      "\u0698\u0654\u0646\u065b\u062f\u0655\u0631\u0648\u0627\u0631",
      "\u0628\u0648\u065a\u0645\u0648\u0627\u0631",
      "\u0628\u0648\u062f\u0648\u0627\u0631",
      "\u0628\u0631\u065b\u066e\u06ea\u0633\u0648\u0627\u0631",
      "\u062c\u064f\u0645\u06c1",
      "\u0628\u0679\u0648\u0627\u0631"
    ],
    "SHORTMONTH": [
      "\u062c\u0646\u0624\u0631\u06cc",
      "\u0641\u0631\u0624\u0631\u06cc",
      "\u0645\u0627\u0631\u0655\u0686",
      "\u0627\u067e\u0631\u06cc\u0644",
      "\u0645\u06cc\u0654",
      "\u062c\u0648\u0657\u0646",
      "\u062c\u0648\u0657\u0644\u0627\u06cc\u06cc",
      "\u0627\u06af\u0633\u062a",
      "\u0633\u062a\u0645\u0628\u0631",
      "\u0627\u06a9\u062a\u0648\u0657\u0628\u0631",
      "\u0646\u0648\u0645\u0628\u0631",
      "\u062f\u0633\u0645\u0628\u0631"
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
    "DECIMAL_SEP": "\u066b",
    "GROUP_SEP": "\u066c",
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
  "id": "ks",
  "pluralCat": function (n, opt_precision) {  var i = n | 0;  var vf = GET_VF(n, opt_precision);  if (i == 1 && vf.v == 0) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);