function isBalanced(expression) {
  let character, stack = [];
  let expressionTable = {
    '{': '}',
    '[': ']',
    '(': ')'
  };

  for (var i = 0; i < expression.length; i++) {
    character = expression[i];
    var balancedCharacter = expressionTable[character];

    if (balancedCharacter) 
      stack.push(balancedCharacter);
    else if (stack.length === 0 || character !== stack.pop()) {
      return false;
    } 
  }

  return stack.length === 0;
}