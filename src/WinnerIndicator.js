const WinnerIndicator = (props) => {
    return (
        <div className="text-yellow-400 text-2xl font-normal font-[Inter]">
            {props.winner} is the winner!
        </div>
    );
}

export default WinnerIndicator;