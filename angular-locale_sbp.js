'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "Lwamilawu",
      "Pashamihe"
    ],
    "DAY": [
      "Mulungu",
      "Jumatatu",
      "Jumanne",
      "Jumatano",
      "Alahamisi",
      "Ijumaa",
      "Jumamosi"
    ],
    "MONTH": [
      "Mupalangulwa",
      "Mwitope",
      "Mushende",
      "Munyi",
      "Mushende Magali",
      "Mujimbi",
      "Mushipepo",
      "Mupuguto",
      "Munyense",
      "Mokhu",
      "Musongandembwe",
      "Muhaano"
    ],
    "SHORTDAY": [
      "Mul",
      "Jtt",
      "Jnn",
      "Jtn",
      "Alh",
      "Iju",
      "Jmo"
    ],
    "SHORTMONTH": [
      "Mup",
      "Mwi",
      "Msh",
      "Mun",
      "Mag",
      "Muj",
      "Msp",
      "Mpg",
      "Mye",
      "Mok",
      "Mus",
      "Muh"
    ],
    "fullDate": "EEEE, d MMMM y",
    "longDate": "d MMMM y",
    "medium": "d MMM y h:mm:ss a",
    "mediumDate": "d MMM y",
    "mediumTime": "h:mm:ss a",
    "short": "dd/MM/yyyy h:mm a",
    "shortDate": "dd/MM/yyyy",
    "shortTime": "h:mm a"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "TSh",
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
        "negPre": "-",
        "negSuf": "\u00a4",
        "posPre": "",
        "posSuf": "\u00a4"
      }
    ]
  },
  "id": "sbp",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);