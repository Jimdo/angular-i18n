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
      "pamilau",
      "pamunyi"
    ],
    "DAY": [
      "pa mulungu",
      "pa shahuviluha",
      "pa hivili",
      "pa hidatu",
      "pa hitayi",
      "pa hihanu",
      "pa shahulembela"
    ],
    "MONTH": [
      "pa mwedzi gwa hutala",
      "pa mwedzi gwa wuvili",
      "pa mwedzi gwa wudatu",
      "pa mwedzi gwa wutai",
      "pa mwedzi gwa wuhanu",
      "pa mwedzi gwa sita",
      "pa mwedzi gwa saba",
      "pa mwedzi gwa nane",
      "pa mwedzi gwa tisa",
      "pa mwedzi gwa kumi",
      "pa mwedzi gwa kumi na moja",
      "pa mwedzi gwa kumi na mbili"
    ],
    "SHORTDAY": [
      "Mul",
      "Vil",
      "Hiv",
      "Hid",
      "Hit",
      "Hih",
      "Lem"
    ],
    "SHORTMONTH": [
      "Hut",
      "Vil",
      "Dat",
      "Tai",
      "Han",
      "Sit",
      "Sab",
      "Nan",
      "Tis",
      "Kum",
      "Kmj",
      "Kmb"
    ],
    "fullDate": "EEEE, d MMMM y",
    "longDate": "d MMMM y",
    "medium": "d MMM y h:mm:ss a",
    "mediumDate": "d MMM y",
    "mediumTime": "h:mm:ss a",
    "short": "dd/MM/y h:mm a",
    "shortDate": "dd/MM/y",
    "shortTime": "h:mm a"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "TSh",
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
        "negPre": "-",
        "negSuf": "\u00a4",
        "posPre": "",
        "posSuf": "\u00a4"
      }
    ]
  },
  "id": "bez",
  "pluralCat": function (n, opt_precision) {  var i = n | 0;  var vf = GET_VF(n, opt_precision);  if (i == 1 && vf.v == 0) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);