var path = require("path");
module.exports = function(eyeglass, sass) {
  return {
    sassDir: path.join(__dirname, "sass"),
    functions: {
      "math-sin($angle)": function(angle, done) {
        try {
          done(sass.types.Number(Math.sin(angle.getValue())));
        } catch (e) {
          done(sass.types.Error(e.toString()));
        }
      }
    }
  }
};
