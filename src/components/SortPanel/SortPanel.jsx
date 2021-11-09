import { useState } from "react";

const SortPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="accordion mb-3">
        <div className="accordion-item">
          <h3 className="accordion-header border-bottom">
            <button
              class="accordion-button collapsed"
              onClick={() => setIsOpen(!isOpen)}
            >
              Sortuj playliste
            </button>
          </h3>
          {isOpen && <div className="accordion-content">form</div>}
        </div>
      </div>
    </>
  );
};
export default SortPanel;
