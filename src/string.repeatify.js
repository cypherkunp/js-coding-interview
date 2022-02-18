String.prototype.repeatify =
  String.prototype.repeatify ||
  function (noOfTimes) {
    const repeater = Array(noOfTimes).fill(this).join('');
    return repeater;
  };

console.log('Hello'.repeatify(3));
