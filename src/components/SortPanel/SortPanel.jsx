import { useContext, useState } from "react";
import { StoreContext } from "../../store/StoreProvider";

const SortPanel = () => {
  const { sort, setSort } = useContext(StoreContext);
  const [isOpen, setIsOpen] = useState(false);
  const [allValues, setAllValues] = useState({
    addUp: false,
    addDown: false,
    idUp: false,
    idDown: false,
    az: false,
    za: false,
  });

  const changeHandler = (e) => {
    setAllValues({
      addUp: false,
      addDown: false,
      idUp: false,
      idDown: false,
      az: false,
      za: false,
    });
    setAllValues((prevValues) => {
      return { ...prevValues, [e.target.name]: e.target.checked };
    });
    const itemId = e.target.getAttribute("data-value");
    if (sort === itemId) {
      setSort("");
      return;
    }
    if (sort !== itemId) {
      setSort(itemId);
    }
  };

  const variants = [
    { text: "Data dodania up" },
    { text: "Data dodania down" },
    { text: "A - Z" },
    { text: "Z - A" },
    { text: "Id rosnaco" },
    { text: "Id malejąco" },
  ];

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
          {isOpen && (
            <div>
              <label className="d-flex">
                <input
                  data-value="addUp"
                  name="addUp"
                  onChange={changeHandler}
                  type="checkbox"
                  checked={allValues.addUp}
                />
                Data dodania up
              </label>
              <label className="d-flex">
                <input
                  data-value="addDown"
                  name="addDown"
                  onChange={changeHandler}
                  type="checkbox"
                  checked={allValues.addDown}
                />
                Data dodania down
              </label>
              <label className="d-flex">
                <input
                  data-value="idUp"
                  name="idUp"
                  onChange={changeHandler}
                  type="checkbox"
                  checked={allValues.idUp}
                />
                Id up
              </label>
              <label className="d-flex">
                <input
                  data-value="idDown"
                  name="idDown"
                  onChange={changeHandler}
                  type="checkbox"
                  checked={allValues.idDown}
                />
                Id down
              </label>
              <label className="d-flex">
                <input
                  data-value="az"
                  name="az"
                  onChange={changeHandler}
                  type="checkbox"
                  checked={allValues.az}
                />
                A-Z
              </label>
              <label className="d-flex">
                <input
                  data-value="za"
                  name="za"
                  onChange={changeHandler}
                  type="checkbox"
                  checked={allValues.za}
                />
                Z-A
              </label>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default SortPanel;
