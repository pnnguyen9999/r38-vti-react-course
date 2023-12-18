import { useState } from "react";

export default function useWindowSize() {
    const defaultValue = [window.innerWidth, window.innerHeight];
    const [size, setSize] = useState(defaultValue);

    useState(() => {
        const handleResizeWindow = () => {
            setSize([window.innerWidth, window.innerHeight]);

            window.addEventListener("resize", handleResizeWindow);
        };

        return () => window.removeEventListener("resize", handleResizeWindow);
    }, []);

    return {
        width: size[0],
        height: size[1]
    };
}