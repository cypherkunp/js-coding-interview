const sampleArr1 = ['a', 'b', 'c'];
const sampleArr2 = ['x', 'y', 'a'];

function hasCommonItems1(array1 = [], array2 = []) {
  for (const itemFromArr1 of array1) {
    for (const itemFromArr2 of array2) {
      if (itemFromArr1 == itemFromArr2) return true;
    }
  }
  return false;
}

function hasCommonItems2(array1 = [], array2 = []) {
  function mapArrToObj(arr) {
    const obj = {};
    for (const item of arr) {
      if (!obj[item]) {
        obj[item] = true;
      }
    }
    return obj;
  }

  function compareArrWithObj(obj, arr) {
    for (const item of arr) {
      if (obj[item]) return true;
    }
    return false;
  }

  const objectOfArray = mapArrToObj(array1);
  console.log(objectOfArray);

  return compareArrWithObj(objectOfArray, array2);
}

function hasCommonItems3(array1 = [], array2 = []) {
  return array1.some((item) => array2.includes(item));
}

console.log(hasCommonItems1(sampleArr1, sampleArr2));
console.log(hasCommonItems2(sampleArr1, sampleArr2));
console.log(hasCommonItems3(sampleArr1, sampleArr2));
