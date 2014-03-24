'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "Zdat azal",
      "\u1e0ceffir aza"
    ],
    "DAY": [
      "Asamas",
      "Aynas",
      "Asinas",
      "Akras",
      "Akwas",
      "Asimwas",
      "Asi\u1e0dyas"
    ],
    "MONTH": [
      "Yennayer",
      "Yebrayer",
      "Mars",
      "Ibrir",
      "Mayyu",
      "Yunyu",
      "Yulyuz",
      "\u0194uct",
      "Cutanbir",
      "K\u1e6duber",
      "Nwanbir",
      "Dujanbir"
    ],
    "SHORTDAY": [
      "Asa",
      "Ayn",
      "Asn",
      "Akr",
      "Akw",
      "Asm",
      "As\u1e0d"
    ],
    "SHORTMONTH": [
      "Yen",
      "Yeb",
      "Mar",
      "Ibr",
      "May",
      "Yun",
      "Yul",
      "\u0194uc",
      "Cut",
      "K\u1e6du",
      "Nwa",
      "Duj"
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
    "CURRENCY_SYM": "dh",
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
  "id": "tzm",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);