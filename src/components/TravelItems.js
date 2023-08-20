const TravelItems = ({
  id,
  description,
  quantity,
  packed,
  handleRemoveItem,
  onToggleItem,
}) => {
  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={packed}
        onChange={() => onToggleItem(id)}
      />

      <span style={{ textDecoration: packed ? "line-through" : "" }}>
        {quantity} {description}
      </span>
      <button onClick={() => handleRemoveItem(id)}>❌</button>
    </li>
  );
};

export default TravelItems;
