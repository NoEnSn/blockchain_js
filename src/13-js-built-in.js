//include 포함하는지

const arr = [1, 2, 3, 4, 5];
const number = 3;
const strNum = "3";

console.log(arr.includes(number));
console.log(arr.includes(strNum));

//indexOf index찾기
console.log(arr.indexOf(number));

//findIndex 특정 item index 찾기
console.log(arr.findIndex((item) => item === 5));

//정렬
const arrNum = [3, 1, 4, 5, 9, 10, 2, 0, 7];
console.log(arrNum.sort()); //sort는 문자 정렬(숫자 정렬x)

//내립차순
const compareDesc = (a, b) => {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
};

arrNum.sort(compareDesc);
console.log(arrNum);

//오름차순
const compareAsce = (a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
};

arrNum.sort(compareAsce);
console.log(arrNum);
