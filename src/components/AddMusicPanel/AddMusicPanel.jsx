import { useState } from "react";
import AddSongForm from "./AddSongForm";

const AddMusicPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="accordion mb-3 ">
        <div className="accordion-item">
          <h3 className="accordion-header border-bottom">
            <button
              class="accordion-button collapsed "
              onClick={() => setIsOpen(!isOpen)}
            >
              <strong>Dodaj nowy album</strong>
            </button>
          </h3>
          {isOpen && <AddSongForm />}
        </div>
      </div>
    </>
  );
};

export default AddMusicPanel;
