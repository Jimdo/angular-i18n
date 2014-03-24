'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "idi\u0253a",
      "eby\u00e1mu"
    ],
    "DAY": [
      "\u00e9ti",
      "m\u0254\u0301s\u00fa",
      "kwas\u00fa",
      "muk\u0254\u0301s\u00fa",
      "\u014bgis\u00fa",
      "\u0257\u00f3n\u025bs\u00fa",
      "esa\u0253as\u00fa"
    ],
    "MONTH": [
      "dim\u0254\u0301di",
      "\u014bg\u0254nd\u025b",
      "s\u0254\u014b\u025b",
      "di\u0253\u00e1\u0253\u00e1",
      "emiasele",
      "es\u0254p\u025bs\u0254p\u025b",
      "madi\u0253\u025b\u0301d\u00ed\u0253\u025b\u0301",
      "di\u014bgindi",
      "ny\u025bt\u025bki",
      "may\u00e9s\u025b\u0301",
      "tin\u00edn\u00ed",
      "el\u00e1\u014bg\u025b\u0301"
    ],
    "SHORTDAY": [
      "\u00e9t",
      "m\u0254\u0301s",
      "kwa",
      "muk",
      "\u014bgi",
      "\u0257\u00f3n",
      "esa"
    ],
    "SHORTMONTH": [
      "di",
      "\u014bg\u0254n",
      "s\u0254\u014b",
      "di\u0253",
      "emi",
      "es\u0254",
      "mad",
      "di\u014b",
      "ny\u025bt",
      "may",
      "tin",
      "el\u00e1"
    ],
    "fullDate": "EEEE d MMMM y",
    "longDate": "d MMMM y",
    "medium": "d MMM y HH:mm:ss",
    "mediumDate": "d MMM y",
    "mediumTime": "HH:mm:ss",
    "short": "d/M/yyyy HH:mm",
    "shortDate": "d/M/yyyy",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "FCFA",
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
  "id": "dua",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);