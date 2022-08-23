import { useEffect, useState } from 'react';

// Using generics (T) to allow for any values to be debounced
// delay: number that represets ms
const useDebounce = <T,>(newValue: T, delay: number): T => {
  const [value, setValue] = useState(newValue);
  useEffect(() => {
    // Wait for any additional values, and reset the timer of delay seconds
    const handler = setTimeout(() => {
      setValue(newValue);
    }, delay);

    // After delay seconds exit timer loop and return final debounced value
    return () => {
      clearTimeout(handler);
    };
  }, [newValue, delay]);

  return value;
};

export default useDebounce;
