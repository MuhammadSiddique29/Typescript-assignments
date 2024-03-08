let magiciansArray: string[] = ["Harry Houdini", "David Copperfield", "Derren Brown", "Penn Jillette", "Teller"]

console.log("Great magicians")
// magician names with Great

function make_great(magiciansNames: string[]): void {
    magiciansNames.map((greatMagician) => {
        console.log(`The Great ${greatMagician}`)
    })
}

make_great(magiciansArray)



console .log("\nOriginal names:")
// original names of magicians

function make_greatCopy(magiciansNames: string[]): string[] {
    magiciansNames.map((originalMagician) => {
        console.log(originalMagician)
    })
    return magiciansNames
}

make_greatCopy(magiciansArray)