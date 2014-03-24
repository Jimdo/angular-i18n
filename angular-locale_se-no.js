'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "i\u0111itbeaivet",
      "eahketbeaivet"
    ],
    "DAY": [
      "sotnabeaivi",
      "vuoss\u00e1rga",
      "ma\u014b\u014beb\u00e1rga",
      "gaskavahkku",
      "duorasdat",
      "bearjadat",
      "l\u00e1vvardat"
    ],
    "MONTH": [
      "o\u0111\u0111ajagem\u00e1nnu",
      "guovvam\u00e1nnu",
      "njuk\u010dam\u00e1nnu",
      "cuo\u014bom\u00e1nnu",
      "miessem\u00e1nnu",
      "geassem\u00e1nnu",
      "suoidnem\u00e1nnu",
      "borgem\u00e1nnu",
      "\u010dak\u010dam\u00e1nnu",
      "golggotm\u00e1nnu",
      "sk\u00e1bmam\u00e1nnu",
      "juovlam\u00e1nnu"
    ],
    "SHORTDAY": [
      "sotn",
      "vuos",
      "ma\u014b",
      "gask",
      "duor",
      "bear",
      "l\u00e1v"
    ],
    "SHORTMONTH": [
      "o\u0111\u0111j",
      "guov",
      "njuk",
      "cuo",
      "mies",
      "geas",
      "suoi",
      "borg",
      "\u010dak\u010d",
      "golg",
      "sk\u00e1b",
      "juov"
    ],
    "fullDate": "EEEE, y MMMM dd",
    "longDate": "y MMMM d",
    "medium": "y MMM d HH:mm:ss",
    "mediumDate": "y MMM d",
    "mediumTime": "HH:mm:ss",
    "short": "yyyy-MM-dd HH:mm",
    "shortDate": "yyyy-MM-dd",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "kr",
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
  "id": "se-no",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);