const TurnIndicator = (props) => {
  return (
    <div className="flex items-center justify-center w-[90px] h-[30px] bg-yellow-400 rounded-[10px] mb-5">
      <div className="text-red-500 text-2xl font-normal font-[Inter]">
        Turn <b>{props.turn}</b>
      </div>
    </div>
  );
};

export default TurnIndicator;
