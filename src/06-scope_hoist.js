function myFunction1() {
    let carName = "Tesla";
    return carName;
  }
  function myFunction2() {
    let carName2 = "Tesla";
    return carName2;
  }
  function myFunction3() {
    let carName2 = "Tesla";
    return carName2;
  }
  
  console.log(myFunction1());
  console.log(myFunction2());
  console.log(myFunction3());
  
  //function leverl scope -- 함수 안의 변수는 지역변수
  let hero = "Batman";
  console.log("before", hero);
  
  (function () {
    //함수 이름 없이 함수 선언 및 호출 : IIFE, 즉시 함수 호출
    if (true) {
      const hero = "The Flayer";
      console.log("function in", hero);
    }
  })();
  
  console.log(hero);
  
  //hoisting(끌어올리기)
  (function () {
    theHero();
    return;
  
    function theHero() {
      //선언 전 미리 호출되었으므로 hoisting 되어 실행됨
      console.log("Arrow");
    }
  })();
  
  //ES6 Hoisting
  (function () {
    console.log(hero);
    console.log(antiHero); //변수 선언 전 미리 호출 시 변수 언디파인드 hoisting
  
    let hero = "Atom";
    const antiHero = "Cold War";
  })();
  