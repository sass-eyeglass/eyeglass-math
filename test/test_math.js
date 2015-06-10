"use strict";

var path = require("path");
var fs = require("fs");
var testutils = require("./testutils");

describe("math", function () {
  describe("exponentiation functions", function () {
    it("cbrt($number)", function (done) {
      var options = {
        data: "@import 'math/exponentiation'; .math { cbrt: cbrt(0); }"
      };
      var expectedOutput = ".math {\n  cbrt: 0; }\n";
      testutils.assertCompiles(options, expectedOutput, done);
    });
    it("cbrt($number) with units", function (done) {
      var options = {
        data: "@import 'math/exponentiation'; .math { cbrt: cbrt(2px * 2px * 2px); }"
      };
      var expectedOutput = ".math {\n  cbrt: 2px; }\n";
      testutils.assertCompiles(options, expectedOutput, done);
    });
    it("exp($number)", function (done) {
      var options = {
        data: "@import 'math/exponentiation'; .math { exp: exp(0); }"
      };
      var expectedOutput = ".math {\n  exp: 1; }\n";
      testutils.assertCompiles(options, expectedOutput, done);
    });
    it("log($number)", function (done) {
      var options = {
        data: "@import 'math/exponentiation'; .math { log: log(1); }"
      };
      var expectedOutput = ".math {\n  log: 0; }\n";
      testutils.assertCompiles(options, expectedOutput, done);
    });
    it("log10($number)", function (done) {
      var options = {
        data: "@import 'math/exponentiation'; .math { log10: log10(1); }"
      };
      var expectedOutput = ".math {\n  log10: 0; }\n";
      testutils.assertCompiles(options, expectedOutput, done);
    });
    it("log2($number)", function (done) {
      var options = {
        data: "@import 'math/exponentiation'; .math { log2: log2(1); }"
      };
      var expectedOutput = ".math {\n  log2: 0; }\n";
      testutils.assertCompiles(options, expectedOutput, done);
    });
    it("pow($base, $exponent)", function (done) {
      var options = {
        data: "@import 'math/exponentiation'; .math { pow: pow(2,2); }"
      };
      var expectedOutput = ".math {\n  pow: 4; }\n";
      testutils.assertCompiles(options, expectedOutput, done);
    });
    it("sqrt($number)", function (done) {
      var options = {
        data: "@import 'math/exponentiation'; .math { sqrt: sqrt(4); }"
      };
      var expectedOutput = ".math {\n  sqrt: 2; }\n";
      testutils.assertCompiles(options, expectedOutput, done);
    });
    it("sqrt($number) with units", function (done) {
      var options = {
        data: "@import 'math/exponentiation'; .math { sqrt: sqrt(2px * 2px); }"
      };
      var expectedOutput = ".math {\n  sqrt: 2px; }\n";
      testutils.assertCompiles(options, expectedOutput, done);
    });
  });

  describe("hyperbolic functions", function () {
    it("acosh($number)", function (done) {
      var options = {
        data: "@import 'math/hyperbolic'; .math { acosh: acosh(1); }"
      };
      var expectedOutput = ".math {\n  acosh: 0; }\n";
      testutils.assertCompiles(options, expectedOutput, done);
    });
    it("asinh($number)", function (done) {
      var options = {
        data: "@import 'math/hyperbolic'; .math { asinh: asinh(0); }"
      };
      var expectedOutput = ".math {\n  asinh: 0; }\n";
      testutils.assertCompiles(options, expectedOutput, done);
    });
    it("atanh($number)", function (done) {
      var options = {
        data: "@import 'math/hyperbolic'; .math { atanh: atanh(0); }"
      };
      var expectedOutput = ".math {\n  atanh: 0; }\n";
      testutils.assertCompiles(options, expectedOutput, done);
    });
    it("cosh($number)", function (done) {
      var options = {
        data: "@import 'math/hyperbolic'; .math { cosh: cosh(0); }"
      };
      var expectedOutput = ".math {\n  cosh: 1; }\n";
      testutils.assertCompiles(options, expectedOutput, done);
    });
    it("sinh($number)", function (done) {
      var options = {
        data: "@import 'math/hyperbolic'; .math { sinh: sinh(0); }"
      };
      var expectedOutput = ".math {\n  sinh: 0; }\n";
      testutils.assertCompiles(options, expectedOutput, done);
    });
    it("tanh($number)", function (done) {
      var options = {
        data: "@import 'math/hyperbolic'; .math { tanh: tanh(0); }"
      };
      var expectedOutput = ".math {\n  tanh: 0; }\n";
      testutils.assertCompiles(options, expectedOutput, done);
    });
  });

  describe("numeric functions", function () {
    it("sign($number)", function (done) {
      var options = {
        data: "@import 'math/numeric'; .math { sign-zero: sign(0); sign-pos: sign(4px); sign-neg: sign(-2); }"
      };
      var expectedOutput = ".math {\n  sign-zero: 0;\n  sign-pos: 1;\n  sign-neg: -1; }\n";
      testutils.assertCompiles(options, expectedOutput, done);
    });
  });

  describe("trigonometric functions", function () {
    it("acos($number)", function (done) {
      var options = {
        data: "@import 'math/trigonometry'; .math { acos: acos(1); }"
      };
      var expectedOutput = ".math {\n  acos: 0rad; }\n";
      testutils.assertCompiles(options, expectedOutput, done);
    });
    it("asin($number)", function (done) {
      var options = {
        data: "@import 'math/trigonometry'; .math { asin: asin(0); }"
      };
      var expectedOutput = ".math {\n  asin: 0rad; }\n";
      testutils.assertCompiles(options, expectedOutput, done);
    });
    it("atan($number)", function (done) {
      var options = {
        data: "@import 'math/trigonometry'; .math { atan: atan(0); }"
      };
      var expectedOutput = ".math {\n  atan: 0rad; }\n";
      testutils.assertCompiles(options, expectedOutput, done);
    });
    it("cos($angle)", function (done) {
      var options = {
        data: "@import 'math/trigonometry'; .math { cos: cos(0); }"
      };
      var expectedOutput = ".math {\n  cos: 1; }\n";
      testutils.assertCompiles(options, expectedOutput, done);
    });
    it("hypot($numbers...)", function (done) {
      var options = {
        data: "@import 'math/trigonometry'; .math { hypot: hypot(3px, 4px); }"
      };
      var expectedOutput = ".math {\n  hypot: 5px; }\n";
      testutils.assertCompiles(options, expectedOutput, done);
    });
    it("sin($angle)", function (done) {
      var options = {
        data: "@import 'math/trigonometry'; .math { sin: sin(0); }"
      };
      var expectedOutput = ".math {\n  sin: 0; }\n";
      testutils.assertCompiles(options, expectedOutput, done);
    });
    it("tan($angle)", function (done) {
      var options = {
        data: "@import 'math/trigonometry'; .math { tan: tan($PI); }"
      };
      var expectedOutput = ".math {\n  tan: 0; }\n";
      testutils.assertCompiles(options, expectedOutput, done);
    });
  });
});
