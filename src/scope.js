(function () {
  var a = (b = 5);
})();

console.log(b); // 5
console.log(a); // ref error
