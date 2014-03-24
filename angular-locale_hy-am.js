'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "\u0531\u057c\u2024",
      "\u053f\u0565\u2024"
    ],
    "DAY": [
      "\u053f\u056b\u0580\u0561\u056f\u056b",
      "\u0535\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b",
      "\u0535\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b",
      "\u0549\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b",
      "\u0540\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b",
      "\u0548\u0582\u0580\u0562\u0561\u0569",
      "\u0547\u0561\u0562\u0561\u0569"
    ],
    "MONTH": [
      "\u0540\u0578\u0582\u0576\u057e\u0561\u0580",
      "\u0553\u0565\u057f\u0580\u057e\u0561\u0580",
      "\u0544\u0561\u0580\u057f",
      "\u0531\u057a\u0580\u056b\u056c",
      "\u0544\u0561\u0575\u056b\u057d",
      "\u0540\u0578\u0582\u0576\u056b\u057d",
      "\u0540\u0578\u0582\u056c\u056b\u057d",
      "\u0555\u0563\u0578\u057d\u057f\u0578\u057d",
      "\u054d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580",
      "\u0540\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580",
      "\u0546\u0578\u0575\u0565\u0574\u0562\u0565\u0580",
      "\u0534\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580"
    ],
    "SHORTDAY": [
      "\u053f\u056b\u0580",
      "\u0535\u0580\u056f",
      "\u0535\u0580\u0584",
      "\u0549\u0578\u0580",
      "\u0540\u0576\u0563",
      "\u0548\u0582\u0580",
      "\u0547\u0561\u0562"
    ],
    "SHORTMONTH": [
      "\u0540\u0576\u057e",
      "\u0553\u057f\u057e",
      "\u0544\u0580\u057f",
      "\u0531\u057a\u0580",
      "\u0544\u0575\u057d",
      "\u0540\u0576\u057d",
      "\u0540\u056c\u057d",
      "\u0555\u0563\u057d",
      "\u054d\u0565\u057a",
      "\u0540\u0578\u056f",
      "\u0546\u0578\u0575",
      "\u0534\u0565\u056f"
    ],
    "fullDate": "EEEE, MMMM d, y",
    "longDate": "MMMM dd, y",
    "medium": "MMM d, y HH:mm:ss",
    "mediumDate": "MMM d, y",
    "mediumTime": "HH:mm:ss",
    "short": "MM/dd/yy HH:mm",
    "shortDate": "MM/dd/yy",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "Dram",
    "DECIMAL_SEP": ",",
    "GROUP_SEP": ".",
    "PATTERNS": [
      {
        "gSize": 0,
        "lgSize": 0,
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
        "gSize": 0,
        "lgSize": 0,
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
  "id": "hy-am",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);