const Footer = ({ data }) => {
  if (!data.length)
    return (
      <p className="stats">
        <em>Start adding some items to your parking list 🧳</em>
      </p>
    );

  const numberOfItemsParked = data.length;

  const percentageOfItemsParked = () => {
    return data.reduce(
      (acc, curr) => (curr.packed === true ? (acc += 1) : (acc += 0)),
      0
    );
  };

  const itemsChecked = percentageOfItemsParked();

  const percentageValue =
    (percentageOfItemsParked() / numberOfItemsParked) * 100;

  return (
    <footer className="stats">
      <em>
        {percentageValue === 100
          ? "You got everything! Ready to go✈️"
          : `You have ${numberOfItemsParked} items on your list and you
        ${
          itemsChecked > 0
            ? ` already packed ${itemsChecked} (${percentageValue.toFixed(0)}%)`
            : " have packed none"
        }`}
      </em>
    </footer>
  );
};

export default Footer;
