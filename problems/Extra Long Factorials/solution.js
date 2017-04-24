var FactorialBigInt = (function () {

  var ARRAY_VALUE_BASE = 10000000;

  function FactorialBigInteger(smallInteger) {
    this.values = [smallInteger];
  }

  FactorialBigInteger.prototype.multiply = function (timesValue) {
    this.values = multiplyBigIntArrayWithSmall(this.values, timesValue);
    return this;
  }

  FactorialBigInteger.prototype.toString = function () {
    return parseBigIntArrayToString(this.values);
  };

  function multiplyBigIntArrayWithSmall(a, b) { // assumes a is array, b is number with |b| < ARRAY_VALUE_BASE
    var l = a.length,
      r = new Array(l),
      base = ARRAY_VALUE_BASE,
      carry = 0,
      product, i;

    for (i = 0; i < l; i++) {
      product = a[i] * b + carry;
      carry = Math.floor(product / base);
      r[i] = product - carry * base;
    }
    while (carry > 0) {
      r[i++] = carry % base;
      carry = Math.floor(carry / base);
    }
    return r;
  }

  function createArray(length) { // function shamelessly stolen from Yaffle's library https://github.com/Yaffle/BigInteger
    var x = new Array(length);
    var i = -1;
    while (++i < length) {
      x[i] = 0;
    }
    return x;
  }

  function parseBigIntArrayToString(values) {
    var v = values, l = v.length, str = String(v[--l]), zeros = "0000000", digit;
    while (--l >= 0) {
      digit = String(v[l]);
      str += zeros.slice(digit.length) + digit;
    }
    return str;
  }

  return FactorialBigInteger;
})();


function main() {
  var n = parseInt(readLine());
  console.log(factorial(n).toString());
}

function factorial(number) {
  var result = new FactorialBigInt(number);

  for (var i = number - 1; i > 1; i--) {
    result = result.multiply(i);
  }

  return result;
}


