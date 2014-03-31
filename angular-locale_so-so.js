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
      "sn.",
      "gn."
    ],
    "DAY": [
      "Axad",
      "Isniin",
      "Talaado",
      "Arbaco",
      "Khamiis",
      "Jimco",
      "Sabti"
    ],
    "MONTH": [
      "Bisha Koobaad",
      "Bisha Labaad",
      "Bisha Saddexaad",
      "Bisha Afraad",
      "Bisha Shanaad",
      "Bisha Lixaad",
      "Bisha Todobaad",
      "Bisha Sideedaad",
      "Bisha Sagaalaad",
      "Bisha Tobnaad",
      "Bisha Kow iyo Tobnaad",
      "Bisha Laba iyo Tobnaad"
    ],
    "SHORTDAY": [
      "Axd",
      "Isn",
      "Tal",
      "Arb",
      "Kha",
      "Jim",
      "Sab"
    ],
    "SHORTMONTH": [
      "Kob",
      "Lab",
      "Sad",
      "Afr",
      "Sha",
      "Lix",
      "Tod",
      "Sid",
      "Sag",
      "Tob",
      "KIT",
      "LIT"
    ],
    "fullDate": "EEEE, MMMM dd, y",
    "longDate": "dd MMMM y",
    "medium": "dd-MMM-y h:mm:ss a",
    "mediumDate": "dd-MMM-y",
    "mediumTime": "h:mm:ss a",
    "short": "dd/MM/yy h:mm a",
    "shortDate": "dd/MM/yy",
    "shortTime": "h:mm a"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "SOS",
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
  "id": "so-so",
  "pluralCat": function (n, opt_precision) {  var i = n | 0;  var vf = GET_VF(n, opt_precision);  if (i == 1 && vf.v == 0) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);