'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "saaku",
      "carra"
    ],
    "DAY": [
      "Naba Sambat",
      "Sani",
      "Salus",
      "Rabuq",
      "Camus",
      "Jumqata",
      "Qunxa Sambat"
    ],
    "MONTH": [
      "Qunxa Garablu",
      "Kudo",
      "Ciggilta Kudo",
      "Agda Baxis",
      "Caxah Alsa",
      "Qasa Dirri",
      "Qado Dirri",
      "Liiqen",
      "Waysu",
      "Diteli",
      "Ximoli",
      "Kaxxa Garablu"
    ],
    "SHORTDAY": [
      "Nab",
      "San",
      "Sal",
      "Rab",
      "Cam",
      "Jum",
      "Qun"
    ],
    "SHORTMONTH": [
      "Qun",
      "Nah",
      "Cig",
      "Agd",
      "Cax",
      "Qas",
      "Qad",
      "Leq",
      "Way",
      "Dit",
      "Xim",
      "Kax"
    ],
    "fullDate": "EEEE, MMMM dd, y",
    "longDate": "dd MMMM y",
    "medium": "dd-MMM-y h:mm:ss a",
    "mediumDate": "dd-MMM-y",
    "mediumTime": "h:mm:ss a",
    "short": "dd/MM/yy h:mm a",
    "shortDate": "dd/MM/yy",
    "shortTime": "h:mm a"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "Nfk",
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
  "id": "ssy",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);