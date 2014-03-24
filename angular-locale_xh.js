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
      "Cawe",
      "Mvulo",
      "Lwesibini",
      "Lwesithathu",
      "Lwesine",
      "Lwesihlanu",
      "Mgqibelo"
    ],
    "MONTH": [
      "Janyuwari",
      "Februwari",
      "Matshi",
      "Epreli",
      "Meyi",
      "Juni",
      "Julayi",
      "Agasti",
      "Septemba",
      "Okthoba",
      "Novemba",
      "Disemba"
    ],
    "SHORTDAY": [
      "Caw",
      "Mvu",
      "Bin",
      "Tha",
      "Sin",
      "Hla",
      "Mgq"
    ],
    "SHORTMONTH": [
      "Jan",
      "Feb",
      "Mat",
      "Epr",
      "Mey",
      "Jun",
      "Jul",
      "Aga",
      "Sep",
      "Okt",
      "Nov",
      "Dis"
    ],
    "fullDate": "EEEE, y MMMM dd",
    "longDate": "y MMMM d",
    "medium": "y MMM d HH:mm:ss",
    "mediumDate": "y MMM d",
    "mediumTime": "HH:mm:ss",
    "short": "yyyy-MM-dd HH:mm",
    "shortDate": "yyyy-MM-dd",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "R",
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
        "negPre": "\u00a4-",
        "negSuf": "",
        "posPre": "\u00a4",
        "posSuf": ""
      }
    ]
  },
  "id": "xh",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);