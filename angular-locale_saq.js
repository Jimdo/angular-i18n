'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "Tesiran",
      "Teipa"
    ],
    "DAY": [
      "Mderot ee are",
      "Mderot ee kuni",
      "Mderot ee ong'wan",
      "Mderot ee inet",
      "Mderot ee ile",
      "Mderot ee sapa",
      "Mderot ee kwe"
    ],
    "MONTH": [
      "Lapa le obo",
      "Lapa le waare",
      "Lapa le okuni",
      "Lapa le ong'wan",
      "Lapa le imet",
      "Lapa le ile",
      "Lapa le sapa",
      "Lapa le isiet",
      "Lapa le saal",
      "Lapa le tomon",
      "Lapa le tomon obo",
      "Lapa le tomon waare"
    ],
    "SHORTDAY": [
      "Are",
      "Kun",
      "Ong",
      "Ine",
      "Ile",
      "Sap",
      "Kwe"
    ],
    "SHORTMONTH": [
      "Obo",
      "Waa",
      "Oku",
      "Ong",
      "Ime",
      "Ile",
      "Sap",
      "Isi",
      "Saa",
      "Tom",
      "Tob",
      "Tow"
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
  "id": "saq",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);