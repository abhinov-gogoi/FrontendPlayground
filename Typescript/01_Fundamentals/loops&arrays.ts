let reviews: number[] = [4, 1, 7.5, 8, 5.6, 6.2, 9.6, 0.4];
for(let i=0; i<reviews.length; i++) {
    // console.log(reviews[i]);
}

let sportsOne: string[] = ["Golf", "Cricket", "Baseball", "Swimming"];
for(let i=0; i<sportsOne.length; i++) {
    console.log(sportsOne[i]);
}

console.log("-----------------------------------------")

// simplfied for loop
for(let sport of sportsOne) {
    if(sport === "Cricket") {
        console.log(`${sport} <<-- my Favourite`);
    }
    else{
        console.log(sport);
    }        
}