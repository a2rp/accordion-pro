import { useCallback, useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const getInitialValue = () => {
        if (typeof window === "undefined") {
            return initialValue;
        }

        try {
            const savedValue = localStorage.getItem(key);

            if (savedValue !== null) {
                return JSON.parse(savedValue);
            }
        } catch {
            return initialValue;
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
                } catch {
                    return nextValue;
                }

                return nextValue;
            });
        },
        [key],
    );

    const resetValue = useCallback(() => {
        try {
            localStorage.removeItem(key);
        } catch {
            void key;
        }

        setStoredValue(initialValue);
    }, [initialValue, key]);

    return [storedValue, setValue, resetValue];
};

export default useLocalStorage;
