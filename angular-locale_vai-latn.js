'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "AM",
      "PM"
    ],
    "DAY": [
      "lahadi",
      "t\u025b\u025bn\u025b\u025b",
      "talata",
      "alaba",
      "aimisa",
      "aijima",
      "si\u0253iti"
    ],
    "MONTH": [
      "luukao kem\u00e3",
      "\u0253anda\u0253u",
      "v\u0254\u0254",
      "fulu",
      "goo",
      "6",
      "7",
      "k\u0254nde",
      "saah",
      "galo",
      "kenpkato \u0253olol\u0254",
      "luukao l\u0254ma"
    ],
    "SHORTDAY": [
      "lahadi",
      "t\u025b\u025bn\u025b\u025b",
      "talata",
      "alaba",
      "aimisa",
      "aijima",
      "si\u0253iti"
    ],
    "SHORTMONTH": [
      "luukao kem\u00e3",
      "\u0253anda\u0253u",
      "v\u0254\u0254",
      "fulu",
      "goo",
      "6",
      "7",
      "k\u0254nde",
      "saah",
      "galo",
      "kenpkato \u0253olol\u0254",
      "luukao l\u0254ma"
    ],
    "fullDate": "EEEE, d MMMM y",
    "longDate": "d MMMM y",
    "medium": "d MMM y h:mm:ss a",
    "mediumDate": "d MMM y",
    "mediumTime": "h:mm:ss a",
    "short": "dd/MM/yyyy h:mm a",
    "shortDate": "dd/MM/yyyy",
    "shortTime": "h:mm a"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "\u20ac",
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
  "id": "vai-latn",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);