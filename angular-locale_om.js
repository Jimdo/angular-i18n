'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "WD",
      "WB"
    ],
    "DAY": [
      "Dilbata",
      "Wiixata",
      "Qibxata",
      "Roobii",
      "Kamiisa",
      "Jimaata",
      "Sanbata"
    ],
    "MONTH": [
      "Amajjii",
      "Guraandhala",
      "Bitooteessa",
      "Elba",
      "Caamsa",
      "Waxabajjii",
      "Adooleessa",
      "Hagayya",
      "Fuulbana",
      "Onkololeessa",
      "Sadaasa",
      "Muddee"
    ],
    "SHORTDAY": [
      "Dil",
      "Wix",
      "Qib",
      "Rob",
      "Kam",
      "Jim",
      "San"
    ],
    "SHORTMONTH": [
      "Ama",
      "Gur",
      "Bit",
      "Elb",
      "Cam",
      "Wax",
      "Ado",
      "Hag",
      "Ful",
      "Onk",
      "Sad",
      "Mud"
    ],
    "fullDate": "EEEE, MMMM d, y",
    "longDate": "dd MMMM y",
    "medium": "dd-MMM-y h:mm:ss a",
    "mediumDate": "dd-MMM-y",
    "mediumTime": "h:mm:ss a",
    "short": "dd/MM/yy h:mm a",
    "shortDate": "dd/MM/yy",
    "shortTime": "h:mm a"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "Birr",
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
  "id": "om",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);