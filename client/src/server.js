
export async function showTrack() {
  const url = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=4cb4defb67c94fe11a118b7502fc5693&format=json`;
  const response = await fetch(url);
  const body = await response.json();
  return body;
}

export async function showArtistTracks(artist) {
  const url = `https://ws.audioscrobbler.com//2.0/?method=artist.gettoptracks&artist=${artist}&api_key=4cb4defb67c94fe11a118b7502fc5693&format=json`;
  const response = await fetch(url);
  const body = await response.json();
  return body;
}
export async function showArtistAlbums(artist) {
  const url = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=4cb4defb67c94fe11a118b7502fc5693&format=json`;
  const response = await fetch(url);
  const body = await response.json();
  return body;
}

export async function showArtist(artist) {
  const url = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&limit=1&api_key=4cb4defb67c94fe11a118b7502fc5693&format=json`;
  const response = await fetch(url);
  const body = await response.json();
  return body;
}