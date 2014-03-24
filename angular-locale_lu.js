'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "Dinda",
      "Dilolo"
    ],
    "DAY": [
      "Lumingu",
      "Nkodya",
      "Nd\u00e0ay\u00e0",
      "Ndang\u00f9",
      "Nj\u00f2wa",
      "Ng\u00f2vya",
      "Lubingu"
    ],
    "MONTH": [
      "Ciongo",
      "L\u00f9ishi",
      "Lus\u00f2lo",
      "M\u00f9uy\u00e0",
      "Lum\u00f9ng\u00f9l\u00f9",
      "Lufuimi",
      "Kab\u00e0l\u00e0sh\u00ecp\u00f9",
      "L\u00f9sh\u00eck\u00e0",
      "Lutongolo",
      "Lung\u00f9di",
      "Kasw\u00e8k\u00e8s\u00e8",
      "Cisw\u00e0"
    ],
    "SHORTDAY": [
      "Lum",
      "Nko",
      "Ndy",
      "Ndg",
      "Njw",
      "Ngv",
      "Lub"
    ],
    "SHORTMONTH": [
      "Cio",
      "Lui",
      "Lus",
      "Muu",
      "Lum",
      "Luf",
      "Kab",
      "Lush",
      "Lut",
      "Lun",
      "Kas",
      "Cis"
    ],
    "fullDate": "EEEE d MMMM y",
    "longDate": "d MMMM y",
    "medium": "d MMM y HH:mm:ss",
    "mediumDate": "d MMM y",
    "mediumTime": "HH:mm:ss",
    "short": "d/M/yyyy HH:mm",
    "shortDate": "d/M/yyyy",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "FrCD",
    "DECIMAL_SEP": ",",
    "GROUP_SEP": ".",
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
  "id": "lu",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);