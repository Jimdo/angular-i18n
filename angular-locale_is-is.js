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
      "f.h.",
      "e.h."
    ],
    "DAY": [
      "sunnudagur",
      "m\u00e1nudagur",
      "\u00feri\u00f0judagur",
      "mi\u00f0vikudagur",
      "fimmtudagur",
      "f\u00f6studagur",
      "laugardagur"
    ],
    "MONTH": [
      "jan\u00faar",
      "febr\u00faar",
      "mars",
      "apr\u00edl",
      "ma\u00ed",
      "j\u00fan\u00ed",
      "j\u00fal\u00ed",
      "\u00e1g\u00fast",
      "september",
      "okt\u00f3ber",
      "n\u00f3vember",
      "desember"
    ],
    "SHORTDAY": [
      "sun.",
      "m\u00e1n.",
      "\u00feri.",
      "mi\u00f0.",
      "fim.",
      "f\u00f6s.",
      "lau."
    ],
    "SHORTMONTH": [
      "jan.",
      "feb.",
      "mar.",
      "apr.",
      "ma\u00ed",
      "j\u00fan.",
      "j\u00fal.",
      "\u00e1g\u00fa.",
      "sep.",
      "okt.",
      "n\u00f3v.",
      "des."
    ],
    "fullDate": "EEEE, d. MMMM y",
    "longDate": "d. MMMM y",
    "medium": "d. MMM y HH:mm:ss",
    "mediumDate": "d. MMM y",
    "mediumTime": "HH:mm:ss",
    "short": "d.M.y HH:mm",
    "shortDate": "d.M.y",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "kr",
    "DECIMAL_SEP": ",",
    "GROUP_SEP": ".",
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
        "negSuf": "\u00a0\u00a4",
        "posPre": "",
        "posSuf": "\u00a0\u00a4"
      }
    ]
  },
  "id": "is-is",
  "pluralCat": function (n, opt_precision) {  var i = n | 0;  var vf = GET_VF(n, opt_precision);  var wt = GET_WT(vf.v, vf.f);  if (wt.t == 0 && i % 10 == 1 && i % 100 != 11 || wt.t != 0) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);