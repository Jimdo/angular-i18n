'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "k\u00edk\u00edr\u00edg",
      "ng\u01ddg\u00f3g\u01ddle"
    ],
    "DAY": [
      "s\u0254\u0301nd\u0254",
      "m\u0254\u0301ndi",
      "s\u0254\u0301nd\u0254 m\u01ddl\u00fa m\u01dd\u0301b\u025b\u030c",
      "s\u0254\u0301nd\u0254 m\u01ddl\u00fa m\u01dd\u0301l\u025b\u0301",
      "s\u0254\u0301nd\u0254 m\u01ddl\u00fa m\u01dd\u0301nyi",
      "f\u00falad\u00e9",
      "s\u00e9rad\u00e9"
    ],
    "MONTH": [
      "ng\u0254n os\u00fa",
      "ng\u0254n b\u025b\u030c",
      "ng\u0254n l\u00e1la",
      "ng\u0254n nyina",
      "ng\u0254n t\u00e1na",
      "ng\u0254n sam\u01ddna",
      "ng\u0254n zamgb\u00e1la",
      "ng\u0254n mwom",
      "ng\u0254n ebul\u00fa",
      "ng\u0254n aw\u00f3m",
      "ng\u0254n aw\u00f3m ai dzi\u00e1",
      "ng\u0254n aw\u00f3m ai b\u025b\u030c"
    ],
    "SHORTDAY": [
      "s\u0254\u0301n",
      "m\u0254\u0301n",
      "smb",
      "sml",
      "smn",
      "f\u00fal",
      "s\u00e9r"
    ],
    "SHORTMONTH": [
      "ngo",
      "ngb",
      "ngl",
      "ngn",
      "ngt",
      "ngs",
      "ngz",
      "ngm",
      "nge",
      "nga",
      "ngad",
      "ngab"
    ],
    "fullDate": "EEEE d MMMM y",
    "longDate": "d MMMM y",
    "medium": "d MMM y HH:mm:ss",
    "mediumDate": "d MMM y",
    "mediumTime": "HH:mm:ss",
    "short": "d/M/yyyy HH:mm",
    "shortDate": "d/M/yyyy",
    "shortTime": "HH:mm"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "FCFA",
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
  "id": "ewo",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);