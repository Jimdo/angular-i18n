'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "am",
      "pm"
    ],
    "DAY": [
      "dumingu",
      "sigunda-fera",
      "tersa-fera",
      "kuarta-fera",
      "kinta-fera",
      "sesta-fera",
      "sabadu"
    ],
    "MONTH": [
      "Janeru",
      "Fevereru",
      "Marsu",
      "Abril",
      "Maiu",
      "Junhu",
      "Julhu",
      "Agostu",
      "Setenbru",
      "Otubru",
      "Nuvenbru",
      "Dizenbru"
    ],
    "SHORTDAY": [
      "dum",
      "sig",
      "ter",
      "kua",
      "kin",
      "ses",
      "sab"
    ],
    "SHORTMONTH": [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Otu",
      "Nuv",
      "Diz"
    ],
    "fullDate": "EEEE, d 'di' MMMM 'di' y",
    "longDate": "d 'di' MMMM 'di' y",
    "medium": "d 'di' MMM 'di' y HH:mm:ss",
    "mediumDate": "d 'di' MMM 'di' y",
    "mediumTime": "HH:mm:ss",
    "short": "d/M/yyyy HH:mm",
    "shortDate": "d/M/yyyy",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "CVE",
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
  "id": "kea-cv",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);