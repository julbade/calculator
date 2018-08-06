var bmi = function(weight, height) {
  return weight / (height*height)

 };

var weight = parseFloat(prompt("Enter weight in kg:"));
var height = parseFloat(prompt("Enter height in meters:"));
var result = bmi(weight,height)
alert(result)
