'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "AN",
      "EW"
    ],
    "DAY": [
      "Kwesida",
      "Dwowda",
      "Benada",
      "Wukuda",
      "Yawda",
      "Fida",
      "Memeneda"
    ],
    "MONTH": [
      "Sanda-\u0186p\u025bp\u0254n",
      "Kwakwar-\u0186gyefuo",
      "Eb\u0254w-\u0186benem",
      "Eb\u0254bira-Oforisuo",
      "Esusow Aketseaba-K\u0254t\u0254nimba",
      "Obirade-Ay\u025bwohomumu",
      "Ay\u025bwoho-Kitawonsa",
      "Difuu-\u0186sandaa",
      "Fankwa-\u0190b\u0254",
      "\u0186b\u025bs\u025b-Ahinime",
      "\u0186ber\u025bf\u025bw-Obubuo",
      "Mumu-\u0186p\u025bnimba"
    ],
    "SHORTDAY": [
      "Kwe",
      "Dwo",
      "Ben",
      "Wuk",
      "Yaw",
      "Fia",
      "Mem"
    ],
    "SHORTMONTH": [
      "S-\u0186",
      "K-\u0186",
      "E-\u0186",
      "E-O",
      "E-K",
      "O-A",
      "A-K",
      "D-\u0186",
      "F-\u0190",
      "\u0186-A",
      "\u0186-O",
      "M-\u0186"
    ],
    "fullDate": "EEEE, y MMMM dd",
    "longDate": "y MMMM d",
    "medium": "y MMM d HH:mm:ss",
    "mediumDate": "y MMM d",
    "mediumTime": "HH:mm:ss",
    "short": "yy/MM/dd HH:mm",
    "shortDate": "yy/MM/dd",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "GHS",
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
  "id": "ak-gh",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);