const array = [
    5,
    "20",
    true,
    false,
    null,
    undefined,
    {},
    [],
    () => {},
    function () {}
  ];
  
  console.log(array);
  
  const arrNum = [1, 2, 3, 4, 5];
  
  arrNum.push(6); //뒤에서 요소 추가 arrNum == 123456
  console.log(arrNum);
  
  arrNum.pop(); //뒤에서 요소 삭제 arrNum == 12345
  console.log(arrNum);
  console.log(arrNum.length);
  
  arrNum.unshift(0); //앞에서 요소 추가 arrNum == 012345
  arrNum.shift(); //앞에서 요소 삭제 arrNum == 12345
  
  const people = [
    {
      name: "Kim",
      age: 23
    },
    {
      name: "Lee",
      age: 24
    },
    {
      name: "Noh",
      age: 25
    }
  ];
  
  console.log(people[0]);
  console.log(people[1].name);
  console.log(people[2].age);
  
  people.push({
    name: "Hong",
    age: 26
  });
  
  console.log(people);
  