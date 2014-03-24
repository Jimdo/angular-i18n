'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "comme",
      "lilli"
    ],
    "DAY": [
      "Com'yakke",
      "Comlaa\u0257ii",
      "Comzyii\u0257ii",
      "Comkolle",
      "Comkald\u01dd\u0253lii",
      "Comgaisuu",
      "Comzye\u0253suu"
    ],
    "MONTH": [
      "F\u0129i Loo",
      "Cokcwakla\u014bne",
      "Cokcwaklii",
      "F\u0129i Marfoo",
      "Mad\u01dd\u01dduut\u01ddbija\u014b",
      "Mam\u01dd\u014bgw\u00e3afahbii",
      "Mam\u01dd\u014bgw\u00e3alii",
      "Mad\u01ddmbii",
      "F\u0129i D\u01dd\u0253lii",
      "F\u0129i Munda\u014b",
      "F\u0129i Gwahlle",
      "F\u0129i Yuru"
    ],
    "SHORTDAY": [
      "Cya",
      "Cla",
      "Czi",
      "Cko",
      "Cka",
      "Cga",
      "Cze"
    ],
    "SHORTMONTH": [
      "FLO",
      "CLA",
      "CKI",
      "FMF",
      "MAD",
      "MBI",
      "MLI",
      "MAM",
      "FDE",
      "FMU",
      "FGW",
      "FYU"
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
    "CURRENCY_SYM": "FCFA",
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
  "id": "mua-cm",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);