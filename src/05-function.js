//function 함수

//parameter가 있는 함수
function plus(a, b) {
    return a + b;
  }
  
  const result = plus(10, 20);
  
  console.log(result);
  
  //parameter가 없는 함수
  function callMyCar() {
    console.log("hello my car");
  }
  
  callMyCar("volvo");
  
  //화살표 함수
  let carName = "Hyundai";
  
  const callMyCar2 = () => {
    console.log(carName);
  };
  
  callMyCar2();
  