'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "Adduha",
      "Aluula"
    ],
    "DAY": [
      "Alhadi",
      "Atinni",
      "Atalaata",
      "Alarba",
      "Alhamiisa",
      "Alzuma",
      "Asibti"
    ],
    "MONTH": [
      "\u017danwiye",
      "Feewiriye",
      "Marsi",
      "Awiril",
      "Me",
      "\u017duwe\u014b",
      "\u017duyye",
      "Ut",
      "Sektanbur",
      "Oktoobur",
      "Noowanbur",
      "Deesanbur"
    ],
    "SHORTDAY": [
      "Alh",
      "Ati",
      "Ata",
      "Ala",
      "Alm",
      "Alz",
      "Asi"
    ],
    "SHORTMONTH": [
      "\u017dan",
      "Fee",
      "Mar",
      "Awi",
      "Me",
      "\u017duw",
      "\u017duy",
      "Ut",
      "Sek",
      "Okt",
      "Noo",
      "Dee"
    ],
    "fullDate": "EEEE d MMMM y",
    "longDate": "d MMMM y",
    "medium": "d MMM, y HH:mm:ss",
    "mediumDate": "d MMM, y",
    "mediumTime": "HH:mm:ss",
    "short": "d/M/yyyy HH:mm",
    "shortDate": "d/M/yyyy",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "CFA",
    "DECIMAL_SEP": ".",
    "GROUP_SEP": "\u00a0",
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
  "id": "ses",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);