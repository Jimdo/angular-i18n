'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "ND",
      "LK"
    ],
    "DAY": [
      "Bikua-\u00f4ko",
      "B\u00efkua-\u00fbse",
      "B\u00efkua-pt\u00e2",
      "B\u00efkua-us\u00ef\u00f6",
      "B\u00efkua-ok\u00fc",
      "L\u00e2p\u00f4s\u00f6",
      "L\u00e2yenga"
    ],
    "MONTH": [
      "Nyenye",
      "Fulund\u00efgi",
      "Mb\u00e4ng\u00fc",
      "Ngub\u00f9e",
      "B\u00eal\u00e4w\u00fc",
      "F\u00f6ndo",
      "Lengua",
      "K\u00fck\u00fcr\u00fc",
      "Mvuka",
      "Ngberere",
      "Nab\u00e4nd\u00fcru",
      "Kakauka"
    ],
    "SHORTDAY": [
      "Bk1",
      "Bk2",
      "Bk3",
      "Bk4",
      "Bk5",
      "L\u00e2p",
      "L\u00e2y"
    ],
    "SHORTMONTH": [
      "Nye",
      "Ful",
      "Mb\u00e4",
      "Ngu",
      "B\u00eal",
      "F\u00f6n",
      "Len",
      "K\u00fck",
      "Mvu",
      "Ngb",
      "Nab",
      "Kak"
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
  "id": "sg-cf",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);