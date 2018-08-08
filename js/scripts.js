// Business (or back-end) logic:

var add = function(num1, num2) {
  return num1 + num2;
};

var subtract = function(num1, num2) {
  return num1 - num2;
};

var multiply = function(num1, num2) {
  return num1 * num2;
};

var divide = function(num1, num2) {
  return num1 / num2;
};

// User interface (or front-end) logic:
$(document).ready(function() {
$("#check button").click(function() {
  event.preventDefault();
  var num1 = parseInt($("#num1").val());
  var num2 = parseInt($("#num2").val());
  if($(this).attr("id")=="add") {
    var result = add(num1, num2);
    $("#output").text(result);
    $("#check")[0].reset();
  } else if($(this).attr("id")=="subtract") {
    var result = subtract(num1, num2);
    $("#output").text(result);
    $("#check")[0].reset();
  } else if($(this).attr("id")=="divide") {
    var result = divide(num1, num2);
    $("#output").text(result);
    $("#check")[0].reset();
  } else if ($(this).attr("id")=="multiply") {
    var result = multiply(num1, num2);
    $("#output").text(result);
    $("#check")[0].reset();
  }
 });
});
