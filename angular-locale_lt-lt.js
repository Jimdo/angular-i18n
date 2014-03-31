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
      "prie\u0161piet",
      "popiet"
    ],
    "DAY": [
      "sekmadienis",
      "pirmadienis",
      "antradienis",
      "tre\u010diadienis",
      "ketvirtadienis",
      "penktadienis",
      "\u0161e\u0161tadienis"
    ],
    "MONTH": [
      "sausis",
      "vasaris",
      "kovas",
      "balandis",
      "gegu\u017e\u0117",
      "bir\u017eelis",
      "liepa",
      "rugpj\u016btis",
      "rugs\u0117jis",
      "spalis",
      "lapkritis",
      "gruodis"
    ],
    "SHORTDAY": [
      "sk",
      "pr",
      "an",
      "tr",
      "kt",
      "pn",
      "\u0161t"
    ],
    "SHORTMONTH": [
      "saus.",
      "vas.",
      "kov.",
      "bal.",
      "geg.",
      "bir\u017e.",
      "liep.",
      "rugp.",
      "rugs.",
      "spal.",
      "lapkr.",
      "gruod."
    ],
    "fullDate": "y 'm'. MMMM d 'd'., EEEE",
    "longDate": "y 'm'. MMMM d 'd'.",
    "medium": "y MMM d HH:mm:ss",
    "mediumDate": "y MMM d",
    "mediumTime": "HH:mm:ss",
    "short": "y-MM-dd HH:mm",
    "shortDate": "y-MM-dd",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "Lt",
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
  "id": "lt-lt",
  "pluralCat": function (n, opt_precision) {  var vf = GET_VF(n, opt_precision);  if (n % 10 == 1 && (n % 100 < 11 || n % 100 > 19)) {    return PLURAL_CATEGORY.ONE;  }  if (n % 10 >= 2 && n % 10 <= 9 && (n % 100 < 11 || n % 100 > 19)) {    return PLURAL_CATEGORY.FEW;  }  if (vf.f != 0) {    return PLURAL_CATEGORY.MANY;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);