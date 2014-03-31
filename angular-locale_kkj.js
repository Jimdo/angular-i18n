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
      "s\u0254ndi",
      "lundi",
      "mardi",
      "m\u025brk\u025br\u025bdi",
      "yedi",
      "va\u014bd\u025br\u025bdi",
      "m\u0254n\u0254 s\u0254ndi"
    ],
    "MONTH": [
      "pamba",
      "wanja",
      "mbiy\u0254 m\u025bndo\u014bg\u0254",
      "Ny\u0254l\u0254mb\u0254\u014bg\u0254",
      "M\u0254n\u0254 \u014bgbanja",
      "Nya\u014bgw\u025b \u014bgbanja",
      "ku\u014bgw\u025b",
      "f\u025b",
      "njapi",
      "nyukul",
      "11",
      "\u0253ul\u0253us\u025b"
    ],
    "SHORTDAY": [
      "s\u0254ndi",
      "lundi",
      "mardi",
      "m\u025brk\u025br\u025bdi",
      "yedi",
      "va\u014bd\u025br\u025bdi",
      "m\u0254n\u0254 s\u0254ndi"
    ],
    "SHORTMONTH": [
      "pamba",
      "wanja",
      "mbiy\u0254 m\u025bndo\u014bg\u0254",
      "Ny\u0254l\u0254mb\u0254\u014bg\u0254",
      "M\u0254n\u0254 \u014bgbanja",
      "Nya\u014bgw\u025b \u014bgbanja",
      "ku\u014bgw\u025b",
      "f\u025b",
      "njapi",
      "nyukul",
      "11",
      "\u0253ul\u0253us\u025b"
    ],
    "fullDate": "EEEE dd MMMM y",
    "longDate": "d MMMM y",
    "medium": "d MMM y HH:mm:ss",
    "mediumDate": "d MMM y",
    "mediumTime": "HH:mm:ss",
    "short": "dd/MM y HH:mm",
    "shortDate": "dd/MM y",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "FCFA",
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
        "negPre": "\u00a4\u00a0-",
        "negSuf": "",
        "posPre": "\u00a4\u00a0",
        "posSuf": ""
      }
    ]
  },
  "id": "kkj",
  "pluralCat": function (n, opt_precision) {  var i = n | 0;  var vf = GET_VF(n, opt_precision);  if (i == 1 && vf.v == 0) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);