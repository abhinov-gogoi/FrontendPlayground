"use strict";
var reviews = [4, 1, 7.5, 8, 5.6, 6.2, 9.6, 0.4];
for (var i = 0; i < reviews.length; i++) {
    // console.log(reviews[i]);
}
var sportsOne = ["Golf", "Cricket", "Baseball", "Swimming"];
for (var i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
console.log("-----------------------------------------");
// simplfied for loop
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var sport = sportsOne_1[_i];
    if (sport === "Cricket") {
        console.log(sport + " <<-- my Favourite");
    }
    else {
        console.log(sport);
    }
}
