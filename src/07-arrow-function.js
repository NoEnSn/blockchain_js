//함수 선언 전 호출
console.log(callMeA());
//console.log(callMeB()); --오류
//console.log(callMeC()); --오류

//함수 선언식
function callMeA() {
  return "저를 불렀나요? Call me A";
}

//함수 표현식
const callMeB = function () {
  return "저를 불렀나요? Call me B";
};

//화살표 함수
const callMeC = () => {
  return "저를 불렀나요? Call me C";
};

console.log(callMeA());
console.log(callMeB());
console.log(callMeC());
