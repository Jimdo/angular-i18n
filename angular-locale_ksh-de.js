'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "Uhr des vormittags",
      "Uhr des nachmittags"
    ],
    "DAY": [
      "Sunndaach",
      "Moondaach",
      "Dinnsdaach",
      "Metwoch",
      "Dunnersdaach",
      "Friidaach",
      "Samsdaach"
    ],
    "MONTH": [
      "Jannewa",
      "F\u00e4browa",
      "M\u00e4\u00e4z",
      "Aprell",
      "M\u00e4i",
      "Juuni",
      "Juuli",
      "Oujo\u00df",
      "Sept\u00e4mber",
      "Oktoober",
      "Nov\u00e4mber",
      "Dez\u00e4mber"
    ],
    "SHORTDAY": [
      "Su.",
      "Mo.",
      "Di.",
      "Me.",
      "Du.",
      "Fr.",
      "Sa."
    ],
    "SHORTMONTH": [
      "Jan.",
      "F\u00e4b.",
      "Mar.",
      "Apr.",
      "M\u00e4i",
      "Jun.",
      "Jul.",
      "Oug.",
      "S\u00e4p.",
      "Okt.",
      "Nov.",
      "Dez."
    ],
    "fullDate": "EEEE, 'd\u00e4' d. MMMM y",
    "longDate": "d. MMMM y",
    "medium": "d. MMM y HH:mm:ss",
    "mediumDate": "d. MMM y",
    "mediumTime": "HH:mm:ss",
    "short": "d. M. yyyy HH:mm",
    "shortDate": "d. M. yyyy",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "\u20ac",
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
  "id": "ksh-de",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);