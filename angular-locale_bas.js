'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "I bik\u025b\u0302gl\u00e0",
      "I \u0253ugaj\u0254p"
    ],
    "DAY": [
      "\u014bgw\u00e0 n\u0254\u0302y",
      "\u014bgw\u00e0 nja\u014bgumba",
      "\u014bgw\u00e0 \u00fbm",
      "\u014bgw\u00e0 \u014bg\u00ea",
      "\u014bgw\u00e0 mb\u0254k",
      "\u014bgw\u00e0 k\u0254\u0254",
      "\u014bgw\u00e0 j\u00f4n"
    ],
    "MONTH": [
      "K\u0254nd\u0254\u014b",
      "M\u00e0c\u025b\u0302l",
      "M\u00e0t\u00f9mb",
      "M\u00e0top",
      "M\u0300puy\u025b",
      "H\u00ecl\u00f2nd\u025b\u0300",
      "Nj\u00e8b\u00e0",
      "H\u00ecka\u014b",
      "D\u00ecp\u0254\u0300s",
      "B\u00ec\u00f2\u00f4m",
      "M\u00e0y\u025bs\u00e8p",
      "L\u00ecbuy li \u0144y\u00e8e"
    ],
    "SHORTDAY": [
      "n\u0254y",
      "nja",
      "uum",
      "\u014bge",
      "mb\u0254",
      "k\u0254\u0254",
      "jon"
    ],
    "SHORTMONTH": [
      "k\u0254n",
      "mac",
      "mat",
      "mto",
      "mpu",
      "hil",
      "nje",
      "hik",
      "dip",
      "bio",
      "may",
      "li\u0253"
    ],
    "fullDate": "EEEE d MMMM y",
    "longDate": "d MMMM y",
    "medium": "d MMM, y HH:mm:ss",
    "mediumDate": "d MMM, y",
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
  "id": "bas",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);