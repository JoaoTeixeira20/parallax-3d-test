const useLocalStorage = (): {
  getLocalStorageKey: (key: string) => unknown;
  setLocalStorageKey: (key: string, value: unknown) => void;
} => {
  const getLocalStorageKey = (key: string) => localStorage.getItem(key);
  const setLocalStorageKey = (key: string, value: unknown) =>
    localStorage.setItem(key, value as string);
  return {
    getLocalStorageKey,
    setLocalStorageKey,
  };
};

export default useLocalStorage;