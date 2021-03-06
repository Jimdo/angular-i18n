'use strict';
angular.module("ngLocale", [], ["$provide", function($provide) {
var DECIMALS = function (n) {
  var str = n + '';
  var result = str.indexOf('.');
  return (result == -1) ? 0 : str.length - result - 1;
};
var GET_WT = function (v, f) {
  if (f === 0) {
    return {w: 0, t: 0};
  }

  while ((f % 10) === 0) {
    f /= 10;
    v--;
  }

  return {w: v, t: f};
};
var GET_VF = function (n, opt_precision) {
  var DEFAULT_DIGITS = 3;

  if (undefined === opt_precision) {
    var v = Math.min(DECIMALS(n), DEFAULT_DIGITS);
  } else {
    var v = opt_precision;
  }

  var base = Math.pow(10, v);
  var f = ((n * base) | 0) % base;

  return {v: v, f: f};
};
var PLURAL_CATEGORY = {"ZERO":"zero","ONE":"one","TWO":"two","FEW":"few","MANY":"many","OTHER":"other"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": [
      "AM",
      "PM"
    ],
    "DAY": [
      "\u044f\u043a\u0448\u0430\u043d\u0431\u0430",
      "\u0434\u0443\u0448\u0430\u043d\u0431\u0430",
      "\u0441\u0435\u0448\u0430\u043d\u0431\u0430",
      "\u0447\u043e\u0440\u0448\u0430\u043d\u0431\u0430",
      "\u043f\u0430\u0439\u0448\u0430\u043d\u0431\u0430",
      "\u0436\u0443\u043c\u0430",
      "\u0448\u0430\u043d\u0431\u0430"
    ],
    "MONTH": [
      "\u042f\u043d\u0432\u0430\u0440",
      "\u0424\u0435\u0432\u0440\u0430\u043b",
      "\u041c\u0430\u0440\u0442",
      "\u0410\u043f\u0440\u0435\u043b",
      "\u041c\u0430\u0439",
      "\u0418\u044e\u043d",
      "\u0418\u044e\u043b",
      "\u0410\u0432\u0433\u0443\u0441\u0442",
      "\u0421\u0435\u043d\u0442\u044f\u0431\u0440",
      "\u041e\u043a\u0442\u044f\u0431\u0440",
      "\u041d\u043e\u044f\u0431\u0440",
      "\u0414\u0435\u043a\u0430\u0431\u0440"
    ],
    "SHORTDAY": [
      "\u042f\u043a\u0448",
      "\u0414\u0443\u0448",
      "\u0421\u0435\u0448",
      "\u0427\u043e\u0440",
      "\u041f\u0430\u0439",
      "\u0416\u0443\u043c",
      "\u0428\u0430\u043d"
    ],
    "SHORTMONTH": [
      "\u042f\u043d\u0432",
      "\u0424\u0435\u0432",
      "\u041c\u0430\u0440",
      "\u0410\u043f\u0440",
      "\u041c\u0430\u0439",
      "\u0418\u044e\u043d",
      "\u0418\u044e\u043b",
      "\u0410\u0432\u0433",
      "\u0421\u0435\u043d",
      "\u041e\u043a\u0442",
      "\u041d\u043e\u044f",
      "\u0414\u0435\u043a"
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
    "CURRENCY_SYM": "\u20ac",
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
        "negPre": "\u00a4\u00a0-",
        "negSuf": "",
        "posPre": "\u00a4\u00a0",
        "posSuf": ""
      }
    ]
  },
  "id": "uz-cyrl",
  "pluralCat": function (n, opt_precision) {  var i = n | 0;  var vf = GET_VF(n, opt_precision);  if (i == 1 && vf.v == 0) {    return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);