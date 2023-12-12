function getPropertyValues(obj, property) {
    const values = [];
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && key === property) {
        values.push(obj[key]);
      }
    }
  
    return values;
  }
  
  const person = {
    name: 'Ganga',
    age: 23,
    city: 'Tvm',
    job: 'Engineer',
  };
  
  const ageValues = getPropertyValues(person, 'age');
  console.log(ageValues); // Output: [30]
  
  const nameValues = getPropertyValues(person, 'name');
  console.log(nameValues); // Output: ['John']
  
  const hobbyValues = getPropertyValues(person, 'hobbies');
  console.log(hobbyValues); // Output: [] (property not found)
  