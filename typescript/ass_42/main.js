var magiciansArray = ["Harry Houdini", "David Copperfield", "Derren Brown", "Penn Jillette", "Teller"];
function show_magicians(magiciansNames) {
    magiciansNames.forEach(function (magicianName) {
        console.log(magicianName);
    });
}
show_magicians(magiciansArray);
function make_great(magiciansNames) {
    magiciansNames.map(function (greatMagician) {
        console.log("The Great ".concat(greatMagician));
    });
}
make_great(magiciansArray);
