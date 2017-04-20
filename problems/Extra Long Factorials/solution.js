function main() {
    var n = parseInt(readLine());
    console.log(factorial(n).toString());
}

function factorial(number) {
    var result = new BigInteger(number);

    for (var i = number - 1; i > 1; i--) {
        result = result.multiply(i);
    }

    return result;
}

function BigInteger(smallInteger) {
    this.values = [smallInteger];
    this.strNumber = smallInteger.toString();
}

BigInteger.prototype.isBigInt = function(number) {
    //9007199254740991
    number = typeof number === 'string' ? parseInt(number) : number;
    return number > Number.MAX_SAFE_INTEGER;
}

BigInteger.prototype.multiply = function(timesValue) {
    // TODO: Implement multiply with bigInt!!
    this.values[0] = this.values[0] * timesValue;
    this.strNumber = this.values[0].toString();

    return this;
}

BigInteger.prototype.toString = function() {
    return this.strNumber;
}
