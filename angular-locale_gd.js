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
      "m",
      "f"
    ],
    "DAY": [
      "DiD\u00f2mhnaich",
      "DiLuain",
      "DiM\u00e0irt",
      "DiCiadain",
      "Diardaoin",
      "DihAoine",
      "DiSathairne"
    ],
    "MONTH": [
      "Am Faoilleach",
      "An Gearran",
      "Am M\u00e0rt",
      "An Giblean",
      "An C\u00e8itean",
      "An t-\u00d2gmhios",
      "An t-Iuchar",
      "An L\u00f9nastal",
      "An t-Sultain",
      "An D\u00e0mhair",
      "An t-Samhain",
      "An D\u00f9bhlachd"
    ],
    "SHORTDAY": [
      "DiD",
      "DiL",
      "DiM",
      "DiC",
      "Dia",
      "Dih",
      "DiS"
    ],
    "SHORTMONTH": [
      "Faoi",
      "Gearr",
      "M\u00e0rt",
      "Gibl",
      "C\u00e8it",
      "\u00d2gmh",
      "Iuch",
      "L\u00f9na",
      "Sult",
      "D\u00e0mh",
      "Samh",
      "D\u00f9bh"
    ],
    "fullDate": "EEEE, d MMMM y",
    "longDate": "d MMMM y",
    "medium": "d MMM y HH:mm:ss",
    "mediumDate": "d MMM y",
    "mediumTime": "HH:mm:ss",
    "short": "dd/MM/y HH:mm",
    "shortDate": "dd/MM/y",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "\u00a3",
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
  "id": "gd",
  "pluralCat": function (n, opt_precision) {  var i = n | 0;  var vf = GET_VF(n, opt_precision);  if (i == 1 && vf.v == 0) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);