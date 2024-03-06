let magiciansArray: string[] = ["Harry Houdini", "David Copperfield", "Derren Brown", "Penn Jillette", "Teller"]

function show_magicians(magiciansNames: string[]): void {
    magiciansNames.forEach((magicianName) => {
        console.log(magicianName)
    })
}

show_magicians(magiciansArray)