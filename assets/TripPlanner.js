/*
Trip Planner

You need to plan a road trip. You are traveling at an average speed of 40 miles an hour.
Given a distance in miles as input (the code to take input is already present), output to the console the time it will take you to cover it in minutes.

Sample Input:
150

Sample Output:
225 

*/
// document.getElementById("myForm").onsubmit = function() {myDist()};
// document.querySelector()
function myDist() {
    // var distance = parseInt(readLine(), 10);
    let distance = parseInt(document.getElementById("distance").innerHTML)
    alert(distance)
    //your code goes here
    const avg=40;
    let time= 60 * distance / avg
    document.writeln(time);
    // alert(time);
}