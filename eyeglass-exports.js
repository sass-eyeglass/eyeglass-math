var path = require("path");


module.exports = function(eyeglass, sass) {
  var sassUtils = require("node-sass-utils")(sass);

  function assertUnitless(number) {
    sassUtils.assertType(number, "number");
    if (number.getUnit()) {
      throw new Error("Expected " + sassUtils.sassString(number) + " to not have a unit.");
    }
  }

  function assertUnit(number, unit) {
    sassUtils.assertType(number, "number");
    if (number.getUnit() !== unit) {
      throw new Error("Expected " + sassUtils.sassString(number) + " to be in " + unit +".");
    }
  }

  function parseUnits(unitString) {
    return unitString.split("/").map(function(units) {
      return units.split("*");
    });
  }

  return {
    sassDir: path.join(__dirname, "sass"),
    functions: {
      "math-acos($number)": function(number, done) {
        try {
          assertUnitless(number);
          done(sass.types.Number(Math.acos(number.getValue()), "rad"));
        } catch (e) {
          done(sass.types.Error(e.toString()));
        }
      },
      "math-acosh($number)": function(number, done) {
        try {
          assertUnitless(number);
          done(sass.types.Number(Math.acosh(number.getValue())));
        } catch (e) {
          done(sass.types.Error(e.toString()));
        }
      },
      "math-asin($number)": function(number, done) {
        try {
          assertUnitless(number);
          done(sass.types.Number(Math.asin(number.getValue()), "rad"));
        } catch (e) {
          done(sass.types.Error(e.toString()));
        }
      },
      "math-asinh($number)": function(number, done) {
        try {
          assertUnitless(number);
          done(sass.types.Number(Math.asinh(number.getValue())));
        } catch (e) {
          done(sass.types.Error(e.toString()));
        }
      },
      "math-atan($number)": function(number, done) {
        try {
          assertUnitless(number);
          done(sass.types.Number(Math.atan(number.getValue()), "rad"));
        } catch (e) {
          done(sass.types.Error(e.toString()));
        }
      },
      "math-atanh($number)": function(number, done) {
        try {
          assertUnitless(number);
          done(sass.types.Number(Math.atanh(number.getValue())));
        } catch (e) {
          done(sass.types.Error(e.toString()));
        }
      },
      "math-cbrt($number)": function(number, done) {
        try {
          // Or if the unit is x*x*x then we could return x. Useful?
          var parsedUnits = parseUnits(number.getUnit());
          var unit = "";
          if (!parsedUnits[1] &&
              parsedUnits[0].length === 3 &&
              parsedUnits[0][0] === parsedUnits[0][1] &&
              parsedUnits[0][0] === parsedUnits[0][2]) {
            unit = parsedUnits[0][0];
          } else {
            assertUnitless(number);
          }

          done(sass.types.Number(Math.cbrt(number.getValue()), unit));
        } catch (e) {
          done(sass.types.Error(e.toString()));
        }
      },
      "math-cos($angle)": function(angle, done) {
        try {
          assertUnit(angle, "rad");
          done(sass.types.Number(Math.cos(angle.getValue())));
        } catch (e) {
          done(sass.types.Error(e.toString()));
        }
      },
      "math-cosh($number)": function(number, done) {
        try {
          assertUnitless(number);
          done(sass.types.Number(Math.cosh(number.getValue())));
        } catch (e) {
          done(sass.types.Error(e.toString()));
        }
      },
      "math-exp($number)": function(number, done) {
        try {
          assertUnitless(number);
          done(sass.types.Number(Math.exp(number.getValue())));
        } catch (e) {
          done(sass.types.Error(e.toString()));
        }
      },
      "math-hypot($numbers...)": function(numbers, done) {
        var jsValues = [];
        try {
          if (numbers.getLength() < 2) {
            throw new Error("math-hypot requires at least two arguments.");
          }
          var unit = numbers.getValue(0).getUnit();
          for (var i = 0; i < numbers.getLength(); i++) {
            assertUnit(numbers.getValue(i), unit); 
            jsValues.push(numbers.getValue(i).getValue());
          }
          done(sass.types.Number(Math.hypot.apply(Math, jsValues), unit));
        } catch (e) {
          done(sass.types.Error(e.toString()));
        }
      },
      "math-log($number)": function(number, done) {
        try {
          assertUnitless(number);
          done(sass.types.Number(Math.log(number.getValue())));
        } catch (e) {
          done(sass.types.Error(e.toString()));
        }
      },
      "math-log10($number)": function(number, done) {
        try {
          assertUnitless(number);
          done(sass.types.Number(Math.log10(number.getValue())));
        } catch (e) {
          done(sass.types.Error(e.toString()));
        }
      },
      "math-log2($number)": function(number, done) {
        try {
          assertUnitless(number);
          done(sass.types.Number(Math.log2(number.getValue())));
        } catch (e) {
          done(sass.types.Error(e.toString()));
        }
      },
      "math-pow($base, $exponent)": function(base, exponent, done) {
        try {
          assertUnitless(base);
          assertUnitless(exponent);
          done(sass.types.Number(Math.pow(base.getValue(), exponent.getValue())));
        } catch (e) {
          done(sass.types.Error(e.toString()));
        }
      },
      "math-roundTo($number, $decimalPlaces)": function (number, decimalPlaces, done) {
        try {
          done(sass.types.Number(Number(Math.round(number + 'e' + decimalPlaces) + 'e-' + decimalPlaces)));
        } catch (e) {
          done(sass.types.Error(e.toString()));
        }
      },
      "math-sign($number)": function(number, done) {
        try {
          done(sass.types.Number(Math.sign(number.getValue())));
        } catch (e) {
          done(sass.types.Error(e.toString()));
        }
      },
      "math-sin($angle)": function(angle, done) {
        try {
          assertUnit(angle, "rad");
          done(sass.types.Number(Math.sin(angle.getValue())));
        } catch (e) {
          done(sass.types.Error(e.toString()));
        }
      },
      "math-sinh($number)": function(number, done) {
        try {
          assertUnitless(number);
          done(sass.types.Number(Math.sinh(number.getValue())));
        } catch (e) {
          done(sass.types.Error(e.toString()));
        }
      },
      "math-sqrt($number)": function(number, done) {
        try {
          var parsedUnits = parseUnits(number.getUnit());
          var unit = "";
          if (!parsedUnits[1] &&
              parsedUnits[0].length === 2 &&
              parsedUnits[0][0] === parsedUnits[0][1]) {
            unit = parsedUnits[0][0];
          } else {
            assertUnitless(number);
          }

          done(sass.types.Number(Math.sqrt(number.getValue()), unit));
        } catch (e) {
          done(sass.types.Error(e.toString()));
        }
      },
      "math-tan($angle)": function(angle, done) {
        try {
          assertUnit(angle, "rad");
          done(sass.types.Number(Math.tan(angle.getValue())));
        } catch (e) {
          done(sass.types.Error(e.toString()));
        }
      },
      "math-tanh($number)": function(number, done) {
        try {
          assertUnitless(number);
          done(sass.types.Number(Math.tanh(number.getValue())));
        } catch (e) {
          done(sass.types.Error(e.toString()));
        }
      },
      "math-trunc($number)": function(number, done) {
        try {
          done(sass.types.Number(Math.trunc(number.getValue()), number.getUnit()));
        } catch (e) {
          done(sass.types.Error(e.toString()));
        }
      }

    }
  }
};
