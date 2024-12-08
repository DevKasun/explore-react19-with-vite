import PropTypes from "prop-types";

function ExpensiveComponent({ data }) {
  const processedData = data.map((item) => item * 2);
  return (
    <ul>
      {processedData.map((item, index) => (
        <li className="text-center" key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
}

ExpensiveComponent.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ExpensiveComponent;
