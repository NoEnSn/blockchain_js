//일반 function
function eatMeals(food) {
    if (food === "sandwich") {
      eatlunch();
    } else {
      eatDinner();
    }
  }
  function eatlunch() {
    console.log("점심을 먹어요");
  }
  function eatDinner() {
    console.log("저녁을 먹어요");
  }
  
  eatMeals("sandwich");
  
  //callback functionn
  function eatMeals2(food, eatlunchCB, eatDinnerCB) {
    //함수로 인수전달
    if (food === "sandwich") {
      eatlunchCB();
    } else {
      eatDinnerCB();
    }
  }
  function eatlunch2() {
    console.log("점심을 먹어요");
  }
  function eatDinner2() {
    console.log("저녁을 먹어요");
  }
  
  eatMeals2("sandwich", eatlunch2, eatDinner2);
  
  //예제. 콜백 함수를 화살표 함수로 표현해보기+백틱 응용
  const eatMeals3 = (food, eatlunchCB, eatDinnerCB) => {
    //함수로 인수전달
    if (food === "sandwich") {
      eatlunchCB();
    } else {
      eatDinnerCB();
    }
  };
  const eatlunch3 = () => {
    console.log("점심을 먹어요");
  };
  const eatDinner3 = () => {
    console.log("저녁을 먹어요");
  };
  
  eatMeals3("sandwich", eatlunch3, eatDinner3);
  