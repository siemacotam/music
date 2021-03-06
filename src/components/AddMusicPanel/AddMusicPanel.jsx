import { useState } from "react";
import Translate from "../../text/Translate";
import AddAlbumForm from "./AddAlbumForm";

const AddMusicPanel = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="accordion mb-3 ">
        <div className="accordion-item">
          <h3 className="accordion-header border-bottom">
            <button
              className="accordion-button collapsed "
              onClick={() => setIsOpen(!isOpen)}
            >
              <strong>{Translate().addPanel.title}</strong>
            </button>
          </h3>
          {isOpen && <AddAlbumForm />}
        </div>
      </div>
    </>
  );
};

export default AddMusicPanel;
