// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  const set = new Set();
  for (let element of playlist) {
    set.add(element);
  }
  const newPlaylist = Array.from(set);
  return newPlaylist;
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  const set = new Set();
  for (const element of playlist) {
    set.add(element)
  }
  set.add(track);
  console.log(set.size)
  if(set.size === playlist.length){
     return true;
  }else{
    return false
  }
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  if (!hasTrack(playlist,track)){
    const playlist2 = playlist;
    playlist2.push(track);
  return playlist2;
  }else{
    return playlist;
  }
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
 if(hasTrack(playlist,track)){
    const index = playlist.indexOf(track);
    playlist.splice(index,1);
    return playlist
  }else {
    return playlist;
  }
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
 const set = new Set()
  for (const artist of playlist) {
    let [song , name] = artist.split(" - ");
    set.add(name)
  }
  return playlist = Array.from(set);
}
