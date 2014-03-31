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
      "de.",
      "du."
    ],
    "DAY": [
      "vas\u00e1rnap",
      "h\u00e9tf\u0151",
      "kedd",
      "szerda",
      "cs\u00fct\u00f6rt\u00f6k",
      "p\u00e9ntek",
      "szombat"
    ],
    "MONTH": [
      "janu\u00e1r",
      "febru\u00e1r",
      "m\u00e1rcius",
      "\u00e1prilis",
      "m\u00e1jus",
      "j\u00fanius",
      "j\u00falius",
      "augusztus",
      "szeptember",
      "okt\u00f3ber",
      "november",
      "december"
    ],
    "SHORTDAY": [
      "V",
      "H",
      "K",
      "Sze",
      "Cs",
      "P",
      "Szo"
    ],
    "SHORTMONTH": [
      "jan.",
      "febr.",
      "m\u00e1rc.",
      "\u00e1pr.",
      "m\u00e1j.",
      "j\u00fan.",
      "j\u00fal.",
      "aug.",
      "szept.",
      "okt.",
      "nov.",
      "dec."
    ],
    "fullDate": "y. MMMM d., EEEE",
    "longDate": "y. MMMM d.",
    "medium": "y MMM d H:mm:ss",
    "mediumDate": "y MMM d",
    "mediumTime": "H:mm:ss",
    "short": "y. MM. dd. H:mm",
    "shortDate": "y. MM. dd.",
    "shortTime": "H:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "Ft",
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
  "id": "hu-hu",
  "pluralCat": function (n, opt_precision) {  if (n == 1) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);