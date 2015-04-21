"use strict";

var path = require("path");
var fs = require("fs");
var testutils = require("./testutils");

describe("math", function () {
 it("knows trigonometry", function (done) {
   var options = {
     data: "@import 'math'; .math { sin: sin(0); pi: $pi; }"
   };
   var expectedOutput = ".math {\n  sin: 0;\n  pi: 3.14159; }\n";
   testutils.assertCompiles(options, expectedOutput, done);
 });
});
