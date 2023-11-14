import Cross from "./Cross";
import Circle from "./Circle";

function Square(props) {
  return (
    <div
      className={`flex justify-center items-center w-20 h-20 border-yellow-400 ${props.style.borderRight} ${props.style.borderBottom} ${props.style.borderTop}`}
      onClick={props.onClick}
    >
      <div>{(props.value === "X") ? <Cross /> : <Circle />}</div>
    </div>
  );
}

export default Square;
