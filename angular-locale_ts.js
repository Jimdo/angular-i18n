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
      "Sonto",
      "Musumbhunuku",
      "Ravumbirhi",
      "Ravunharhu",
      "Ravumune",
      "Ravuntlhanu",
      "Mugqivela"
    ],
    "MONTH": [
      "Sunguti",
      "Nyenyenyani",
      "Nyenyankulu",
      "Dzivamisoko",
      "Mudyaxihi",
      "Khotavuxika",
      "Mawuwani",
      "Mhawuri",
      "Ndzhati",
      "Nhlangula",
      "Hukuri",
      "N'wendzamhala"
    ],
    "SHORTDAY": [
      "Son",
      "Mus",
      "Bir",
      "Har",
      "Ne",
      "Tlh",
      "Mug"
    ],
    "SHORTMONTH": [
      "Sun",
      "Yan",
      "Kul",
      "Dzi",
      "Mud",
      "Kho",
      "Maw",
      "Mha",
      "Ndz",
      "Nhl",
      "Huk",
      "N'w"
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
    "CURRENCY_SYM": "R",
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
        "negPre": "\u00a4-",
        "negSuf": "",
        "posPre": "\u00a4",
        "posSuf": ""
      }
    ]
  },
  "id": "ts",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);