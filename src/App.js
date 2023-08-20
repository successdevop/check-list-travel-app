import { useState } from "react";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import TravelList from "./components/TravelList";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "books", quantity: 1, packed: false },
  // { id: 4, description: "games", quantity: 15, packed: false },
  // { id: 5, description: "videos", quantity: 20, packed: false },
];

function App() {
  const [data, setData] = useState(initialItems);

  const addItem = (item, qty) => {
    if (!item) return;

    const newItem = {
      id: new Date().getTime(),
      description: item,
      quantity: qty,
      packed: false,
    };

    const newData = [...data, newItem];
    setData(newData);
  };

  const handleRemoveItem = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };

  const handleItemToggle = (id) => {
    const newData = data.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    );
    setData(newData);
  };

  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear all items"
    );
    if (confirmed) setData([]);
  };

  return (
    <div className="app">
      <Header />
      <Form addItem={addItem} />
      <TravelList
        data={data}
        handleRemoveItem={handleRemoveItem}
        onToggleItem={handleItemToggle}
        onClearList={handleClearList}
      />
      <Footer data={data} />
    </div>
  );
}

export default App;
