import { useContext, useState } from "react";
import { StoreContext } from "../../store/StoreProvider";
import Translate from "../../text/Translate";

const AddSongForm = () => {
  const [author, setAuthor] = useState("");
  const [songName, setSongName] = useState("");
  const [fav, setFav] = useState(false);
  const [validateInfo, setValidateInfo] = useState(false);

  const { id, setId, setPlaylist, playlist } = useContext(StoreContext);

  const reset = () => {
    setAuthor("");
    setSongName("");
    setValidateInfo("");
    setFav(false);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };
  const handleSongNameChange = (event) => {
    setSongName(event.target.value);
  };
  const handleAddToFav = (event) => {
    setFav(!fav);
  };

  const validateText = (
    <small className="form-text text-danger">
      {Translate().addPanel.validate}
    </small>
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    if (author && songName) {
      const newSong = {
        id: id,
        author: author,
        songName: songName,
        addedDate: new Date().toLocaleString(),
        fav: fav,
      };
      setId((prev) => prev + 1);
      let newList = [...playlist];
      newList.push(newSong);
      setPlaylist(newList);
      reset();
    } else {
      setValidateInfo(true);
    }
  };

  return (
    <form className="accordion-content mt-3 mb-3 px-3 ">
      <div className="mb-2">
        <label>{Translate().addPanel.artistLabel}</label>
        <input
          onChange={handleAuthorChange}
          value={author}
          type="text"
          className="form-control"
          placeholder={Translate().addPanel.artistPlaceholder}
        />
      </div>
      <div className="mb-2">
        <label>{Translate().addPanel.albumLabel}</label>
        <input
          onChange={handleSongNameChange}
          value={songName}
          type="text"
          className="form-control"
          placeholder={Translate().addPanel.albumPlaceholder}
        />
        {validateInfo && validateText}
      </div>
      <div className="d-flex justify-content-start align-items-center">
        <input
          type="checkbox"
          className="m-2 p-2 "
          onChange={handleAddToFav}
          checked={fav}
        />
        <p className="m-0">{Translate().addPanel.best}</p>
      </div>
      <div className="text-center my-2">
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary w-75"
        >
          {Translate().addPanel.button}
        </button>
      </div>
    </form>
  );
};

export default AddSongForm;
