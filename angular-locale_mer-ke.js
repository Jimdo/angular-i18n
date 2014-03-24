'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "R\u0168",
      "\u0168G"
    ],
    "DAY": [
      "Kiumia",
      "Muramuko",
      "Wairi",
      "Wethatu",
      "Wena",
      "Wetano",
      "Jumamosi"
    ],
    "MONTH": [
      "Januar\u0129",
      "Feburuar\u0129",
      "Machi",
      "\u0128pur\u0169",
      "M\u0129\u0129",
      "Njuni",
      "Njura\u0129",
      "Agasti",
      "Septemba",
      "Okt\u0169ba",
      "Novemba",
      "Dicemba"
    ],
    "SHORTDAY": [
      "KIU",
      "MRA",
      "WAI",
      "WET",
      "WEN",
      "WTN",
      "JUM"
    ],
    "SHORTMONTH": [
      "JAN",
      "FEB",
      "MAC",
      "\u0128PU",
      "M\u0128\u0128",
      "NJU",
      "NJR",
      "AGA",
      "SPT",
      "OKT",
      "NOV",
      "DEC"
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
    "CURRENCY_SYM": "Ksh",
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
  "id": "mer-ke",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);