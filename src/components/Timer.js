import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementTimer } from "../redux/actions/timerActions";  // Import the incrementTimer action

export const Timer = () => {
  const { isRunning, elapsedTime } = useSelector((state) => state);  // Access Redux state
  const dispatch = useDispatch();  // Get the dispatch function

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        // Dispatch incrementTimer action every second
        dispatch(incrementTimer());  // Correct dispatch
      }, 1000);
    }
    return () => {
      clearInterval(interval);  // Cleanup interval on component unmount or when isRunning changes
    };
  }, [isRunning, dispatch]);  // Add dispatch to dependency array to prevent warning

  return <b>{elapsedTime}</b>;  // Render the elapsedTime
};
