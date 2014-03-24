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
      "dimans",
      "lindi",
      "mardi",
      "merkredi",
      "zedi",
      "vandredi",
      "samdi"
    ],
    "MONTH": [
      "zanvie",
      "fevriye",
      "mars",
      "avril",
      "me",
      "zin",
      "zilye",
      "out",
      "septam",
      "oktob",
      "novam",
      "desam"
    ],
    "SHORTDAY": [
      "dim",
      "lin",
      "mar",
      "mer",
      "ze",
      "van",
      "sam"
    ],
    "SHORTMONTH": [
      "zan",
      "fev",
      "mar",
      "avr",
      "me",
      "zin",
      "zil",
      "out",
      "sep",
      "okt",
      "nov",
      "des"
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
    "CURRENCY_SYM": "MURs",
    "DECIMAL_SEP": ".",
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
        "negPre": "\u00a4\u00a0-",
        "negSuf": "",
        "posPre": "\u00a4\u00a0",
        "posSuf": ""
      }
    ]
  },
  "id": "mfe-mu",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);