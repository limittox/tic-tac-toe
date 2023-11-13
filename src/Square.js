function Square(props) {
  return (
    <div
      className="flex justify-center items-center w-20 h-20 gap-4 border rounded-md"
      onClick={props.onClick}
    >
      <div>{props.value}</div>
    </div>
  );
}

export default Square;
