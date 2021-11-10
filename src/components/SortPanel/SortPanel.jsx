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

  const { addUp, addDown, idDown, idUp, az, za } = allValues;

  const variants = [
    { label: "Data dodania malejąco", text: "addUp", value: addUp },
    { label: "Data dodania rosnąco", text: "addDown", value: addDown },
    { label: "A - Z", text: "az", value: az },
    { label: "Z - A", text: "za", value: za },
    { label: "Id rosnąco", text: "idUp", value: idUp },
    { label: "Id malejąco", text: "idDown", value: idDown },
  ];

  const allLabels = () => {
    return variants.map((item) => {
      return (
        <label className="d-flex mb-2 align-items-center">
          <input
            className="mx-3"
            data-value={item.text}
            name={item.text}
            onChange={changeHandler}
            type="checkbox"
            checked={item.value}
          />
          {item.label}
        </label>
      );
    });
  };

  return (
    <>
      <div className="accordion mb-3">
        <div className="accordion-item">
          <h3 className="accordion-header border-bottom">
            <button
              class="accordion-button collapsed "
              onClick={() => setIsOpen(!isOpen)}
            >
              <strong>Sortuj playliste</strong>
            </button>
          </h3>
          {isOpen && <div className="px-3 my-3">{allLabels()}</div>}
        </div>
      </div>
    </>
  );
};
export default SortPanel;
