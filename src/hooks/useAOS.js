import React, {useEffect} from "react";
import AOS from "aos";

export const useAOS = (duration = 1000, once = true) => {
    useEffect(() => {
        AOS.init({duration, once})
    }, [duration, once]);
};