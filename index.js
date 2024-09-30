// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}
const drivers = ["Aisha", "Benard", "Chausiku","Quincy"];

function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}
const driver = ["Emmanuel","Moses","Calvin","David"];

console.log(fuzzyMatch(driver, "Emmanuel"));
// console.log(fuzzyMatch(driver, "Moses"));
// console.log(fuzzyMatch(driver, "Calvin")); 
// console.log(fuzzyMatch(driver, "David"));


function matchName(drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}

const drive = [
    { name: "Emmanuael", location: "Kikuyu" },
    { name: "Bonnie", location: "Lamibia" },
    { name: "Chamtemakuni", location: "Chuka" },
    { name: "Alekie", location: "Bungoma" }
];

console.log(matchName(drive, "Emmanuuel")); 