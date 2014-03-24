'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "A.M.",
      "P.M."
    ],
    "DAY": [
      "Mb\u1ecds\u1ecb \u1ee4ka",
      "M\u1ecdnde",
      "Tiuzdee",
      "Wenezdee",
      "T\u1ecd\u1ecdzdee",
      "Fra\u1ecbdee",
      "Sat\u1ecddee"
    ],
    "MONTH": [
      "Jen\u1ee5war\u1ecb",
      "Febr\u1ee5war\u1ecb",
      "Maach\u1ecb",
      "Eprel",
      "Mee",
      "Juun",
      "Jula\u1ecb",
      "\u1eccg\u1ecd\u1ecdst",
      "Septemba",
      "\u1eccktoba",
      "Novemba",
      "Disemba"
    ],
    "SHORTDAY": [
      "\u1ee4ka",
      "M\u1ecdn",
      "Tiu",
      "Wen",
      "T\u1ecd\u1ecd",
      "Fra\u1ecb",
      "Sat"
    ],
    "SHORTMONTH": [
      "Jen",
      "Feb",
      "Maa",
      "Epr",
      "Mee",
      "Juu",
      "Jul",
      "\u1eccg\u1ecd",
      "Sep",
      "\u1ecckt",
      "Nov",
      "Dis"
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
    "CURRENCY_SYM": "\u20a6",
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
  "id": "ig",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);