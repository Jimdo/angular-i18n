'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "n tufat",
      "n tmeddit"
    ],
    "DAY": [
      "Yanass",
      "Sanass",
      "Kra\u1e0dass",
      "Ku\u1e93ass",
      "Samass",
      "S\u1e0disass",
      "Sayass"
    ],
    "MONTH": [
      "Yennayer",
      "Fu\u1e5bar",
      "Me\u0263res",
      "Yebrir",
      "Mayyu",
      "Yunyu",
      "Yulyu",
      "\u0194uct",
      "Ctembe\u1e5b",
      "Tube\u1e5b",
      "Nunembe\u1e5b",
      "Du\u01e7embe\u1e5b"
    ],
    "SHORTDAY": [
      "Yan",
      "San",
      "Kra\u1e0d",
      "Ku\u1e93",
      "Sam",
      "S\u1e0dis",
      "Say"
    ],
    "SHORTMONTH": [
      "Yen",
      "Fur",
      "Me\u0263",
      "Yeb",
      "May",
      "Yun",
      "Yul",
      "\u0194uc",
      "Cte",
      "Tub",
      "Nun",
      "Du\u01e7"
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
    "CURRENCY_SYM": "din",
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
  "id": "kab-dz",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);