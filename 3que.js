function cloneObject(obj) {
    // Check if the input is an object
    if (typeof obj !== 'object' || obj === null) {
      return obj; // Return the input if it's not an object
    }
  
    // Create a shallow copy using the spread operator
    const copy = { ...obj };
  
    return copy;
  }
  
  // Example usage:
  const originalObject = { name: 'Ganga', age: 23 };
  const clonedObject = cloneObject(originalObject);
  
  console.log(originalObject); // { name: 'John', age: 30 }
  console.log(clonedObject);   // { name: 'John', age: 30 }
  console.log(originalObject === clonedObject); // false (they are separate objects)
  