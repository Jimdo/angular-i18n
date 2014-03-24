'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "\u0628.\u0646",
      "\u062f.\u0646"
    ],
    "DAY": [
      "\u06cc\u06d5\u06a9\u0634\u06d5\u0645\u0645\u06d5",
      "\u062f\u0648\u0648\u0634\u06d5\u0645\u0645\u06d5",
      "\u0633\u06ce\u0634\u06d5\u0645\u0645\u06d5",
      "\u0686\u0648\u0627\u0631\u0634\u06d5\u0645\u0645\u06d5",
      "\u067e\u06ce\u0646\u062c\u0634\u06d5\u0645\u0645\u06d5",
      "\u06be\u06d5\u06cc\u0646\u06cc",
      "\u0634\u06d5\u0645\u0645\u06d5"
    ],
    "MONTH": [
      "\u06a9\u0627\u0646\u0648\u0648\u0646\u06cc \u062f\u0648\u0648\u06d5\u0645",
      "\u0634\u0648\u0628\u0627\u062a",
      "\u0626\u0627\u0632\u0627\u0631",
      "\u0646\u06cc\u0633\u0627\u0646",
      "\u0626\u0627\u06cc\u0627\u0631",
      "\u062d\u0648\u0632\u06d5\u06cc\u0631\u0627\u0646",
      "\u062a\u06d5\u0645\u0648\u0648\u0632",
      "\u0626\u0627\u0628",
      "\u0626\u06d5\u06cc\u0644\u0648\u0648\u0644",
      "\u062a\u0634\u0631\u06cc\u0646\u06cc \u06cc\u06d5\u06a9\u06d5\u0645",
      "\u062a\u0634\u0631\u06cc\u0646\u06cc \u062f\u0648\u0648\u06d5\u0645",
      "\u06a9\u0627\u0646\u0648\u0646\u06cc \u06cc\u06d5\u06a9\u06d5\u0645"
    ],
    "SHORTDAY": [
      "\u06cc\u06d5\u06a9\u0634\u06d5\u0645\u0645\u06d5",
      "\u062f\u0648\u0648\u0634\u06d5\u0645\u0645\u06d5",
      "\u0633\u06ce\u0634\u06d5\u0645\u0645\u06d5",
      "\u0686\u0648\u0627\u0631\u0634\u06d5\u0645\u0645\u06d5",
      "\u067e\u06ce\u0646\u062c\u0634\u06d5\u0645\u0645\u06d5",
      "\u06be\u06d5\u06cc\u0646\u06cc",
      "\u0634\u06d5\u0645\u0645\u06d5"
    ],
    "SHORTMONTH": [
      "\u06a9\u0627\u0646\u0648\u0648\u0646\u06cc \u062f\u0648\u0648\u06d5\u0645",
      "\u0634\u0648\u0628\u0627\u062a",
      "\u0626\u0627\u0632\u0627\u0631",
      "\u0646\u06cc\u0633\u0627\u0646",
      "\u0626\u0627\u06cc\u0627\u0631",
      "\u062d\u0648\u0632\u06d5\u06cc\u0631\u0627\u0646",
      "\u062a\u06d5\u0645\u0648\u0648\u0632",
      "\u0626\u0627\u0628",
      "\u0626\u06d5\u06cc\u0644\u0648\u0648\u0644",
      "\u062a\u0634\u0631\u06cc\u0646\u06cc \u06cc\u06d5\u06a9\u06d5\u0645",
      "\u062a\u0634\u0631\u06cc\u0646\u06cc \u062f\u0648\u0648\u06d5\u0645",
      "\u06a9\u0627\u0646\u0648\u0646\u06cc \u06cc\u06d5\u06a9\u06d5\u0645"
    ],
    "fullDate": "EEEE, y MMMM dd",
    "longDate": "d\u06cc MMMM\u06cc y",
    "medium": "y MMM d HH:mm:ss",
    "mediumDate": "y MMM d",
    "mediumTime": "HH:mm:ss",
    "short": "yyyy-MM-dd HH:mm",
    "shortDate": "yyyy-MM-dd",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "din",
    "DECIMAL_SEP": "\u066b",
    "GROUP_SEP": "\u066c",
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
  "id": "ckb",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);