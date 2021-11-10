import { useContext, useState } from "react";
import { StoreContext } from "../../store/StoreProvider";
import Translate from "../../text/Translate";

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
    { label: Translate().sortPanel.dateUp, text: "addUp", value: addUp },
    { label: Translate().sortPanel.dateDown, text: "addDown", value: addDown },
    { label: Translate().sortPanel.az, text: "az", value: az },
    { label: Translate().sortPanel.za, text: "za", value: za },
    { label: Translate().sortPanel.idUp, text: "idUp", value: idUp },
    { label: Translate().sortPanel.idDown, text: "idDown", value: idDown },
  ];

  const allLabels = () => {
    return variants.map((item) => {
      return (
        <label className="d-flex mb-2 align-items-center" key={item.text}>
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
              className="accordion-button collapsed "
              onClick={() => setIsOpen(!isOpen)}
            >
              <strong>{Translate().sortPanel.title}</strong>
            </button>
          </h3>
          {isOpen && <div className="px-3 my-3">{allLabels()}</div>}
        </div>
      </div>
    </>
  );
};
export default SortPanel;
