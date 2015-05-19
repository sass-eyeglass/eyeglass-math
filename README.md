# Eyeglass Math

This eyeglass plugin exposes Javascript's Math API to Sass.

To use it:

```
$ npm install --save eyeglass-math
```

Then in your Sass file(s):

```scss
@import "math";

```

### API

The following constants are available when you import the `math` module.

* `$PI` - The ratio of a circle's circumference to its diameter.
* `$TAU` - Because [Pi is wrong](http://www.tauday.com/).
* `$E` - The natural base (2.718…).

The following functions are available when you import the `math` module.

#### `math/numeric`

* `sign($number) ` - Returns the sign of the x, indicating whether
  `$number` is positive (`1`), negative (`-1`) or zero (`0`).

#### `math/exponentiation`

* `cbrt($number) ` - Returns the cube root of a number.
* `exp($number)` - Returns E^x, where x is the argument, and E
  is Euler's constant (2.718…), the base of the natural logarithm.
* `log($number)` - Returns the natural logarithm of a number.
* `log10($number) ` - Returns the base 10 logarithm of a number.
* `log2($number) ` - Returns the base 2 logarithm of a number.
* `pow(base, exponent)` - Returns `$base` to the `$exponent` power.
* `sqrt($number)` - Returns the positive square root of a number.

#### `math/trigonometry`

* `acos($number)` - Returns the arccosine of a number.
* `asin($number)` - Returns the arcsine of a number.
* `atan($number)` - Returns the arctangent of a number.
* `cos($number)` - Returns the cosine of a number.
* `hypot($numbers...) ` - Returns the square root of the sum of
  squares of its arguments.
* `sin($number)` - Returns the sine of a number.
* `tan($number)` - Returns the tangent of a number.

#### `math/hyperbolic`

* `acosh($number) ` - Returns the hyperbolic arccosine of a number.
* `asinh($number) ` - Returns the hyperbolic arcsine of a number.
* `atanh($number) ` - Returns the hyperbolic arctangent of a number.
* `cosh($number) ` - Returns the hyperbolic cosine of a number.
* `sinh($number) ` - Returns the hyperbolic sine of a number.
* `tanh($number) ` - Returns the hyperbolic tangent of a number.

Note: The functions above are available as globals with the prefix `math-`.
