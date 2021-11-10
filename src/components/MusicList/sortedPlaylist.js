export const sortedPlaylist = (playlist, sort) => {
  const newPlaylist = playlist;

  switch(sort) {
    case "az" :
      newPlaylist.sort((a, b) =>
      a.title > b.title ? 1 : b.songName > a.songName ? -1 : 0
    );
      break;
    case "za":
      newPlaylist.sort((a, b) =>
      a.title < b.title ? 1 : b.songName < a.songName ? -1 : 0
    );
      break;
    case "idUp":
      newPlaylist.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
      break;
    case "idDown":
      newPlaylist.sort((a, b) => parseFloat(b.id) - parseFloat(a.id));
      break;
    case "addUp":
      newPlaylist.sort(function (a, b) {
            const c = new Date(a.addedDate);
            const d = new Date(b.addedDate);
            return d - c;
          });
          break;
    case "addDown":
      newPlaylist.sort(function (a, b) {
            const c = new Date(a.addedDate);
            const d = new Date(b.addedDate);
            return c - d;
          });
          break;
    default:
      newPlaylist.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));
  }}