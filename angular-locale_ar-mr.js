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
      "\u0635",
      "\u0645"
    ],
    "DAY": [
      "\u0627\u0644\u0623\u062d\u062f",
      "\u0627\u0644\u0627\u062b\u0646\u064a\u0646",
      "\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621",
      "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621",
      "\u0627\u0644\u062e\u0645\u064a\u0633",
      "\u0627\u0644\u062c\u0645\u0639\u0629",
      "\u0627\u0644\u0633\u0628\u062a"
    ],
    "MONTH": [
      "\u064a\u0646\u0627\u064a\u0631",
      "\u0641\u0628\u0631\u0627\u064a\u0631",
      "\u0645\u0627\u0631\u0633",
      "\u0625\u0628\u0631\u064a\u0644",
      "\u0645\u0627\u064a\u0648",
      "\u064a\u0648\u0646\u064a\u0648",
      "\u064a\u0648\u0644\u064a\u0648",
      "\u0623\u063a\u0634\u062a",
      "\u0634\u062a\u0645\u0628\u0631",
      "\u0623\u0643\u062a\u0648\u0628\u0631",
      "\u0646\u0648\u0641\u0645\u0628\u0631",
      "\u062f\u062c\u0645\u0628\u0631"
    ],
    "SHORTDAY": [
      "\u0627\u0644\u0623\u062d\u062f",
      "\u0627\u0644\u0627\u062b\u0646\u064a\u0646",
      "\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621",
      "\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621",
      "\u0627\u0644\u062e\u0645\u064a\u0633",
      "\u0627\u0644\u062c\u0645\u0639\u0629",
      "\u0627\u0644\u0633\u0628\u062a"
    ],
    "SHORTMONTH": [
      "\u064a\u0646\u0627\u064a\u0631",
      "\u0641\u0628\u0631\u0627\u064a\u0631",
      "\u0645\u0627\u0631\u0633",
      "\u0625\u0628\u0631\u064a\u0644",
      "\u0645\u0627\u064a\u0648",
      "\u064a\u0648\u0646\u064a\u0648",
      "\u064a\u0648\u0644\u064a\u0648",
      "\u0623\u063a\u0634\u062a",
      "\u0634\u062a\u0645\u0628\u0631",
      "\u0623\u0643\u062a\u0648\u0628\u0631",
      "\u0646\u0648\u0641\u0645\u0628\u0631",
      "\u062f\u062c\u0645\u0628\u0631"
    ],
    "fullDate": "EEEE\u060c d MMMM\u060c y",
    "longDate": "d MMMM\u060c y",
    "medium": "dd\u200f/MM\u200f/y h:mm:ss a",
    "mediumDate": "dd\u200f/MM\u200f/y",
    "mediumTime": "h:mm:ss a",
    "short": "d\u200f/M\u200f/y h:mm a",
    "shortDate": "d\u200f/M\u200f/y",
    "shortTime": "h:mm a"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "MRO",
    "DECIMAL_SEP": "\u066b",
    "GROUP_SEP": "\u066c",
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
        "negPre": "\u00a4\u00a0-",
        "negSuf": "",
        "posPre": "\u00a4\u00a0",
        "posSuf": ""
      }
    ]
  },
  "id": "ar-mr",
  "pluralCat": function (n, opt_precision) {  if (n == 0) {    return PLURAL_CATEGORY.ZERO;  }  if (n == 1) {    return PLURAL_CATEGORY.ONE;  }  if (n == 2) {    return PLURAL_CATEGORY.TWO;  }  if (n % 100 >= 3 && n % 100 <= 10) {    return PLURAL_CATEGORY.FEW;  }  if (n % 100 >= 11 && n % 100 <= 99) {    return PLURAL_CATEGORY.MANY;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);