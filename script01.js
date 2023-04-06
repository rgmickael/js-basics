// BMI = mass / height^2
// mass in kg and height in meter

var johnMass = 100.5;
var johnHeight = 163.6;

var markMass = 68;
var markHeight = 172;

var johnBMI = johnMass / (johnHeight**2);
var markBMI = markMass / (markHeight**2);

console.log("John BMI: "+johnBMI);
console.log("Mark BMI: "+markBMI);

console.log("\n");

var isJohnBMIGreater = johnBMI > markBMI; 

console.log("is John BMI greater than Mark? " + isJohnBMIGreater);

