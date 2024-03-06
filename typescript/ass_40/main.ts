
interface Album {
    artist: string;
    title: (string | number);
    tracks?: number
}

function make_album(artist: string, title: (string | number), tracks?: number): Album{
    let album: Album = {
        artist,
        title,
    }
    
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album
}

let album1 = make_album("Jokhay", "khanabadosh", 12)
let album2 = make_album("Eminem", "Encore")
let album3 = make_album("Juice wrld", "Legends never die", 15)

console.log(album1)
console.log(album2)
console.log(album3)