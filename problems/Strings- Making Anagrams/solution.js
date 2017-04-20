function main() {
    var a = readLine();
    var b = readLine();

    var charactersCountToDelete = 0;
    var stringCounter = {};
    setStringCounter(a, stringCounter, true);
    setStringCounter(b, stringCounter, false);

    for (var i = 0; i < 26; i++) {
      var stringFromCode = String.fromCharCode(97 + i);
      charactersCountToDelete = charactersCountToDelete + Math.abs(stringCounter[stringFromCode] || 0);
    }

    console.log(charactersCountToDelete);
}

function setStringCounter(str, stringCounter, isPositive) {
    var valueToSum = isPositive ? 1 : -1;
    for (var i = 0; i < str.length; i++) {

      stringCounter[str[i]] = !stringCounter[str[i]] ? valueToSum : stringCounter[str[i]] + valueToSum;
    }
}
