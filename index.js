/*
exercise 1:
    input:
        salary for a day
        count of day work
    process: pseudo code
        1.lay duoc input (hardcode)
        2.tinh luong = luong 1 ngay * so ngay lam
        3.log luong ra mang hinh

    output:
        salary
*/ 
console.log("exercise 1");

var salary = 100000;
var dayOfWork =28;
var totalSalary;

totalSalary = salary * dayOfWork;
console.log("tong luong trong thang la: ",totalSalary);


/**
 * exercise 2:
 * input
 *      number a b c d e
 *      average
 * process
 *      1. input value a b c d e 
 *      2 average = (a + b + c + d + e)/5;
 * output
 *      average
 * 
 */
 console.log("exercise 2");


var a = 4;
var b = 3;
var c = 2;
var d = 3;
var e = 4;
var average;
average = (a + b + c + d + e)/5;
console.log("gia tri trung binh cua 5 so tu nhien la: ",average);


/**
 * exercise 3:
 * input
 *      usd
 *      rate_exchage
 *      vnd
 * process
 *      1. input value usd
 *      2. vnd = usd * rate_exchange
 * output
 *      vnd
 * 
 */
 console.log("exercise 3");

var rate_exchange= 23500;
var usd= 2;
var vnd;
vnd = usd*rate_exchange;
console.log("so tien quy doi la:", vnd)

/**
 * exercise 4:
 * input
 *      width
 *      long
 *      acreage
 *      perimeter
 * process
 *      1. input width long
 *      2. acreage = long * width;
 *      3. perimeter = (long + width)*2;
 * output
 *      log acreage
 *      log perimeter
 */
console.log("exercise 4");
var width = 50;
var long = 30;
var acreage;
var perimeter;

acreage =long *width;
perimeter = (long + width)*2;

console.log("dien tich la:", acreage);
console.log("chu vi la:", perimeter);

/**
 * exercise 5:
 * input
 *      n 
 *      num1
 *      num2
 *      sum
 * process
 *      1. input n
 *      2. num1 = n % 10;
 *      3. num2 = math.floor (n/10);
 *      4. sum = num1 + num2;
 * output
 *      log(sum)
 */
 console.log("exercise 5");
var n = 25;
var num1;
var num2;
var sum;

num1 = n % 10;
num2 = Math.floor(n/10);
sum = num1 + num2;

console.log("tổng 2 ký số là:", sum);
