'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "a.",
      "p."
    ],
    "DAY": [
      "domenie",
      "lunis",
      "martars",
      "miercus",
      "joibe",
      "vinars",
      "sabide"
    ],
    "MONTH": [
      "Zen\u00e2r",
      "Fevr\u00e2r",
      "Mar\u00e7",
      "Avr\u00eel",
      "Mai",
      "Jugn",
      "Lui",
      "Avost",
      "Setembar",
      "Otubar",
      "Novembar",
      "Dicembar"
    ],
    "SHORTDAY": [
      "dom",
      "lun",
      "mar",
      "mie",
      "joi",
      "vin",
      "sab"
    ],
    "SHORTMONTH": [
      "Zen",
      "Fev",
      "Mar",
      "Avr",
      "Mai",
      "Jug",
      "Lui",
      "Avo",
      "Set",
      "Otu",
      "Nov",
      "Dic"
    ],
    "fullDate": "EEEE d 'di' MMMM 'dal' y",
    "longDate": "d 'di' MMMM 'dal' y",
    "medium": "dd/MM/yyyy HH:mm:ss",
    "mediumDate": "dd/MM/yyyy",
    "mediumTime": "HH:mm:ss",
    "short": "dd/MM/yy HH:mm",
    "shortDate": "dd/MM/yy",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "\u20ac",
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
        "negPre": "\u00a4\u00a0-",
        "negSuf": "",
        "posPre": "\u00a4\u00a0",
        "posSuf": ""
      }
    ]
  },
  "id": "fur",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);