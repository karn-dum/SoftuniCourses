function solve(band, album, song ) {
    let rotations = Math.ceil((band.length * album.length) * (song.length / 2) / 2.5)
    console.log(`The plate was rotated ${rotations} times.`);
    
}

solve('Black Sabbath', 'Paranoid', 'War Pigs');