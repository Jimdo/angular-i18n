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
      "atm",
      "ptm"
    ],
    "DAY": [
      "diman\u0109o",
      "lundo",
      "mardo",
      "merkredo",
      "\u0135a\u016ddo",
      "vendredo",
      "sabato"
    ],
    "MONTH": [
      "januaro",
      "februaro",
      "marto",
      "aprilo",
      "majo",
      "junio",
      "julio",
      "a\u016dgusto",
      "septembro",
      "oktobro",
      "novembro",
      "decembro"
    ],
    "SHORTDAY": [
      "di",
      "lu",
      "ma",
      "me",
      "\u0135a",
      "ve",
      "sa"
    ],
    "SHORTMONTH": [
      "jan",
      "feb",
      "mar",
      "apr",
      "maj",
      "jun",
      "jul",
      "a\u016dg",
      "sep",
      "okt",
      "nov",
      "dec"
    ],
    "fullDate": "EEEE, d-'a' 'de' MMMM y",
    "longDate": "y-MMMM-dd",
    "medium": "y-MMM-dd HH:mm:ss",
    "mediumDate": "y-MMM-dd",
    "mediumTime": "HH:mm:ss",
    "short": "yy-MM-dd HH:mm",
    "shortDate": "yy-MM-dd",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "$",
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
        "negPre": "\u00a4\u00a0-",
        "negSuf": "",
        "posPre": "\u00a4\u00a0",
        "posSuf": ""
      }
    ]
  },
  "id": "eo",
  "pluralCat": function (n, opt_precision) {  var i = n | 0;  var vf = GET_VF(n, opt_precision);  if (i == 1 && vf.v == 0) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);