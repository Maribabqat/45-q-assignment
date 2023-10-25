function makeAlbum(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
        tracks
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var myAlbum = makeAlbum("Artist Name", "My First Album", 10);
console.log(myAlbum);
export {};
