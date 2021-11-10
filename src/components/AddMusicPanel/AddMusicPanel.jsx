import { useContext, useState } from "react";
import { StoreContext } from "../../store/StoreProvider";
import AddSongForm from "./AddSongForm";

const AddMusicPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useContext(StoreContext);

  return (
    <>
      <div className="accordion mb-3 ">
        <div className="accordion-item">
          <h3 className="accordion-header border-bottom">
            <button
              className="accordion-button collapsed "
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
