const WinnerIndicator = ({onClick, winner}) => {
  return (
    <div className="grid grid-cols-[max-content_1fr] text-yellow-400 text-2xl font-normal font-[Inter] cursor-pointer" onClick={onClick}>
      {winner === "Draw" ? <div>Game is a draw</div> : <div>{winner} is the winner!</div>}
      <div className="flex items-center justify-center ml-2">
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 21 21"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill="none"
            fillRule="evenodd"
            stroke="#FAD61D"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            transform="matrix(0 1 1 0 2.5 2.5)"
          >
            <path d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8" />

            <path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default WinnerIndicator;
