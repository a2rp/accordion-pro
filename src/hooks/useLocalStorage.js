import { useCallback, useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const getInitialValue = () => {
        try {
            const savedValue = localStorage.getItem(key);

            if (savedValue !== null) {
                return JSON.parse(savedValue);
            }
        } catch (error) {
            console.error(`Failed to read localStorage key "${key}".`, error);
        }

        return initialValue;
    };

    const [storedValue, setStoredValue] = useState(getInitialValue);

    const setValue = useCallback(
        (value) => {
            setStoredValue((previousValue) => {
                const nextValue =
                    typeof value === "function" ? value(previousValue) : value;

                try {
                    localStorage.setItem(key, JSON.stringify(nextValue));
                } catch (error) {
                    console.error(
                        `Failed to save localStorage key "${key}".`,
                        error,
                    );
                }

                return nextValue;
            });
        },
        [key],
    );

    const resetValue = useCallback(() => {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error(`Failed to reset localStorage key "${key}".`, error);
        }

        setStoredValue(initialValue);
    }, [initialValue, key]);

    return [storedValue, setValue, resetValue];
};

export default useLocalStorage;
