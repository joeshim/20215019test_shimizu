
//問題1
const array = [2, 4, 7, 5, 4, 3, 8];

const result = array.filter(function (x, i, self) {
  return self.indexOf(x) === i;
});

console.log(result);

//問題2
function leapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    console.log(year + '年は閏年です');
  } else {
    console.log(year + '年は閏年ではありません');
  }
}

leapYear(2020);
leapYear(2021);






