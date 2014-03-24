'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "Munkyo",
      "Eigulo"
    ],
    "DAY": [
      "Sabiiti",
      "Balaza",
      "Owokubili",
      "Owokusatu",
      "Olokuna",
      "Olokutaanu",
      "Olomukaaga"
    ],
    "MONTH": [
      "Janwaliyo",
      "Febwaliyo",
      "Marisi",
      "Apuli",
      "Maayi",
      "Juuni",
      "Julaayi",
      "Agusito",
      "Sebuttemba",
      "Okitobba",
      "Novemba",
      "Desemba"
    ],
    "SHORTDAY": [
      "Sabi",
      "Bala",
      "Kubi",
      "Kusa",
      "Kuna",
      "Kuta",
      "Muka"
    ],
    "SHORTMONTH": [
      "Jan",
      "Feb",
      "Mar",
      "Apu",
      "Maa",
      "Juu",
      "Jul",
      "Agu",
      "Seb",
      "Oki",
      "Nov",
      "Des"
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
    "CURRENCY_SYM": "UGX",
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
        "negSuf": "\u00a0\u00a4",
        "posPre": "",
        "posSuf": "\u00a0\u00a4"
      }
    ]
  },
  "id": "xog-ug",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);