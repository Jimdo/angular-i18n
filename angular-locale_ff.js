'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "subaka",
      "kikii\u0257e"
    ],
    "DAY": [
      "dewo",
      "aa\u0253nde",
      "mawbaare",
      "njeslaare",
      "naasaande",
      "mawnde",
      "hoore-biir"
    ],
    "MONTH": [
      "siilo",
      "colte",
      "mbooy",
      "see\u0257to",
      "duujal",
      "korse",
      "morso",
      "juko",
      "siilto",
      "yarkomaa",
      "jolal",
      "bowte"
    ],
    "SHORTDAY": [
      "dew",
      "aa\u0253",
      "maw",
      "nje",
      "naa",
      "mwd",
      "hbi"
    ],
    "SHORTMONTH": [
      "sii",
      "col",
      "mbo",
      "see",
      "duu",
      "kor",
      "mor",
      "juk",
      "slt",
      "yar",
      "jol",
      "bow"
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
    "DECIMAL_SEP": ",",
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
        "negSuf": "\u00a0\u00a4",
        "posPre": "",
        "posSuf": "\u00a0\u00a4"
      }
    ]
  },
  "id": "ff",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);