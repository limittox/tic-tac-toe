function Square(props) {
  return (
    <button className="w-20 h-20 bg-gray-200 border border-gray-400 rounded-md" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;