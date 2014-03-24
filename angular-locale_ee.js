'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "\u014bdi",
      "\u0263etr\u0254"
    ],
    "DAY": [
      "k\u0254si\u0256a",
      "dzo\u0256a",
      "bla\u0256a",
      "ku\u0256a",
      "yawo\u0256a",
      "fi\u0256a",
      "memle\u0256a"
    ],
    "MONTH": [
      "dzove",
      "dzodze",
      "tedoxe",
      "af\u0254f\u0129e",
      "dama",
      "masa",
      "siaml\u0254m",
      "deasiamime",
      "any\u0254ny\u0254",
      "kele",
      "ade\u025bmekp\u0254xe",
      "dzome"
    ],
    "SHORTDAY": [
      "k\u0254s",
      "dzo",
      "bla",
      "ku\u0256",
      "yaw",
      "fi\u0256",
      "mem"
    ],
    "SHORTMONTH": [
      "dzv",
      "dzd",
      "ted",
      "af\u0254",
      "dam",
      "mas",
      "sia",
      "dea",
      "any",
      "kel",
      "ade",
      "dzm"
    ],
    "fullDate": "EEEE, d MMMM y",
    "longDate": "d MMMM y",
    "medium": "d MMM y a h:mm:ss",
    "mediumDate": "d MMM y",
    "mediumTime": "a h:mm:ss",
    "short": "dd/MM/yyyy a h:mm",
    "shortDate": "dd/MM/yyyy",
    "shortTime": "a h:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "GHS",
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
  "id": "ee",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);