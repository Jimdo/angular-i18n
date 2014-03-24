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
      "Ku cyumweru",
      "Kuwa mbere",
      "Kuwa kabiri",
      "Kuwa gatatu",
      "Kuwa kane",
      "Kuwa gatanu",
      "Kuwa gatandatu"
    ],
    "MONTH": [
      "Mutarama",
      "Gashyantare",
      "Werurwe",
      "Mata",
      "Gicuransi",
      "Kamena",
      "Nyakanga",
      "Kanama",
      "Nzeli",
      "Ukwakira",
      "Ugushyingo",
      "Ukuboza"
    ],
    "SHORTDAY": [
      "cyu.",
      "mbe.",
      "kab.",
      "gtu.",
      "kan.",
      "gnu.",
      "gnd."
    ],
    "SHORTMONTH": [
      "mut.",
      "gas.",
      "wer.",
      "mat.",
      "gic.",
      "kam.",
      "nya.",
      "kan.",
      "nze.",
      "ukw.",
      "ugu.",
      "uku."
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
    "CURRENCY_SYM": "RF",
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
  "id": "rw",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);