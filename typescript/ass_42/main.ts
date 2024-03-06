let magiciansArray: string[] = ["Harry Houdini", "David Copperfield", "Derren Brown", "Penn Jillette", "Teller"]

function show_magicians(magiciansNames: string[]): void {
    magiciansNames.forEach((magicianName) => {
        console.log(magicianName)
    })
}

show_magicians(magiciansArray)



// Making Great

function make_great(magiciansNames: string[]): void {
    magiciansNames.map((greatMagician) => {
        console.log(`The Great ${greatMagician}`)
    })
}

make_great(magiciansArray)