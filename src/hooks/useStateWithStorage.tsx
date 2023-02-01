import { useState, useEffect } from 'react';

function getStorageValue(key: string, defaultValue: string) {
  const saved = localStorage.getItem(key) as string;
  const initial = JSON.parse(saved);
  return initial ?? defaultValue;
}

export const useStateWithStorage = (key: string, defaultValue: string) => {
  const [value, setValue] = useState(() => getStorageValue(key, defaultValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
