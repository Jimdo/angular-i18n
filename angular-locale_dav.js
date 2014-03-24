'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "Luma lwa K",
      "luma lwa p"
    ],
    "DAY": [
      "Ituku ja jumwa",
      "Kuramuka jimweri",
      "Kuramuka kawi",
      "Kuramuka kadadu",
      "Kuramuka kana",
      "Kuramuka kasanu",
      "Kifula nguwo"
    ],
    "MONTH": [
      "Mori ghwa imbiri",
      "Mori ghwa kawi",
      "Mori ghwa kadadu",
      "Mori ghwa kana",
      "Mori ghwa kasanu",
      "Mori ghwa karandadu",
      "Mori ghwa mfungade",
      "Mori ghwa wunyanya",
      "Mori ghwa ikenda",
      "Mori ghwa ikumi",
      "Mori ghwa ikumi na imweri",
      "Mori ghwa ikumi na iwi"
    ],
    "SHORTDAY": [
      "Jum",
      "Jim",
      "Kaw",
      "Kad",
      "Kan",
      "Kas",
      "Ngu"
    ],
    "SHORTMONTH": [
      "Imb",
      "Kaw",
      "Kad",
      "Kan",
      "Kas",
      "Kar",
      "Mfu",
      "Wun",
      "Ike",
      "Iku",
      "Imw",
      "Iwi"
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
  "id": "dav",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);