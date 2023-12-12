function removeProperty(obj, propertyName) {
    if (obj.hasOwnProperty(propertyName)) {
      delete obj[propertyName];
      return true; // Property successfully removed
    } else {
      return false; // Property doesn't exist in the object
    }
  }
  
  // Example usage:
  const person = {
    firstName: "Ganga",
    lastName: "lekshmi",
    age: 23,
  };
  
  console.log(person); // { firstName: 'John', lastName: 'Doe', age: 30 }
  
  const removed = removeProperty(person, "age");
  if (removed) {
    console.log("Age property removed:", person); // { firstName: 'John', lastName: 'Doe' }
  } else {
    console.log("Age property not found in the object.");
  }
  