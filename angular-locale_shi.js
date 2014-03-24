'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "tifawt",
      "tadgg\u02b7at"
    ],
    "DAY": [
      "asamas",
      "aynas",
      "asinas",
      "ak\u1e5bas",
      "akwas",
      "asimwas",
      "asi\u1e0dyas"
    ],
    "MONTH": [
      "innayr",
      "b\u1e5bay\u1e5b",
      "ma\u1e5b\u1e63",
      "ibrir",
      "mayyu",
      "yunyu",
      "yulyuz",
      "\u0263uct",
      "cutanbir",
      "ktubr",
      "nuwanbir",
      "dujanbir"
    ],
    "SHORTDAY": [
      "asa",
      "ayn",
      "asi",
      "ak\u1e5b",
      "akw",
      "asim",
      "asi\u1e0d"
    ],
    "SHORTMONTH": [
      "inn",
      "b\u1e5ba",
      "ma\u1e5b",
      "ibr",
      "may",
      "yun",
      "yul",
      "\u0263uc",
      "cut",
      "ktu",
      "nuw",
      "duj"
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
        "negSuf": "\u00a4",
        "posPre": "",
        "posSuf": "\u00a4"
      }
    ]
  },
  "id": "shi",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);