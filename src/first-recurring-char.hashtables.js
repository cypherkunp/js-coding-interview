//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function getFirstRecurringChar(list = []) {
  const map = {};
  for (const item of list) {
    if (map[item] !== undefined) return item;
    else map[item] = true;
  }
  return undefined;
}

console.log(getFirstRecurringChar([2, 5, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(getFirstRecurringChar([2, 1, 1, 2, 3, 5, 1, 2, 4]));
console.log(getFirstRecurringChar([2, 3, 4, 5]));
