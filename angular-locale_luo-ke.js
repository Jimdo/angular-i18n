'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "OD",
      "OT"
    ],
    "DAY": [
      "Jumapil",
      "Wuok Tich",
      "Tich Ariyo",
      "Tich Adek",
      "Tich Ang'wen",
      "Tich Abich",
      "Ngeso"
    ],
    "MONTH": [
      "Dwe mar Achiel",
      "Dwe mar Ariyo",
      "Dwe mar Adek",
      "Dwe mar Ang'wen",
      "Dwe mar Abich",
      "Dwe mar Auchiel",
      "Dwe mar Abiriyo",
      "Dwe mar Aboro",
      "Dwe mar Ochiko",
      "Dwe mar Apar",
      "Dwe mar gi achiel",
      "Dwe mar Apar gi ariyo"
    ],
    "SHORTDAY": [
      "JMP",
      "WUT",
      "TAR",
      "TAD",
      "TAN",
      "TAB",
      "NGS"
    ],
    "SHORTMONTH": [
      "DAC",
      "DAR",
      "DAD",
      "DAN",
      "DAH",
      "DAU",
      "DAO",
      "DAB",
      "DOC",
      "DAP",
      "DGI",
      "DAG"
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
        "negPre": "-",
        "negSuf": "\u00a4",
        "posPre": "",
        "posSuf": "\u00a4"
      }
    ]
  },
  "id": "luo-ke",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);