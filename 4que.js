function haveSameProperties(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    // Check if the number of keys is the same
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    // Check if all keys in obj1 are also in obj2
    for (const key of keys1) {
      if (!keys2.includes(key)) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  const object1 = { name: 'Ganga', age: 23, city: 'Tvm' };
  const object2 = { age: 23, name: 'Ganga', city: 'Tvm' };
  const object3 = { name: 'Arya', age: 25};
  
  console.log(haveSameProperties(object1, object2)); // true (same properties, different values)
  console.log(haveSameProperties(object1, object3)); // false (different properties)
  