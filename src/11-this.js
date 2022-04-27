//this
function alert() {
    console.log(this.age + "years old");
  } //this는 window를 가리킴
  
  const myObj = {
    age: 30,
    alert: alert
  };
  
  myObj.alert();
  