import { useDispatch, useSelector } from "react-redux";
import { startTimer, pauseTimer, resetTimer } from '../redux/actions/timerActions';  // Import the actions

export const Buttons = () => {
  const { isRunning } = useSelector((state) => state);  // Access Redux state
  const dispatch = useDispatch();  // Get the dispatch function

  return (
    <div className="actions">
      {/* Dispatch startTimer action when start button is clicked */}
      <button disabled={isRunning} onClick={() => dispatch(startTimer())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/7709/7709039.png"
          alt="start"
        />
      </button>
      
      {/* Dispatch pauseTimer action when pause button is clicked */}
      <button disabled={!isRunning} onClick={() => dispatch(pauseTimer())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2404/2404385.png"
          alt="pause"
        />
      </button>
      
      {/* Dispatch resetTimer action when reset button is clicked */}
      <button onClick={() => dispatch(resetTimer())}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/9923/9923627.png"
          alt="reset"
        />
      </button>
    </div>
  );
};
