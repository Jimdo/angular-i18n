'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "AM",
      "PM"
    ],
    "DAY": [
      "S\u0101pate",
      "M\u014dnite",
      "T\u016bsite",
      "Pulelulu",
      "Tu\u02bbapulelulu",
      "Falaite",
      "Tokonaki"
    ],
    "MONTH": [
      "S\u0101nuali",
      "F\u0113pueli",
      "Ma\u02bbasi",
      "\u02bbEpeleli",
      "M\u0113",
      "Sune",
      "Siulai",
      "\u02bbAokosi",
      "Sepitema",
      "\u02bbOkatopa",
      "N\u014dvema",
      "T\u012bsema"
    ],
    "SHORTDAY": [
      "S\u0101p",
      "M\u014dn",
      "T\u016bs",
      "Pul",
      "Tu\u02bba",
      "Fal",
      "Tok"
    ],
    "SHORTMONTH": [
      "S\u0101n",
      "F\u0113p",
      "Ma\u02bba",
      "\u02bbEpe",
      "M\u0113",
      "Sun",
      "Siu",
      "\u02bbAok",
      "Sep",
      "\u02bbOka",
      "N\u014dv",
      "T\u012bs"
    ],
    "fullDate": "EEEE d MMMM y",
    "longDate": "d MMMM y",
    "medium": "d MMM y HH:mm:ss",
    "mediumDate": "d MMM y",
    "mediumTime": "HH:mm:ss",
    "short": "d/M/yy HH:mm",
    "shortDate": "d/M/yy",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "T$",
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
        "negPre": "\u00a4\u00a0-",
        "negSuf": "",
        "posPre": "\u00a4\u00a0",
        "posSuf": ""
      }
    ]
  },
  "id": "to",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);