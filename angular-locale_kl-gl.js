'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "ulloqeqqata-tungaa",
      "ulloqeqqata-kingorna"
    ],
    "DAY": [
      "sabaat",
      "ataasinngorneq",
      "marlunngorneq",
      "pingasunngorneq",
      "sisamanngorneq",
      "tallimanngorneq",
      "arfininngorneq"
    ],
    "MONTH": [
      "januari",
      "februari",
      "martsi",
      "aprili",
      "maji",
      "juni",
      "juli",
      "augustusi",
      "septemberi",
      "oktoberi",
      "novemberi",
      "decemberi"
    ],
    "SHORTDAY": [
      "sab",
      "ata",
      "mar",
      "pin",
      "sis",
      "tal",
      "arf"
    ],
    "SHORTMONTH": [
      "jan",
      "feb",
      "mar",
      "apr",
      "maj",
      "jun",
      "jul",
      "aug",
      "sep",
      "okt",
      "nov",
      "dec"
    ],
    "fullDate": "EEEE dd MMMM y",
    "longDate": "dd MMMM y",
    "medium": "MMM dd, y h:mm:ss a",
    "mediumDate": "MMM dd, y",
    "mediumTime": "h:mm:ss a",
    "short": "yyyy-MM-dd h:mm a",
    "shortDate": "yyyy-MM-dd",
    "shortTime": "h:mm a"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "kr",
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
        "negPre": "\u00a4-",
        "negSuf": "",
        "posPre": "\u00a4",
        "posSuf": ""
      }
    ]
  },
  "id": "kl-gl",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);