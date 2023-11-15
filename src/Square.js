import Cross from "./Cross";
import Circle from "./Circle";

function Square({ value, onClick, style }) {
  let symbol = "";
  if (value === "X") {
    symbol = <Cross />;
  } else if (value === "O") {
    symbol = <Circle />;
  }

  return (
    <div
      className={`flex justify-center items-center w-20 h-20 border-yellow-400 ${style.borderRight} ${style.borderBottom} ${style.borderTop}`}
      onClick={onClick}
    >
      <div>{symbol}</div>
    </div>
  );
}

export default Square;
