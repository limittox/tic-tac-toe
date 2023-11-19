const PlayerSelector = ({ onClick }) => {
  return (
    <div className="grid grid-rows-[max-content_1fr] text-center gap-4 mt-8 ml-8 mr-8 justify-items-center items-center">
      <div className="flex items-center justify-center w-[150px] h-[50px] bg-yellow-400 rounded-[10px] mb-5 cursor-pointer" onClick={() => onClick("singlePlayer")}>
        <div className="text-red-500 text-2xl font-normal font-[Inter]">
          One Player
        </div>
      </div>
      <div className="flex items-center justify-center w-[150px] h-[50px] bg-yellow-400 rounded-[10px] mb-5 cursor-pointer" onClick={() => onClick("multiPlayer")}>
        <div className="text-red-500 text-2xl font-normal font-[Inter]">
          Two Player
        </div>
      </div>
    </div>
  );
};

export default PlayerSelector;
