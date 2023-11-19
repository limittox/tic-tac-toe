const PlayerSelector = ({ onClick }) => {
  return (
    <div className="grid grid-rows-[max-content_1fr] text-center gap-4 mt-8 ml-8 mr-8 justify-items-center items-center">
      <div
        className="flex items-center justify-center w-[175px] h-[50px] bg-yellow-400 rounded-[10px] mb-5 cursor-pointer"
        onClick={() => onClick("singlePlayer")}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="25px"
            height="25px"
            id="person"
          >
            <g data-name="Layer 2" fill="#FF4C4C">
              <path
                d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm6 10a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z"
                data-name="person"
              ></path>
            </g>
          </svg>
        </div>
        <div className="text-red-500 text-2xl font-normal font-[Inter]">
          One Player
        </div>
      </div>
      <div
        className="flex items-center justify-center w-[175px] h-[50px] bg-yellow-400 rounded-[10px] mb-5 cursor-pointer"
        onClick={() => onClick("multiPlayer")}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="25px"
            height="25px"
            id="people"
          >
            <g data-name="Layer 2" fill="#FF4C4C">
              <path
                d="M9 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm8 2a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm4 7a1 1 0 0 0 1-1 5 5 0 0 0-8.06-3.95A7 7 0 0 0 2 20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1"
                data-name="people"
              ></path>
            </g>
          </svg>
        </div>
        <div className="text-red-500 text-2xl font-normal font-[Inter]">
          Two Player
        </div>
      </div>
    </div>
  );
};

export default PlayerSelector;
