function crystalGazer(number_of_children, partners_name, geographic_location, job_title){
let message = "You will be a " + job_title + " in " + geographic_location + " and married to " + partners_name + " with " + number_of_children + ".";
return message;
}
console.log(crystalGazer("3kids","kylie","silicon","developer"));

function ageCalculator(birth_year){
    var current_year= new Date().getFullYear();
    var result = current_year - birth_year;
    return "your age is "+ result + " or " + Number(result+1);
}
console.log(ageCalculator(1994));


function degreetoradians(degrees){
    var result = degrees *(Math.PI/180);
    console.log(result);
    return result;
}
var degrees = degreetoradians(90);
console.log(degrees + "radians")

function box(area,volume){
    var width = 7;
    var height= 2;
    var depth= 5;
    var area= width * height;
    var volume = width * height * depth;
    return " The area of the box is: " + area + " The volume of the box is: " + volume;
}
console.log(box())  

var text=(function(){
    let text2="i am a web developer";
    let text3= text2.charAt(0).toUpperCase();
    let text= text3+text2.substring(1);
    return text;
}());
console.log(text);

function grade(Math,Physics,English){
    let sum= Math+Physics+English;
    let avg = (sum) / 3;
    let grade = [sum, avg] ;
    return grade;
    // return "this is your sum " + sum + " and this is you avarage " + avg;
}
console.log(grade(3,4,5)[0]);
console.log(grade(3,4,5)[1]);



