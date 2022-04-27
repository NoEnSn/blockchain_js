//javascript 개발 언어 배우는 중//

//변수(var)--var은 잘 안씀
var varName = "var";
console.log(varName);

//상수(const)--값 변경 불가
const Name = "yeong hee";
console.log(Name);
//Name = "cheolmin"; ->오류

//변수(let)--값 변경 가능
let letName = "cheol soo";
console.log(letName);
letName = "cheol min";

//백틱 안에 ${변수이름} 하면 변수 출력
console.log(`저의 이름은 ${Name} 입니다.`);
console.log(`저의 이름은 ${letName} 입니다.`);

console.log("자바스크립트에서는 이제는 무조건 let 또는 const로 변수를 씁니다.");



//예제. Full name 변수 짓기
//const full_name; --> 상수는 초기값을 꼭 넣어줘야 함
//console.log(full_name); ->오류

let full_name2; //변수는 초기값이 undefined로 자동 설정
console.log("full_name2 => ",full_name2);
full_name2 = "홍길동";
console.log("full_name2 => ",full_name2);



//상수 배열의 요소는 수정 및 추가 가능, 배열 자체는 수정 불가
const cars = ["Volvo","BMW","Audi"];
console.log(cars);
cars[0] = "Toyota"; //상수 배열 요소를 배열 선언 뒤에 변경해도 배열 전체에 대해 요소 변경됨
cars.push("Saab");
console.log(cars);
//const cars = ["test1","test2"] -->배열자체 수정 불가, 오류

