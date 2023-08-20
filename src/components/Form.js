import { useState } from "react";

const Form = ({ addItem }) => {
  const [item, setItem] = useState("");
  const [itemNum, setItemNum] = useState(1);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    addItem(item, itemNum);
    setItem("");
    setItemNum(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmitForm}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={itemNum} onChange={(e) => setItemNum(+e.target.value)}>
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="text"
        placeholder="enter your item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
