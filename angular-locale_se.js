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
      "i\u0111itbeaivet",
      "eahketbeaivet"
    ],
    "DAY": [
      "sotnabeaivi",
      "vuoss\u00e1rga",
      "ma\u014b\u014beb\u00e1rga",
      "gaskavahkku",
      "duorasdat",
      "bearjadat",
      "l\u00e1vvardat"
    ],
    "MONTH": [
      "o\u0111\u0111ajagem\u00e1nnu",
      "guovvam\u00e1nnu",
      "njuk\u010dam\u00e1nnu",
      "cuo\u014bom\u00e1nnu",
      "miessem\u00e1nnu",
      "geassem\u00e1nnu",
      "suoidnem\u00e1nnu",
      "borgem\u00e1nnu",
      "\u010dak\u010dam\u00e1nnu",
      "golggotm\u00e1nnu",
      "sk\u00e1bmam\u00e1nnu",
      "juovlam\u00e1nnu"
    ],
    "SHORTDAY": [
      "sotn",
      "vuos",
      "ma\u014b",
      "gask",
      "duor",
      "bear",
      "l\u00e1v"
    ],
    "SHORTMONTH": [
      "o\u0111\u0111j",
      "guov",
      "njuk",
      "cuo",
      "mies",
      "geas",
      "suoi",
      "borg",
      "\u010dak\u010d",
      "golg",
      "sk\u00e1b",
      "juov"
    ],
    "fullDate": "y MMMM d, EEEE",
    "longDate": "y MMMM d",
    "medium": "y MMM d HH:mm:ss",
    "mediumDate": "y MMM d",
    "mediumTime": "HH:mm:ss",
    "short": "y-MM-dd HH:mm",
    "shortDate": "y-MM-dd",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "kr",
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
        "negPre": "-",
        "negSuf": "\u00a0\u00a4",
        "posPre": "",
        "posSuf": "\u00a0\u00a4"
      }
    ]
  },
  "id": "se",
  "pluralCat": function (n, opt_precision) {  var i = n | 0;  var vf = GET_VF(n, opt_precision);  if (i == 1 && vf.v == 0) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);