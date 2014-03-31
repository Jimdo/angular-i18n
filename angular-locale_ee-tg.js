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
      "\u014bdi",
      "\u0263etr\u0254"
    ],
    "DAY": [
      "k\u0254si\u0256a",
      "dzo\u0256a",
      "bla\u0256a",
      "ku\u0256a",
      "yawo\u0256a",
      "fi\u0256a",
      "memle\u0256a"
    ],
    "MONTH": [
      "dzove",
      "dzodze",
      "tedoxe",
      "af\u0254f\u0129e",
      "dama",
      "masa",
      "siaml\u0254m",
      "deasiamime",
      "any\u0254ny\u0254",
      "kele",
      "ade\u025bmekp\u0254xe",
      "dzome"
    ],
    "SHORTDAY": [
      "k\u0254s",
      "dzo",
      "bla",
      "ku\u0256",
      "yaw",
      "fi\u0256",
      "mem"
    ],
    "SHORTMONTH": [
      "dzv",
      "dzd",
      "ted",
      "af\u0254",
      "dam",
      "mas",
      "sia",
      "dea",
      "any",
      "kel",
      "ade",
      "dzm"
    ],
    "fullDate": "EEEE, MMMM d 'lia' y",
    "longDate": "MMMM d 'lia' y",
    "medium": "MMM d 'lia', y a 'ga' h:mm:ss",
    "mediumDate": "MMM d 'lia', y",
    "mediumTime": "a 'ga' h:mm:ss",
    "short": "M/d/yy a 'ga' h:mm",
    "shortDate": "M/d/yy",
    "shortTime": "a 'ga' h:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "CFA",
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
  "id": "ee-tg",
  "pluralCat": function (n, opt_precision) {  var i = n | 0;  var vf = GET_VF(n, opt_precision);  if (i == 1 && vf.v == 0) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);