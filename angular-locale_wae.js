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
      "Sunntag",
      "M\u00e4ntag",
      "Zi\u0161tag",
      "Mittwu\u010d",
      "Fr\u00f3ntag",
      "Fritag",
      "Sam\u0161tag"
    ],
    "MONTH": [
      "Jenner",
      "Hornig",
      "M\u00e4rze",
      "Abrille",
      "Meije",
      "Br\u00e1\u010det",
      "Heiwet",
      "\u00d6ig\u0161te",
      "Herb\u0161tm\u00e1net",
      "W\u00edm\u00e1net",
      "Winterm\u00e1net",
      "Chri\u0161tm\u00e1net"
    ],
    "SHORTDAY": [
      "Sun",
      "M\u00e4n",
      "Zi\u0161",
      "Mit",
      "Fr\u00f3",
      "Fri",
      "Sam"
    ],
    "SHORTMONTH": [
      "Jen",
      "Hor",
      "M\u00e4r",
      "Abr",
      "Mei",
      "Br\u00e1",
      "Hei",
      "\u00d6ig",
      "Her",
      "W\u00edm",
      "Win",
      "Chr"
    ],
    "fullDate": "EEEE, d. MMMM y",
    "longDate": "d. MMMM y",
    "medium": "d. MMM y HH:mm:ss",
    "mediumDate": "d. MMM y",
    "mediumTime": "HH:mm:ss",
    "short": "y-MM-dd HH:mm",
    "shortDate": "y-MM-dd",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "CHF",
    "DECIMAL_SEP": ",",
    "GROUP_SEP": "\u2019",
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
  "id": "wae",
  "pluralCat": function (n, opt_precision) {  var i = n | 0;  var vf = GET_VF(n, opt_precision);  if (i == 1 && vf.v == 0) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);