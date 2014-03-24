'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "am",
      "sm"
    ],
    "DAY": [
      "dumengia",
      "glindesdi",
      "mardi",
      "mesemna",
      "gievgia",
      "venderdi",
      "sonda"
    ],
    "MONTH": [
      "schaner",
      "favrer",
      "mars",
      "avrigl",
      "matg",
      "zercladur",
      "fanadur",
      "avust",
      "settember",
      "october",
      "november",
      "december"
    ],
    "SHORTDAY": [
      "du",
      "gli",
      "ma",
      "me",
      "gie",
      "ve",
      "so"
    ],
    "SHORTMONTH": [
      "schan.",
      "favr.",
      "mars",
      "avr.",
      "matg",
      "zercl.",
      "fan.",
      "avust",
      "sett.",
      "oct.",
      "nov.",
      "dec."
    ],
    "fullDate": "EEEE, 'ils' d 'da' MMMM y",
    "longDate": "d 'da' MMMM y",
    "medium": "dd-MM-yyyy HH:mm:ss",
    "mediumDate": "dd-MM-yyyy",
    "mediumTime": "HH:mm:ss",
    "short": "dd-MM-yy HH:mm",
    "shortDate": "dd-MM-yy",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "CHF",
    "DECIMAL_SEP": ".",
    "GROUP_SEP": "\u2019",
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
  "id": "rm-ch",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);