export const isNewPlaylist = (newInput, playlists) => {
  return playlists.find(playlist => playlist.title === newInput)
};