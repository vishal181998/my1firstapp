// The find() function returns the first element in the array that satisfies a given condition.
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 22 }
  ];

  const p = people.find(p=>p.age>25)
  console.log(p)

  let s=[1,3,6,7,8,8]
  const ne=s.find(el => el>5) // it will return single element which crosses that limit
  console.log(ne)//return 6 

  