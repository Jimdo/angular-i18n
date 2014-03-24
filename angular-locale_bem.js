'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "uluchelo",
      "akasuba"
    ],
    "DAY": [
      "Pa Mulungu",
      "Palichimo",
      "Palichibuli",
      "Palichitatu",
      "Palichine",
      "Palichisano",
      "Pachibelushi"
    ],
    "MONTH": [
      "Januari",
      "Februari",
      "Machi",
      "Epreo",
      "Mei",
      "Juni",
      "Julai",
      "Ogasti",
      "Septemba",
      "Oktoba",
      "Novemba",
      "Disemba"
    ],
    "SHORTDAY": [
      "Pa Mulungu",
      "Palichimo",
      "Palichibuli",
      "Palichitatu",
      "Palichine",
      "Palichisano",
      "Pachibelushi"
    ],
    "SHORTMONTH": [
      "Jan",
      "Feb",
      "Mac",
      "Epr",
      "Mei",
      "Jun",
      "Jul",
      "Oga",
      "Sep",
      "Okt",
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
    "CURRENCY_SYM": "ZMW",
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
  "id": "bem",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);